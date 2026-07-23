import {
  BriefcaseBusiness,
  Code2,
  Github,
  Linkedin,
  Mail,
  ShieldCheck
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "21% Loaded", href: "#beyond-portfolio" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#cv" },
  { label: "Contact", href: "#contact" }
];

export const profile = {
  name: "Edmond Ilbawi",
  subtitle:
    "Computer Science student focused on analytical problem solving, decision making, and building practical software systems.",
  email: "edmondilbawi@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/edmond-ilbawi-ba2788300",
  githubUrl: "https://github.com/edmondilbawi"
};

export const aboutText =
  "I am a Computer Science student at the University of Balamand, interested in software engineering and building meaningful digital solutions.\n\nThrough university, projects, and conversations with people around me, I have learned that growth is not only academic. It also comes from perspective, curiosity, discipline, and the willingness to keep learning.";

export type EducationEntry = {
  institution: string;
  degree: string;
  dates: string;
  location: string;
  description: string;
};

export const educationEntries: EducationEntry[] = [
  {
    institution: "University of Balamand",
    degree: "Bachelor of Science, Computer Science",
    dates: "August 2024 - June 2027",
    location: "Lebanon",
    description:
      "Focused on computer science, software engineering, and practical problem solving."
  },
  {
    institution: "The International School of Choueifat",
    degree: "High School Diploma",
    dates: "September 2011 - July 2023",
    location: "Syria",
    description:
      "Built the academic discipline, communication, and leadership foundations that shaped my early growth."
  }
];

export const skillCategories = [
  {
    category: "Programming & Systems",
    icon: Code2,
    skills: [
      "C",
      "C++",
      "Java",
      "Object Oriented Programming",
      "Data Structures",
      "Systems Programming"
    ]
  },
  {
    category: "Web & Application Development",
    icon: BriefcaseBusiness,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Express"
    ]
  },
  {
    category: "Databases, Tools & Practices",
    icon: ShieldCheck,
    skills: [
      "SQL",
      "PostgreSQL",
      "Git",
      "GitHub",
      "VS Code",
      "REST APIs",
      "Debugging",
      "Documentation"
    ]
  }
];

export type Project = {
  title: string;
  status: string;
  preview: {
    kind: "bloodlink" | "social-platform" | "banking-system";
  };
  description: string;
  techStack: string[];
  highlights: string[];
  scopeNote?: string;
  sourceNote?: string;
  repositoryUrl?: string;
};

export const projects: Project[] = [
  {
    title: "BloodLink",
    status: "Featured Full-Stack Project",
    preview: {
      kind: "bloodlink"
    },
    description:
      "Role-based hospital blood donation and donor outreach platform with PostgreSQL-backed workflows for registration, donor eligibility, blood compatibility, inventory management, emergency requests, and protected administration.",
    techStack: [
      "Node.js",
      "Express",
      "EJS",
      "PostgreSQL",
      "Bootstrap",
      "RBAC",
      "Web Security",
      "Automated Testing"
    ],
    highlights: [
      "Built role-specific registration, donor, patient, and administrator workflows.",
      "Applied donor eligibility checks and complete ABO/Rh compatibility matching.",
      "Protected sensitive operations with sessions, CSRF controls, authorization, throttling, and automated tests."
    ],
    scopeNote:
      "Academic software engineering showcase for local review.",
    repositoryUrl:
      "https://github.com/edmondilbawi/BloodLink/tree/express-web-version"
  },
  {
    title: "Secure Multi threaded Banking System",
    status: "Operating Systems Project",
    preview: {
      kind: "banking-system"
    },
    description:
      "Built a concurrent banking simulator in C using POSIX threads, named FIFOs, and per-account mutex synchronization to handle multiple client requests while protecting account operations from race conditions.",
    techStack: [
      "C",
      "POSIX Systems Programming",
      "Threads",
      "IPC",
      "Mutexes",
      "OpenSSL",
      "Makefile"
    ],
    highlights: [
      "Used public and private named FIFOs with a worker thread per request for client-server communication.",
      "Protected deposits, withdrawals, and transfers with per-account mutexes and ordered locking.",
      "Implemented salted SHA-256 authentication and encrypted account balance storage with OpenSSL."
    ],
    repositoryUrl: "https://github.com/edmondilbawi/SMBS"
  },
  {
    title: "Advanced Data Structures Social Platform",
    status: "Academic Project",
    preview: {
      kind: "social-platform"
    },
    description:
      "Built a social platform in C++ using object-oriented design and custom data structures to manage users, posts, likes, comments, messaging, and notifications through modular components.",
    techStack: ["C++", "Object Oriented Programming", "Data Structures"],
    highlights: [
      "Modeled platform entities and interactions as structured C++ components.",
      "Applied data structure choices to organize users, content, messages, notifications, and activity.",
      "Practiced modular object-oriented design while translating abstract structures into application behavior."
    ],
    sourceNote:
      "Collaborative academic project. Code walkthrough available on request."
  }
];

