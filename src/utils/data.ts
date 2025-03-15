
export interface Repository {
  id: number;
  name: string;
  description: string | null;
  language: string;
  languageColor: string;
  isPublic: boolean;
  stars: number;
  forks: number;
  lastUpdated: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  skills: string[];
  logo?: string;
}

export interface Project {
  image: string;
  id: number;
  name: string;
  description: string | null;
  language: string;
  languageColor: string;
  isPublic: boolean;
  stars: number;
  forks: number;
  lastUpdated: string;
  demoLink?: string;
  repoLink?: string;
}

export interface ProfileData {
  name: string;
  username: string;
  bio: string;
  avatar: string;
  followers: number;
  following: number;
  contributions: number;
  experiencesCount: number;
  projectsCount: number;
  starsCount: number;
  popularProjects: Project[];
  popularExperiences: Experience[];
  experiences: Experience[];
  projects: Project[];
  skills: string[];
}

export const languageColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572A5",
  Java: "#b07219",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Go: "#00ADD8",
  C: "#555555",
  "C++": "#f34b7d",
  "C#": "#178600",
  Swift: "#ffac45",
  Kotlin: "#A97BFF",
  Rust: "#dea584",
  Dart: "#00B4AB",
  Scala: "#c22d40",
  "Objective-C": "#438eff"
};

export const profileData: ProfileData = {
  name: "Tsilavina ANDRIAMIHARISON",
  username: "Tsilavina007",
  bio: "Frontend developer passionate about building beautiful interfaces and developer experience",
  avatar: "/profile.png",
  followers: 120,
  following: 85,
  contributions: 294,
  experiencesCount: 4,
  projectsCount: 6,
  starsCount: 3,
  skills: ["JavaScript", "TypeScript", "React", "Node.js", "CSS", "HTML", "Next.js", "Tailwind CSS"],
  popularProjects: [
    {
      id: 1,
      name: "Portfolio Website",
      description: "A beautiful portfolio website built with Next.js and Tailwind CSS",
      language: "TypeScript",
      languageColor: languageColors["TypeScript"],
      isPublic: true,
      stars: 25,
      forks: 8,
	  image: "/images.jpeg",
      lastUpdated: "Updated 2 days ago",
      demoLink: "https://portfolio-demo.com",
      repoLink: "https://github.com/johndoe/portfolio-website"
    },
    {
      id: 2,
      name: "React Component Library",
      description: "A collection of reusable React components with TypeScript and Tailwind",
      language: "TypeScript",
      languageColor: languageColors["TypeScript"],
      isPublic: true,
      stars: 127,
      forks: 42,
	  image: "/profile.png",
      lastUpdated: "Updated 5 days ago",
      demoLink: "https://react-components-demo.com",
      repoLink: "https://github.com/johndoe/react-component-library"
    }
  ],
  popularExperiences: [
    {
      id: 1,
      company: "Tech Innovations Inc.",
      role: "Senior Frontend Developer",
      period: "Jan 2021 - Present",
      description: "Leading the frontend development team for a B2B SaaS platform. Implemented new features, improved performance, and mentored junior developers.",
      skills: ["React", "TypeScript", "GraphQL", "Jest"]
    },
    {
      id: 2,
      company: "Digital Solutions Ltd.",
      role: "Frontend Developer",
      period: "Mar 2018 - Dec 2020",
      description: "Developed responsive web applications for diverse clients. Collaborated with designers and backend developers to deliver high-quality solutions.",
      skills: ["JavaScript", "Vue.js", "CSS", "RESTful APIs"]
    }
  ],
  projects: [
    {
      id: 3,
      name: "Next.js Blog Starter",
      description: "A feature-rich blog starter template for Next.js",
      language: "JavaScript",
      languageColor: languageColors["JavaScript"],
      isPublic: true,
      stars: 78,
      forks: 24,
	  image: "/profile.png",
      lastUpdated: "Updated 2 weeks ago",
      demoLink: "https://nextjs-blog-demo.com",
      repoLink: "https://github.com/johndoe/nextjs-blog-starter"
    },
    {
      id: 4,
      name: "HTML CSS Playground",
      description: "Experimental designs and layouts built with HTML and CSS",
      language: "HTML",
      languageColor: languageColors["HTML"],
      isPublic: true,
      stars: 12,
      forks: 3,
	  image: "/profile.png",
      lastUpdated: "Updated 3 weeks ago",
      repoLink: "https://github.com/johndoe/html-css-playground"
    },
    {
      id: 5,
      name: "Node API Toolkit",
      description: "A collection of tools and utilities for building Node.js APIs",
      language: "JavaScript",
      languageColor: languageColors["JavaScript"],
      isPublic: true,
      stars: 54,
      forks: 16,
	  image: "/profile.png",
      lastUpdated: "Updated 1 month ago",
      repoLink: "https://github.com/johndoe/node-api-toolkit"
    },
    {
      id: 6,
      name: "Python Data Analysis",
      description: "Data analysis and visualization projects using Python",
      language: "Python",
      languageColor: languageColors["Python"],
      isPublic: true,
      stars: 32,
      forks: 9,
	  image: "/profile.png",
      lastUpdated: "Updated 2 months ago",
      repoLink: "https://github.com/johndoe/python-data-analysis"
    }
  ],
  experiences: [
    {
      id: 1,
      company: "Tech Innovations Inc.",
      role: "Senior Frontend Developer",
      period: "Jan 2021 - Present",
      description: "Leading the frontend development team for a B2B SaaS platform. Implemented new features, improved performance, and mentored junior developers.",
      skills: ["React", "TypeScript", "GraphQL", "Jest"]
    },
    {
      id: 2,
      company: "Digital Solutions Ltd.",
      role: "Frontend Developer",
      period: "Mar 2018 - Dec 2020",
      description: "Developed responsive web applications for diverse clients. Collaborated with designers and backend developers to deliver high-quality solutions.",
      skills: ["JavaScript", "Vue.js", "CSS", "RESTful APIs"]
    },
    {
      id: 3,
      company: "Web Creators Co.",
      role: "Junior Web Developer",
      period: "Jun 2016 - Feb 2018",
      description: "Created and maintained websites for small businesses. Gained experience in frontend development and basic backend integration.",
      skills: ["HTML", "CSS", "JavaScript", "PHP"]
    },
    {
      id: 4,
      company: "Freelance",
      role: "Web Developer",
      period: "2015 - 2016",
      description: "Developed websites for local businesses and non-profit organizations. Enhanced skills in client communication and project management.",
      skills: ["WordPress", "HTML", "CSS", "JavaScript"]
    }
  ]
};

