const projects = [
  {
    title: "HR Attrition Analysis",
    category: "Power BI",
    type: "HR ANALYTICS",
    image: "assets/images/hr-attrition-analysis.png",
    description: "Interactive Power BI dashboard analyzing employee attrition, demographics, departments, job roles, salary levels, job satisfaction, and experience.",
    tools: ["Power BI", "Power Query", "DAX", "Data Modeling", "Data Visualization"],
    problem: "Understand workforce and attrition patterns across departments, gender, job roles, salary slabs, satisfaction, and experience.",
    process: [
      "Prepared and structured the HR employee data",
      "Used Power Query for data preparation",
      "Applied DAX-based calculations and KPI development",
      "Built interactive filters and slicers",
      "Analyzed attrition across departments, gender, job roles, salary slabs, satisfaction, and experience"
    ],
    insights: [
      "The dashboard provides workforce KPIs including total employees, attrition count, attrition rate, and average experience.",
      "Department, job role, salary slab, satisfaction, gender, and experience are used to examine attrition patterns.",
      "The analysis is designed to support further HR investigation and workforce planning without treating observed relationships as causal."
    ],
    outcome: "A decision-support HR dashboard that turns employee-level data into interactive attrition analysis.",
    github: "https://github.com/yatijaiswal435-collab/HR-Attrition-Analysis"
  },
  {
    title: "2025 Job Market Analysis",
    category: "Excel",
    type: "JOB MARKET ANALYTICS",
    image: "assets/images/job-market-analysis.png",
    description: "Interactive Excel dashboard analyzing the 2025 job market across job demand, locations, salaries, industries, work modes, experience levels, and requested skills.",
    tools: ["Excel", "Data Cleaning", "Data Analysis", "Pivot Tables", "Pivot Charts", "KPI Cards", "Interactive Filters", "Data Visualization", "Dashboard Design"],
    problem: "Understand employment opportunities, salary patterns, locations, work modes, industries, and employer-requested skills in the analyzed 2025 job listings.",
    process: [
      "Cleaned and prepared job-market data",
      "Applied Excel analytical, logical, conditional, and lookup functions",
      "Built PivotTable and PivotChart analysis",
      "Created KPI cards and interactive filters",
      "Analyzed job roles, locations, salary by experience, industries, work modes, and requested skills"
    ],
    insights: [
      "The analyzed dashboard contains 420 jobs with an average salary of 7.74 LPA.",
      "Sales Executive appears as the most frequently listed role in the analyzed data.",
      "Bengaluru is a leading location in the analyzed listings.",
      "The dashboard compares Remote, Hybrid, and On-site work arrangements and highlights frequently requested skills."
    ],
    outcome: "A practical Excel dashboard connecting job-market data with career and hiring insights.",
    github: "https://github.com/yatijaiswal435-collab/Job_Market_Analysis_Dashboard"
  },
  {
    title: "Web Data Analysis",
    category: "Python",
    type: "WEB DATA ANALYTICS",
    image: null,
    description: "Python-based analysis of website traffic and user engagement to understand user behavior, traffic sources, and website performance.",
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    problem: "Understand website traffic, user engagement, channel performance, and patterns in user behavior.",
    process: [
      "Loaded and cleaned the dataset",
      "Handled missing values and formatted the data",
      "Performed exploratory data analysis",
      "Created line graphs, bar charts, box plots, heatmaps, and stacked bar charts",
      "Analyzed website traffic and user engagement patterns"
    ],
    insights: [
      "Direct and Organic Social channels brought the highest number of users.",
      "Organic Social users showed better engagement on the website.",
      "Traffic and activity varied across time periods and channels.",
      "Higher traffic did not always correspond to higher engagement."
    ],
    outcome: "A Python EDA project that turns web traffic and engagement data into behavioral and performance insights.",
    github: "https://github.com/yatijaiswal435-collab/web-data-analysis"
  },
  {
    title: "Hospital Data Analysis",
    category: "SQL & Python",
    type: "HEALTHCARE ANALYTICS",
    image: null,
    description: "Healthcare analytics project combining MySQL, SQL, Python, Pandas, and SQLAlchemy to analyze hospital operations across relational data.",
    tools: ["MySQL", "SQL", "Python", "Pandas", "SQLAlchemy", "Jupyter Notebook"],
    problem: "Answer practical healthcare business questions around patients, doctors, appointments, treatments, billing, revenue, and hospital operations.",
    process: [
      "Connected Python to the MySQL healthcare database using SQLAlchemy",
      "Worked across five relational tables: patients, doctors, appointments, treatments, and billing",
      "Performed data-quality checks for missing and duplicate records",
      "Used SQL filtering, aggregation, grouping, joins, subqueries, and date functions",
      "Combined SQL results with Pandas-based analysis to generate business insights"
    ],
    insights: [
      "The analyzed dataset contains 50 patients, 10 doctors, and 200 treatments.",
      "Total billing revenue in the analyzed dataset is 551,249.85.",
      "April had the highest number of appointments with 25.",
      "Pediatrics had the highest appointment volume and treatment revenue among the analyzed specializations.",
      "No-show appointments were the most frequent appointment status in the dataset."
    ],
    outcome: "An end-to-end SQL and Python healthcare analysis workflow connecting relational data to operational and revenue insights.",
    github: "https://github.com/yatijaiswal435-collab/Hospital-Data-Analysis"
  }
];

const skillGroups = [
  {name:"Power BI & HR Analytics", items:["Power BI","Power Query","DAX","Data Modeling","Data Visualization","Interactive Filters / Slicers","KPI Cards","HR Analytics"]},
  {name:"Excel Analytics", items:["Excel","SUM","COUNT","MAX","MIN","IF","IFS","AND","OR","COUNTIF","COUNTIFS","SUMIF","SUMIFS","MAXIFS","VLOOKUP","XLOOKUP","Pivot Tables","Pivot Charts","Dashboard Design"]},
  {name:"Python Analytics", items:["Python","Pandas","Matplotlib","Seaborn","Jupyter Notebook","Exploratory Data Analysis"]},
  {name:"SQL & Databases", items:["SQL","MySQL","SQLAlchemy","Relational Databases","SELECT","COUNT","SUM","AVG","MAX","MIN","GROUP BY","ORDER BY","HAVING","LIMIT","Subqueries","INNER JOIN","Date Functions"]},
  {name:"Analytics Practices", items:["Data Cleaning","Data Analysis","Data Visualization","Business Analysis","Healthcare Analytics","Web Data Analytics","Job Market Analysis","Dashboard Development"]}
];
