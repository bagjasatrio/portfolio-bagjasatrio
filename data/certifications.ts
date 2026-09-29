export interface Certification {
  id: string;
  title: string;
  publisher: string;
  year: number;
  pdfFile: string; // path relative to /public/certificates/
  thumbnailFile?: string; // WebP thumbnail path
  verifyUrl?: string;
  relatedSkills: string[]; // skill IDs
}

export const certifications: Certification[] = [
  {
    id: "ibm-ai-python-flask",
    title: "Developing AI Applications with Python and Flask",
    publisher: "IBM",
    year: 2026,
    pdfFile: "developing-ai-applications-with-python-and-flask.pdf",
    relatedSkills: ["python", "flask", "ai-llm"],
  },
  {
    id: "ibm-python-ds-ai",
    title: "Python for Data Science, AI & Development",
    publisher: "IBM",
    year: 2026,
    pdfFile: "python-for-data-science-ai-development.pdf",
    relatedSkills: ["python", "ai-llm"],
  },
  {
    id: "ibm-cicd",
    title: "Continuous Integration and Continuous Delivery (CI/CD)",
    publisher: "IBM",
    year: 2026,
    pdfFile: "continuous-integration-and-continuous-delivery-cicd.pdf",
    relatedSkills: ["cicd"],
  },
  {
    id: "ibm-devops-capstone",
    title: "DevOps Capstone Project",
    publisher: "IBM",
    year: 2026,
    pdfFile: "devops-capstone-project.pdf",
    relatedSkills: ["cicd", "devops"],
  },
  {
    id: "ibm-intro-se",
    title: "Introduction to Software Engineering",
    publisher: "IBM",
    year: 2026,
    pdfFile: "introduction-to-software-engineering.pdf",
    relatedSkills: ["software-engineering"],
  },
  {
    id: "ibm-intro-devops",
    title: "Introduction to DevOps",
    publisher: "IBM",
    year: 2026,
    pdfFile: "introduction-to-devops.pdf",
    relatedSkills: ["devops", "cicd"],
  },
  {
    id: "ibm-agile-scrum",
    title: "Introduction to Agile Development and Scrum",
    publisher: "IBM",
    year: 2026,
    pdfFile: "introduction-to-agile-development-and-scrum.pdf",
    relatedSkills: ["agile"],
  },
  {
    id: "ibm-tdd-bdd",
    title: "Introduction to Test and Behavior Driven Development",
    publisher: "IBM",
    year: 2026,
    pdfFile: "introduction-to-test-and-behavior-driven-development.pdf",
    relatedSkills: ["testing", "python"],
  },
  {
    id: "ibm-eda-ml",
    title: "Exploratory Data Analysis for Machine Learning",
    publisher: "IBM",
    year: 2026,
    pdfFile: "exploratory-data-analysis-for-machine-learning.pdf",
    relatedSkills: ["python", "ai-llm"],
  },
  {
    id: "ibm-supervised-classification",
    title: "Supervised Machine Learning: Classification",
    publisher: "IBM",
    year: 2026,
    pdfFile: "supervised-machine-learningclassification.pdf",
    relatedSkills: ["python", "ai-llm"],
  },
  {
    id: "ibm-supervised-regression",
    title: "Supervised Machine Learning: Regression",
    publisher: "IBM",
    year: 2026,
    pdfFile: "supervised-machine-learningregression.pdf",
    relatedSkills: ["python", "ai-llm"],
  },
  {
    id: "ibm-unsupervised-ml",
    title: "Unsupervised Machine Learning",
    publisher: "IBM",
    year: 2026,
    pdfFile: "unsupervised-machine-learning.pdf",
    relatedSkills: ["python", "ai-llm"],
  },
  {
    id: "bass-ai-literacy",
    title: "AI Literacy for Everyone: Understand, Apply, Create",
    publisher: "BASS Training Center & Consultant",
    year: 2025,
    pdfFile: "sertifikat-gemawira-udinus-literasi-ai-untuk-semua-kenali-gunakan-ciptakan-muhammad-bagja-satrio.pdf",
    relatedSkills: ["ai-llm"],
  },
];