export const contributionData = [
  // Sample contribution data for the graph
  { month: "Jan", contributions: [3,0,1,0,1,0,0,2,0,0,0,3,0,1,0,2,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0] },
  { month: "Feb", contributions: [0,2,0,0,0,1,0,0,0,0,2,0,1,0,0,0,0,0,2,0,0,0,3,0,0,1,0,0] },
  { month: "Mar", contributions: [1,0,0,2,0,1,0,0,0,1,0,0,2,0,0,0,3,0,0,0,0,2,0,0,1,0,0,2,0,0,1] },
  { month: "Apr", contributions: [0,0,2,1,0,0,3,0,0,0,0,3,1,0,0,2,0,0,1,0,0,1,0,0,2,0,0,1,0,0] },
  { month: "May", contributions: [1,0,0,1,2,0,0,3,0,0,1,0,0,2,0,0,0,0,1,0,0,2,1,0,0,3,0,0,0,2,1] },
  { month: "Jun", contributions: [0,1,0,0,0,2,0,0,1,0,0,0,2,0,0,1,0,0,0,0,2,0,0,0,1,0,0,3,0,0] },
  { month: "Jul", contributions: [0,0,1,0,0,2,0,0,0,1,0,0,0,2,0,0,0,1,0,0,2,0,0,0,1,0,0,2,0,0,0] },
  { month: "Aug", contributions: [1,0,0,0,2,0,0,0,1,0,0,2,0,0,1,0,0,0,0,2,0,0,0,1,0,0,2,0,0,0,1] },
  { month: "Sep", contributions: [0,2,0,0,1,0,0,0,2,0,0,1,0,0,0,2,0,0,1,0,0,0,2,0,0,1,0,0,0,0] },
  { month: "Oct", contributions: [0,1,0,0,2,0,0,1,0,0,0,3,0,0,1,0,0,2,0,0,0,1,0,0,2,0,0,1,0,0,0] },
  { month: "Nov", contributions: [1,0,0,2,0,0,0,1,0,0,2,0,0,1,0,0,0,2,0,0,1,0,0,0,2,0,0,1,0,0] },
  { month: "Dec", contributions: [0,0,1,0,0,0,2,0,0,1,0,0,0,2,0,0,1,0,0,0,0,2,0,0,1,0,0,0,2,0,1] },
];