export type ExperienceEntry = {
  organization: string;
  role: string;
  dates: string;
  location: string;
  description: string;
  bullets: string[];
};

export const cvText =
  "A focused view of the work, service, and leadership experiences behind this portfolio.";

export const experienceEntries: ExperienceEntry[] = [
  {
    organization: "UOB Developer Club",
    role: "Public Relations Officer",
    dates: "August 2025 – June 2026",
    location: "Beirut Governorate, Lebanon",
    description:
      "Represented the Developer Club by promoting its initiatives, strengthening engagement within the student community, and supporting communication between club members, students, and external audiences.",
    bullets: [
      "Promoted club initiatives and increased awareness of events and activities.",
      "Supported communication between members, students, and external audiences.",
      "Contributed to organizing initiatives that encouraged collaboration, innovation, and professional development.",
      "Helped foster an inclusive environment where students could learn, connect, and grow together."
    ]
  },
  {
    organization: "Lady of Damascus Church",
    role: "Volunteer",
    dates: "August 2018 - August 2025",
    location: "Damascus Governorate, Syria",
    description:
      "Volunteered in ongoing community initiatives supporting educational and social activities while developing teamwork, communication, and leadership skills.",
    bullets: [
      "Supported educational and social community activities.",
      "Collaborated with volunteers to organize events and contribute to community engagement.",
      "Developed teamwork, communication, and leadership skills while serving individuals from diverse backgrounds.",
      "Demonstrated sustained commitment to service, responsibility, and giving back to the community."
    ]
  },
  {
    organization: "International School of Choueifat",
    role: "Head Prefect, Academic Department",
    dates: "September 2022 – June 2023",
    location: "Damascus Governorate, Syria",
    description:
      "Led and supported students within the Academic Department while promoting a positive, collaborative learning environment.",
    bullets: [
      "Supported students and encouraged academic engagement.",
      "Coordinated with students and staff on academic initiatives.",
      "Served as a liaison between students and faculty.",
      "Strengthened leadership, communication, and organizational skills through mentoring and student support."
    ]
  },
  {
    organization: "Byblos Bank Syria",
    role: "Intern",
    dates: "February 2024 - March 2024",
    location: "Syria",
    description:
      "Gained practical exposure to software development, IT operations, cybersecurity practices, and the role of technology in secure banking systems.",
    bullets: [
      "Worked alongside experienced professionals in a banking environment.",
      "Observed how technology supports secure and efficient financial systems.",
      "Strengthened analytical thinking and problem solving skills.",
      "Developed a greater understanding of teamwork, professionalism, and technology in the financial sector."
    ]
  },
  {
    organization: "Direct Line",
    role: "Intern",
    dates: "July 2021 - August 2021",
    location: "Syria",
    description:
      "Supported marketing initiatives and gained insight into customer engagement, brand communication, and business strategy.",
    bullets: [
      "Assisted with campaign planning, customer outreach, and promotional activities.",
      "Gained insight into marketing strategies and customer engagement.",
      "Developed communication, teamwork, and organizational skills.",
      "Learned how businesses connect with customers and adapt strategies to meet market needs."
    ]
  }
];

export const contactText =
  "Open to internships, academic and professional opportunities, collaborations, and project discussions where I can keep learning, building, and contributing.";

export const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail
  },
  {
    label: "LinkedIn",
    value: "www.linkedin.com/in/edmond-ilbawi-ba2788300",
    href: profile.linkedinUrl,
    icon: Linkedin
  },
  {
    label: "GitHub",
    value: "github.com/edmondilbawi",
    href: profile.githubUrl,
    icon: Github
  }
];
