import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  frauddetector,
  sentimentai,
  globe,
  codementorx,
  threejs,
  smsspamdetector,
  energyx,
  tradingbot,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer & UX Designer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "UX Engineer",
    company_name: "ETAS Bosch",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2025 - Present",
    points: [
      "Creating interactive prototypes in Figma and Adobe XD for AUTOSAR RTA-CAR automotive software, supporting efficient ECU configuration workflows.",
      "Using Miro for journey mapping and collaborative design planning, applying human-centered design (HCD) principles within Agile sprints.",
      "Conducting usability testing and A/B testing with automotive engineers to validate and refine design solutions.",
    ],
  },
  {
    title: "Computing Teaching Internship",
    company_name: "Lionheart Educational Trust",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Jul 2025",
    points: [
      "Supported planning and delivery of computing lessons at Judgemeadow College, including KS3 (Years 7–9 Computing), GCSE Computer Science (Year 10) and A-Level Computer Science & CTEC IT (Year 12).",
      "Supported primary education through lesson observations and assistance at Brocks Hill Primary School.",
      " Collaborated with lead teachers to adapt curriculum materials, develop practical exercises and created a report presentation about 'Passive VS interactive teaching techniques in KS3 Computing lessons​",
    ],
  },
  {
    title: "Computer Science Outreach Ambassador",
    company_name: "University of Leicester",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sept 2023 - Jan 2025",
    points: [
      "Delivered coding workshops and interactive sessions for prospective students to promote computer science.",
      "Engaged with parents, teachers, and school groups during open days and campus visits to answer questions about studying Computer Science.",
      "Designed engaging outreach activities (e.g., Scratch games, problem-solving challenges) to inspire interest in technology.",
      "Collaborated with staff and fellow ambassadors to create inclusive, welcoming experiences at university events.",
    ],
  },
];

const projects = [
  {
    name: "Card Fraud Detector",
    description:
      "Built a credit card fraud detection model on an imbalanced dataset (0.172% fraud) using Scikit-Learn and Snap ML. Compared Decision Tree vs. SVM, with Snap ML delivering faster training and similar ROC-AUC performance.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "snap ML",
        color: "pink-text-gradient",
      },
    ],
    image: frauddetector,
    source_code_link: "https://github.com/rida05432/Card-Fraud-Detector",
  },
  {
    name: "SMS Spam Detector ",
    description:
      "Developed an SMS Spam Detector using Python and NLP techniques. Applied text preprocessing and trained multiple ML models (Naïve Bayes, Logistic Regression, SVM, Random Forest), achieving ~95% accuracy with balanced precision and recall.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "machine learning",
        color: "pink-text-gradient",
      },
    ],
    image: smsspamdetector,
    source_code_link: "https://github.com/rida05432/SMS-Spam-Detector-",
  },
  {
    name: "Trading Bot",
    description:
      "Built during a Morgan Stanley campus hackathon, this project simulates an automated trading strategy for EUR/GBP and others. The bot uses EMA signals to execute trades, applying risk management to handle volatility and track portfolio performance.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "algorithmic trading",
        color: "green-text-gradient",
      },
      {
        name: "fintech",
        color: "pink-text-gradient",
      },
    ],
    image: tradingbot,
    source_code_link: "https://github.com/rida05432/Morgan-Stanley-Trading-Bot",
  },
  {
    name: "Sentiment AI",
    description:
      "A modern, interactive analytics dashboard built with React, TailwindCSS, and Recharts, designed to analyze and visualize customer review sentiment for e-commerce platforms (inspired by TikTok Shop).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Data Visualisation",
        color: "pink-text-gradient",
      },
    ],
    image: sentimentai,
    source_code_link: "https://github.com/rida05432/Sentiment-AI",
  },
  {
    name: "Globe Travel Application",
    description:
      "Designed Globe Travel, a prototype platform for travelers combining attraction discovery, hotel booking, and itinerary planning with an AI chatbot and drag-and-drop trip planner.",
    tags: [
      {
        name: "UX Design",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "JQuery",
        color: "pink-text-gradient",
      },
    ],
    image: globe,
    source_code_link: "https://github.com/rida05432/Globe",
  },
  {
    name: "CodeMentorX",
    description:
      "Built CodeMentorX, a mentorship platform connecting tech professionals with industry experts from companies. Features include mentor discovery, secure session booking, personalized 1:1 career development across fields in tech for students.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "webapp",
        color: "pink-text-gradient",
      },
    ],
    image: codementorx,
    source_code_link: "https://github.com/rida05432/CodeMentorX",
  },
  {
    name: "EnergyX",
    description:
      "Built at the EasyA Hackathon, EnergyX is a decentralized application that enables real-time energy tracking, blockchain-based billing. It features role-based dashboards, analytics, and tokenized XRP rewards to incentivize conservation. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "blockchain",
        color: "green-text-gradient",
      },
      {
        name: "sustainability",
        color: "pink-text-gradient",
      },
    ],
    image: energyx,
    source_code_link: "https://github.com/rida05432/EnergyX",
  },
];

export { services, technologies, experiences, projects };
