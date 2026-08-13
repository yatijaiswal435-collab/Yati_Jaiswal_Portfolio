document.addEventListener("DOMContentLoaded", () => {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  // Mobile navigation
  $("#menuToggle").addEventListener("click", () => $("#navMenu").classList.toggle("open"));
  $$("#navMenu a").forEach(a => a.addEventListener("click", () => $("#navMenu").classList.remove("open")));

  // Theme
  const savedTheme = localStorage.getItem("portfolio-theme");
  if (savedTheme === "dark") document.body.classList.add("dark");
  $("#themeToggle").textContent = document.body.classList.contains("dark") ? "☀" : "☾";
  $("#themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const dark = document.body.classList.contains("dark");
    localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
    $("#themeToggle").textContent = dark ? "☀" : "☾";
  });

  // Skills
  $("#skillsGrid").innerHTML = skillGroups.map(group => `
    <article class="skill-card reveal">
      <h3>${group.name}</h3>
      <div class="skill-tags">${group.items.map(x => `<span>${x}</span>`).join("")}</div>
    </article>
  `).join("");

  // Project filters
  const categories = ["All", ...new Set(projects.map(p => p.category))];
  let activeCategory = "All";
  const filters = $("#projectFilters");
  filters.innerHTML = categories.map(c => `<button class="filter-btn ${c==="All"?"active":""}" data-filter="${c}">${c}</button>`).join("");
  $$(".filter-btn").forEach(btn => btn.addEventListener("click", () => {
    activeCategory = btn.dataset.filter;
    $$(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects();
  }));

  function renderProjects() {
    const term = $("#projectSearch").value.toLowerCase().trim();
    const list = projects.filter(p => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const haystack = [p.title,p.category,p.type,p.description,...p.tools,...p.insights].join(" ").toLowerCase();
      return matchesCategory && haystack.includes(term);
    });
    $("#projectsGrid").innerHTML = list.map((p, i) => {
      const originalIndex = projects.indexOf(p);
      return `
        <article class="project-card reveal visible">
          <div class="project-visual ${p.image ? "" : "no-image"}">
            ${p.image ? `<img src="${p.image}" alt="${p.title} dashboard preview" loading="lazy">` : `<div class="project-placeholder"><span>${p.category}</span><strong>${p.title}</strong></div>`}
            <span class="project-type">${p.type}</span>
            <span class="project-number">${String(originalIndex+1).padStart(2,"0")}</span>
          </div>
          <div class="project-info">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <div class="project-tags">${p.tools.map(t => `<span class="tag">${t}</span>`).join("")}</div>
            <div class="project-actions">
              <button class="project-open" data-project="${originalIndex}">View case study →</button>
              <a class="project-link" href="${p.github}" target="_blank" rel="noopener">View GitHub ↗</a>
            </div>
          </div>
        </article>`;
    }).join("");
    $("#emptyState").style.display = list.length ? "none" : "block";
    $$(".project-open").forEach(btn => btn.addEventListener("click", () => openProject(Number(btn.dataset.project))));
  }

  $("#projectSearch").addEventListener("input", renderProjects);
  renderProjects();

  // Project modal
  function openProject(index) {
    const p = projects[index];
    $("#modalBody").innerHTML = `
      <p class="eyebrow">${p.type}</p>
      <h2 id="modalTitle">${p.title}</h2>
      <p>${p.description}</p>
      <div class="detail-grid">
        <div class="detail-box"><strong>Tools</strong>${p.tools.join(" • ")}</div>
        <div class="detail-box"><strong>Category</strong>${p.category}</div>
      </div>
      ${p.image ? `<img class="modal-project-image" src="${p.image}" alt="${p.title} dashboard preview">` : ""}
      <h3>Business question</h3><p>${p.problem}</p>
      <h3>Approach</h3><ul>${p.process.map(x => `<li>${x}</li>`).join("")}</ul>
      <h3>Key takeaways</h3><ul>${p.insights.map(x => `<li>${x}</li>`).join("")}</ul>
      <h3>Outcome</h3><p>${p.outcome}</p>
      <p><a class="btn primary" href="${p.github}" target="_blank" rel="noopener">Open GitHub Repository ↗</a></p>
    `;
    $("#projectModal").classList.add("open");
    $("#projectModal").setAttribute("aria-hidden","false");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    $("#projectModal").classList.remove("open");
    $("#projectModal").setAttribute("aria-hidden","true");
    document.body.style.overflow = "";
  }
  $("#modalClose").addEventListener("click", closeModal);
  $$("[data-close-modal]").forEach(x => x.addEventListener("click", closeModal));
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

  // Scroll progress
  window.addEventListener("scroll", () => {
    const doc = document.documentElement;
    const progress = window.scrollY / (doc.scrollHeight - doc.clientHeight) * 100;
    $("#progressBar").style.width = `${progress}%`;
  });

  // Reveal animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.12});
  $$(".reveal").forEach(el => observer.observe(el));

  // Animated counters
  const counterObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      let value = 0;
      const step = Math.max(1, Math.ceil(target / 25));
      const timer = setInterval(() => {
        value += step;
        if (value >= target) { value = target; clearInterval(timer); }
        el.textContent = value;
      }, 35);
      counterObserver.unobserve(el);
    });
  }, {threshold:.8});
  $$("[data-count]").forEach(el => counterObserver.observe(el));

  $("#year").textContent = new Date().getFullYear();
});

/* Robust project modal handling */
const projectModal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
const modalBackdrop = projectModal ? projectModal.querySelector("[data-close-modal]") : null;

function openProjectModal(index) {
  if (!projectModal || !modalBody || !projects[index]) return;
  const p = projects[index];

  modalBody.innerHTML = `
    <p class="eyebrow">${p.type || p.category}</p>
    <h2 id="modalTitle">${p.title}</h2>
    <p>${p.description}</p>
    ${p.image ? `<img class="modal-project-image" src="${p.image}" alt="${p.title} dashboard preview">` : ""}
    <div class="detail-grid">
      <div class="detail-box"><strong>Tools</strong><span>${p.tools.join(" • ")}</span></div>
      <div class="detail-box"><strong>Category</strong><span>${p.category}</span></div>
    </div>
    <div class="modal-section">
      <h3>Problem</h3>
      <p>${p.problem}</p>
    </div>
    <div class="modal-section">
      <h3>Process</h3>
      <ul>${p.process.map(item => `<li>${item}</li>`).join("")}</ul>
    </div>
    <div class="modal-section">
      <h3>Key insights</h3>
      <ul>${p.insights.map(item => `<li>${item}</li>`).join("")}</ul>
    </div>
    <div class="modal-section">
      <h3>Outcome</h3>
      <p>${p.outcome}</p>
    </div>
    <a class="btn primary modal-github-btn" href="${p.github}" target="_blank" rel="noopener">Open GitHub Repository ↗</a>
  `;

  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeProjectModal() {
  if (!projectModal) return;
  projectModal.classList.remove("is-open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-project]");
  if (trigger) {
    event.preventDefault();
    openProjectModal(Number(trigger.dataset.project));
  }
});

modalClose?.addEventListener("click", closeProjectModal);
modalBackdrop?.addEventListener("click", closeProjectModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && projectModal?.classList.contains("is-open")) {
    closeProjectModal();
  }
});

projectModal?.addEventListener("click", (event) => {
  if (event.target === projectModal) closeProjectModal();
});
