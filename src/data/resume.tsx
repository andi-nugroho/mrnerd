import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

// Add Project type
export type Project = {
  title: string;
  href?: string;
  dates: string;
  active?: boolean;
  description: string;
  technologies: string[];
  links?: {
    type: string;
    href: string;
    icon: React.ReactNode;
  }[];
  image?: string;
  video?: string;
  images?: string[];
  themeColor?: string;
  bgColor?: string;
};

export const DATA = {
  name: "Andi Nugroho",
  initials: "Andi",
  url: "https://andidev.space",
  location: "East Java, Indonesia",
  locationLink: "https://maps.app.goo.gl/dS4qGRDDq3FrV8A99",
  description:
    "Full Stack Developer passionate about solving complex challenges with modern web technologies. With a keen interest in the decentralized space, I'm open to new collaborations and opportunities to build the future of the web.",
  summary:
    "I'm driven by the challenge of solving complex problems through code. As a Full Stack Developer, I leverage modern technologies to create robust and efficient web solutions, with a strong focus on the decentralized space and its potential for building more equitable applications. As a testament to my commitment and technical foundation, I hold a [Software Engineer Intern](https://www.hackerrank.com/certificates/ad88ab070e0e) certification from HackerRank. I'm actively seeking opportunities to collaborate on projects that push the boundaries of the web.",
  avatarUrl: "/me.jpeg",
  skillGroups: [
    {
      group: "Programming Languages",
      color: "green",
      skills: [
        { label: "JavaScript", icon: "javascript" },
        { label: "TypeScript", icon: "typescript" },
        { label: "Python", icon: "python" },
        { label: "PHP", icon: "php" },
        { label: "Go", icon: "go" },
      ]
    },
    {
      group: "Frameworks & Libraries",
      color: "green",
      skills: [
        { label: "React", icon: "react" },
        { label: "Next.js", icon: "nextjs" },
        { label: "Node.js", icon: "nodeJs" },
        { label: "Nest.js", icon: "nestJs" },
        { label: "Express.js", icon: "expressJs" },
        { label: "Vue.js", icon: "vueJs" },
        { label: "React Native", icon: "reactNative" },
        { label: "Vite", icon: "vite" },
        { label: "Laravel", icon: "laravel" },
        { label: "Tailwind CSS", icon: "tailwindcss" },
        { label: "Framer Motion", icon: "framermotion" },
        { label: "Socket.io", icon: "socketIo" },
        { label: "Prisma", icon: "prisma" },
        { label: "Drizzle", icon: "drizzle" }
      ]
    },
    {
      group: "Tools, Platforms & DevOps",
      color: "green",
      skills: [
        { label: "Git", icon: "git" },
        { label: "GitHub", icon: "GitHub" },
        { label: "Docker", icon: "docker" },
        { label: "Nginx", icon: "nginx" },
        { label: "PostgreSQL", icon: "postgreSql" },
        { label: "MySQL", icon: "mysql" },
        { label: "MongoDB", icon: "mongoDb" },
        { label: "SQLite", icon: "sqlite" },
        { label: "Redis", icon: "redis" },
        { label: "Oracle", icon: "oracle" },
        { label: "Supabase", icon: "supabase" },
        { label: "AWS", icon: "aws" },
        { label: "Firebase", icon: "firebase" },
        { label: "Vercel", icon: "vercel" }
      ]
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "dev.andinugroho@gmail.com",
    tel: "+6285316065960",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/andi-nugroho",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/andiinugroho",
        icon: Icons.linkedin,

        navbar: true,
      },
      Devto: {
        name: "dev.to",
        url: "https://dev.to/andinugroho",
        icon: Icons.devto,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:dev.andinugroho@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Freelance",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Blockchain & Full Stack Developer",
      logoUrl: "/self-employed.png",
      start: "Jan 2023",
      end: "Current",
      description:
        "Integrated blockchain solutions with front-end frameworks like React and Node.js to build seamless full-stack applications."
    },
  ],
  education: [
    {
      school: "Muhammadiyah University of Cirebon (UMC)",
      href: "https://umc.ac.id/",
      degree: "Bachelor's of Engineering (BE) - Informatics Engineering",
      logoUrl: "/UMC.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Premier League hub",
      href: "https://premierleague.anditech.site",
      dates: "2025",
      active: true,
      themeColor: "from-blue-500",
      bgColor: "bg-blue-50",
      description:
        "A modern and responsive web application designed for football fans to access the latest information from the English Premier League. This application provides real-time data such as league standings, top scorer lists, as well as match schedules and results. Built with Next.js and TypeScript, this project fetches and displays up-to-date information from an external sports API in a clean and user-friendly interface.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Shadcn/ui",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://premierleague.anditech.site",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/andi-nugroho/premier-league-hub",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      images: [
        "/screenshots/screen1.png",
        "/screenshots/screen1-light.png",
        "/screenshots/side1.png",
        "/screenshots/side1-light.png",
        "/screenshots/side2.png",
        "/screenshots/side2-light.png",
      ],
    },
    {
      title: "Open Resume",
      href: "https://openresume.vercel.app",
      dates: "2025",
      active: true,
      themeColor: "from-slate-500",
      bgColor: "bg-slate-100",
      description:
        "This project is a personal deployment of Open Resume, a popular open-source application designed to simplify the resume creation process. It provides a powerful WYSIWYG (What You See Is What You Get) editor that allows users to craft professional resumes with ease and download them as a pixel-perfect PDF.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "TaildwindCSS",
        "Shadcn/ui",
        "Radix UI",
        "Zustand",
        "React PDF",
        "Vercel"
      ],
      links: [
        {
          type: "Website",
          href: "https://openresume.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      images: [
        "/gpu/gpu1.png",
        "/gpu/gpu2.png",
        "/gpu/gpu3.png",
        "/gpu/gpu4.png",
        "/gpu/gpu5.png",
        "/gpu/gpu6.png",
        "/gpu/gpu7.png",
      ],
    },
    {
      title: "ZexoCash",
      href: "https://zexocash.anditech.site",
      dates: "2023",
      active: true,
      themeColor: "from-slate-800",
      bgColor: "bg-slate-100",
      description:
        "A comprehensive full-stack DApp for an Initial Coin Offering (ICO) of the ZexoCash (ZEXO) token. This project features a responsive landing page for marketing and a secure, interactive portal for users to connect their wallets and purchase ERC20 tokens directly from the smart contract. The entire platform demonstrates end-to-end blockchain development, from the Solidity smart contracts to the user-facing web application.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Prisma",
        "TailwindCSS",
        "Ether.js",
        "Solidity",
        "Vercel",
        "Ethereum Network(tesnet)"
      ],
      links: [
        {
          type: "Website",
          href: "https://zexocash.anditech.site",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/andi-nugroho/ico-token-sale",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      images: [
        "/rezour/zx1.png",
        "/rezour/zx2.png",
        "/rezour/zx3.png",
        "/rezour/zx4.png",
        "/rezour/zx5.png",
        "/rezour/zx6.png",
        "/rezour/zx7.png",
        "/rezour/zx8.png",
      ],
    },
    {
      title: "DecentralWatch",
      href: "https://decentralwatch.anditech.site",
      dates: "2025",
      active: true,
      themeColor: "from-orange-500",
      bgColor: "bg-orange-50",
      description:
        "A news platform designed specifically for enthusiasts and professionals in the Web3 industry. Decentralwatch serves as a unified information hub by aggregating the latest news from various trusted sources worldwide and displaying it in a clean, fast, and distraction-free interface.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Shadcn/ui",
        "CryptoCompare News API",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://decentralwatch.anditech.site",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/vids/decentralwatch.mp4",
    },
    {
      title: "Foundev",
      href: "https://foundev.anditech.site",
      dates: "2025",
      active: true,
      themeColor: "from-blue-500",
      bgColor: "bg-blue-50",
      description:
        "A landing page designed to introduce Foundev, a community platform aimed at bringing together founders and developers. The website serves as the main gateway for potential members, presenting the community's vision and mission with a professional and engaging design.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Taildwind CSS",
        "Framer Motion",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://foundev.anditech.site",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/vids/foundev.mp4",
    },
    {
      title: "Madrid Software",
      href: "https://madrid-software.vercel.app",
      dates: "2024",
      active: true,
      themeColor: "from-emerald-600",
      bgColor: "bg-emerald-50",
      description:
        "Madrid Software is a modern SaaS dashboard designed for managing and monitoring cloud-based GPU instances. The platform provides users with a comprehensive overview of their resources, including real-time cost predictions, instance status, and performance metrics. Built with a full-stack Next.js architecture and a Supabase backend, this project showcases the ability to create complex, data-driven applications with a polished and professional user interface.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn/ui, Tremor",
        "Supabase, PostgreSQL",
        "Framer Motion",
        "Recharts",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://madrid-software.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/vids/ms.mp4",
    },
  ] as Project[],
} as const;
