export interface Project {
  name: string;
  description: string;
  skills: SkillName[];
  startYear: number;
  // Omitted when the project is ongoing.
  endYear?: number;
}

export function formatProjectDates({ startYear, endYear }: Project) {
  if (endYear === undefined) return `${startYear} – Ongoing`;
  if (endYear === startYear) return `${startYear}`;
  return `${startYear} – ${endYear}`;
}

// Ordered by importance.
export const coreSkills = [
  "Next.js",
  "React.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "CSS",
] satisfies SkillName[];

export const additionalSkills = [
  "Technical Writing",
  "UI/UX",
  "Claude Code",
  "Web Accessibility (WCAG 2.1 AA)",
  "Web Performance Optimization",
  "React-Leaflet",
  "Zustand",
  "Redux",
  "Bootstrap",
  "SQL",
  "Node.js",
  "Express.js",
  "Python",
] satisfies SkillName[];

export const projectsData: Project[] = [
  {
    name: "GenAI4ED",
    startYear: 2025,
    description:
      "EU-funded platform promoting AI literacy, critical thinking, and responsible generative AI use among students, teachers, and parents. I developed the entire frontend for students and parents, implemented multilingual UI support and accessibility improvements targeting WCAG 2.1 AA, and optimized frontend performance. I used Claude Code to automate repetitive workflow tasks and speed up code implementation.",
    skills: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Web Accessibility (WCAG 2.1 AA)",
      "Web Performance Optimization",
      "Claude Code",
    ],
  },
  {
    name: "A-AAGORA",
    startYear: 2024,
    endYear: 2026,
    description:
      "European research project restoring marine and coastal ecosystems through nature-based solutions, environmental monitoring, and digital knowledge-sharing tools. I developed the entire frontend of its Digital Knowledge System (DKS), including an interactive map using React-Leaflet. I optimized SEO, performance, responsiveness, and accessibility, and advised project partners on UI structure and UI/UX matters.",
    skills: [
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "React-Leaflet",
      "Web Accessibility (WCAG 2.1 AA)",
      "Web Performance Optimization",
      "UI/UX",
    ],
  },
  {
    name: "IT4EST",
    startYear: 2025,
    endYear: 2025,
    description:
      "European research project developing digital technologies and decision-support tools for forest management, wildfire prevention, and emergency response. I bridged the existing COncORDE React application and the forest management requirements, determining how the initial requirements would fit its architecture within an MVP scope while the UI/UX team finalized the design. I also prepared the application for the Next.js transition by identifying technical debt, documenting user flows and functional issues, and mapping components requiring refactoring to guide the development team's two-week effort.",
    skills: [
      "Tailwind CSS",
      "JavaScript",
      "Technical Writing",
    ],
  },
  {
    name: "ONCOSCREEN",
    startYear: 2023,
    endYear: 2025,
    description:
      "European healthcare research project developing AI-assisted screening technologies and Decision Support Systems (DSS) to support personalized risk assessment and early detection of colorectal cancer. I set up the frontend application and developed the majority of its frontend features, including data visualizations and multilingual UI support. I refactored other junior developers' implementations and reviewed their code.",
    skills: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Zustand",
    ],
  },
  {
    name: "KYKLOS 4.0",
    startYear: 2022,
    endYear: 2023,
    description:
      "European industrial research project integrating AI, IoT, and Decision Support Systems (DSS) to optimize manufacturing processes, resource efficiency, and sustainable production. I delivered the frontend one month ahead of schedule under tight deadlines. I implemented user information workflows and contributed to UI/UX decisions in the absence of a dedicated design team.",
    skills: [
      "React.js",
      "JavaScript",
      "UI/UX",
    ],
  },
  {
    name: "Search & Rescue",
    startYear: 2022,
    endYear: 2023,
    description:
      "EU-funded project developing COncORDE, an integrated crisis management platform with decision support for disaster response, emergency coordination, and first responder safety. I developed all assigned frontend components for COncORDE 2.0 within three months, helping resolve significant project delays. I resolved memory leaks and critical authorization and authentication bugs in Redux, and updated legacy code to modern standards.",
    skills: [
      "React.js",
      "JavaScript",
      "Redux",
      "CSS",
      "Bootstrap",
    ],
  },
  {
    name: "NAIADES",
    startYear: 2022,
    endYear: 2022,
    description:
      "European research project developing smart water management solutions using IoT, data analytics, and digital monitoring technologies to improve water efficiency and sustainability. I worked on the Human-Machine Interface (HMI), developing responsive interfaces and data visualizations while also helping integrate the frontend with backend APIs. I also helped adapt the integrations to significant changes in the backend API and data structure just one month before the project's final review.",
    skills: [
      "React.js",
      "JavaScript",
      "CSS",
      "Bootstrap",
    ],
  },
];

export const skillColorMap = {
  // One distinct color per skill. The last three are not shown as badges, so
  // they use solid shades once the 16 pastel hues run out.
  "React.js": "bg-sky-100 text-sky-800",
  JavaScript: "bg-yellow-100 text-yellow-800",
  "Next.js": "bg-indigo-100 text-indigo-800",
  TypeScript: "bg-blue-100 text-blue-800",
  "Tailwind CSS": "bg-cyan-100 text-cyan-800",
  CSS: "bg-lime-100 text-lime-800",
  Bootstrap: "bg-purple-100 text-purple-800",
  Redux: "bg-fuchsia-100 text-fuchsia-800",
  Zustand: "bg-orange-100 text-orange-800",
  "React-Leaflet": "bg-gray-200 text-gray-800",
  "Node.js": "bg-green-700 text-white",
  "Express.js": "bg-slate-600 text-white",
  Python: "bg-red-100 text-red-800",
  SQL: "bg-orange-700 text-white",
  "UI/UX": "bg-pink-100 text-pink-800",
  "Technical Writing": "bg-rose-100 text-rose-800",
  "Web Accessibility (WCAG 2.1 AA)": "bg-emerald-100 text-emerald-800",
  "Web Performance Optimization": "bg-amber-100 text-amber-800",
  "Claude Code": "bg-violet-100 text-violet-800",
} as const;

export type SkillName = keyof typeof skillColorMap;
