// ---------------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update the site.
// ---------------------------------------------------------------------------

// Tech logos are stored locally in public/images/tech (from devicon.dev)
const devicon = (name) => `/images/tech/${name}.svg`;

const CAREER_START = new Date(2022, 2, 1); // Mar 2022 – first internship
export const yearsOfExperience = Math.floor(
  (Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
);

export const personal = {
  firstName: "Rezaul",
  lastName: "Karim",
  role: "Full Stack Web Developer",
  roles: [
    "Full Stack Developer",
    "Node.js Engineer",
    "React & Next.js Dev",
    "REST API Builder",
  ],
  intro:
    "I design, build and ship full-stack web applications — from clean REST APIs and solid databases to fast, responsive interfaces in React and Next.js.",
  location: "Motijheel, Arambagh, Dhaka",
  country: "Bangladesh",
  timeZone: "Asia/Dhaka",
  email: "rezaul.coderpro@gmail.com",
  phone: "+88 0187779011",
  linkedin: "https://www.linkedin.com/in/md-rezaul-karim/",
  github: "https://github.com/rezaulraj/",
  currentCompany: "Alternative Recruitment",
};

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const stats = [
  { value: yearsOfExperience, suffix: "+", label: "Years building software" },
  { value: 3, suffix: "", label: "Companies worked with" },
  { value: 25, suffix: "+", label: "Tools & technologies" },
];

export const experiences = [
  {
    role: "Full Stack Web Developer",
    company: "Alternative Recruitment",
    location: "Uttara, Dhaka-1230",
    period: "Jan 2025 — Present",
    current: true,
    points: [
      "Design, develop and maintain full-stack web applications end to end.",
      "Build and manage REST APIs, databases and authentication systems with Node.js, Express, MySQL, PostgreSQL and MongoDB.",
      "Develop responsive UIs with React and Next.js and tune them for performance.",
      "Deploy, monitor and maintain applications using Docker, CI/CD and VPS hosting.",
    ],
    tags: ["Node.js", "Express", "React", "Next.js", "PostgreSQL", "MongoDB", "Docker", "CI/CD"],
  },
  {
    role: "Software Developer",
    company: "Merinasoft",
    location: "173 Arambagh, Dhaka-1000",
    period: "Sep 2022 — Dec 2024",
    points: [
      "Analysed requirements and designed efficient software solutions.",
      "Wrote clean, maintainable and well-documented code.",
      "Developed and integrated APIs, databases and backend systems.",
      "Tested, debugged and optimised application performance, and maintained existing systems with the team.",
    ],
    tags: ["JavaScript", "Node.js", "Express", "React", "MySQL", "MongoDB", "Prisma", "Swagger", "Jira", "Linux"],
  },
  {
    role: "Software Development Intern",
    company: "US Software Ltd",
    location: "Panthapath, Dhaka-1205",
    period: "Mar 2022 — Aug 2022",
    link: "https://www.ussoftwareltd.com/",
    points: [
      "Started my professional journey working inside a real software team.",
    ],
    tags: ["Internship"],
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    blurb: "Responsive, pixel-perfect interfaces that feel fast.",
    accent: "from-pink-100/30",
    skills: [
      { name: "HTML", icon: devicon("html5") },
      { name: "CSS", icon: devicon("css3") },
      { name: "JavaScript", icon: devicon("javascript") },
      { name: "TypeScript", icon: devicon("typescript") },
      { name: "React", icon: devicon("react") },
      { name: "Next.js", icon: devicon("nextjs"), invert: true },
      { name: "Tailwind", icon: devicon("tailwindcss") },
    ],
  },
  {
    title: "Backend & APIs",
    blurb: "Scalable services, auth and well-documented REST APIs.",
    accent: "from-violet/30",
    skills: [
      { name: "Node.js", icon: devicon("nodejs") },
      { name: "Express", icon: devicon("express"), invert: true },
      { name: "Prisma", icon: devicon("prisma"), invert: true },
      { name: "Swagger", icon: devicon("swagger") },
      { name: "Postman", icon: devicon("postman") },
      { name: "Python", icon: devicon("python") },
      { name: "C", icon: devicon("c") },
    ],
  },
  {
    title: "Databases",
    blurb: "Relational and document data modelled the right way.",
    accent: "from-blue-50/30",
    skills: [
      { name: "MySQL", icon: devicon("mysql") },
      { name: "PostgreSQL", icon: devicon("postgresql") },
      { name: "MongoDB", icon: devicon("mongodb") },
      { name: "SQL" },
      { name: "NoSQL" },
    ],
  },
  {
    title: "DevOps & Tools",
    blurb: "Shipping to production and keeping it healthy.",
    accent: "from-lime/25",
    skills: [
      { name: "Docker", icon: devicon("docker") },
      { name: "Linux", icon: devicon("linux") },
      { name: "Nginx", icon: devicon("nginx") },
      { name: "Git", icon: devicon("git") },
      { name: "GitHub", icon: devicon("github"), invert: true },
      { name: "Jira", icon: devicon("jira") },
      { name: "VS Code", icon: devicon("vscode") },
      { name: "Cloudinary" },
      { name: "CI/CD" },
    ],
  },
];

// Every skill that has an icon, used by the scrolling marquee.
export const marqueeSkills = skillGroups.flatMap((g) => g.skills.filter((s) => s.icon));

// Replace titles / links / tags with your real projects.
export const projects = [
  { title: "Sofi", img: "/images/p1.png", tags: ["React", "Tailwind"], link: "#" },
  { title: "Jasmina", img: "/images/p2.png", tags: ["Next.js", "Node.js"], link: "#" },
  { title: "d.tampe", img: "/images/p3.png", tags: ["React", "Express"], link: "#" },
  { title: "Blimp.gr", img: "/images/p4.png", tags: ["Next.js", "MongoDB"], link: "#" },
  { title: "Hawk Style Design", img: "/images/p5.png", tags: ["React", "GSAP"], link: "#" },
  { title: "Lewis", img: "/images/p6.png", tags: ["Next.js", "PostgreSQL"], link: "#" },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    school: "Daffodil International University",
    place: "Dhaka, Bangladesh",
    period: "Sep 2016 — Feb 2021",
    grade: "CGPA 3.20 / 4",
    year: "2021",
  },
  {
    degree: "Higher Secondary Certificate (Science)",
    school: "Nabajug College",
    place: "Dhaka, Bangladesh",
    period: "Jan 2013 — Aug 2015",
    grade: "GPA 4.56 / 5",
    year: "2015",
  },
];

export const languages = [
  { name: "Bangla", level: "Native", value: 100 },
  { name: "English", level: "Fluent — spoken & written", value: 85 },
];

export const motivation = [
  "Willingness to learn any foreign language",
  "Motivated to travel at home and abroad",
  "Adapts well to multicultural environments",
  "Innovative, can-do attitude",
];

export const hobbies = [
  { name: "Travel", emoji: "✈️" },
  { name: "Football", emoji: "⚽" },
  { name: "Badminton", emoji: "🏸" },
  { name: "Reading", emoji: "📚" },
];

export const socials = [
  { name: "LinkedIn", href: personal.linkedin, handle: "md-rezaul-karim", icon: "linkedin" },
  { name: "GitHub", href: personal.github, handle: "rezaulraj", icon: "github" },
  { name: "Email", href: `mailto:${personal.email}`, handle: personal.email, icon: "mail" },
];
