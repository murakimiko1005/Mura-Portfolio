import {
  FaTelegram,
  FaYoutube,
  FaDiscord,
  FaSkype,
  FaGoogle
} from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 55,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 60,
    height: 80,
  },
 
  {
    skill_name: "PHP",
    image: "php.svg",
    width: 55,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "https://techstack-generator.vercel.app/python-icon.svg",
    width: 65,
    height: 80,
  },
  {
    skill_name: "Django",
    image: "https://techstack-generator.vercel.app/django-icon.svg",
    width: 65,
    height: 80,
  },

  {
    skill_name: "React",
    image: "https://techstack-generator.vercel.app/react-icon.svg",
    width: 70,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "https://techstack-generator.vercel.app/redux-icon.svg",
    width: 67,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 55,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 75,
    height: 80,
  },
  

] as const;


export const FRONTEND_SKILL = [
  {
    skill_name: "Sass",
    image: "https://techstack-generator.vercel.app/sass-icon.svg",
    width: 65,
    height: 80,
  },
 
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 56,
    height: 80,
  },
  {
    skill_name: "GitHub",
    image: "https://techstack-generator.vercel.app/github-icon.svg",
    width: 80,
    height: 60,
  },
  {
    skill_name: "Prettier",
    image: "https://techstack-generator.vercel.app/prettier-icon.svg",
    width: 70,
    height: 80,
  },
  {
    skill_name: "ESLint",
    image: "https://techstack-generator.vercel.app/eslint-icon.svg",
    width: 65,
    height: 80,
  }

] as const;

export const BACKEND_SKILL = [

  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 50,
    height: 55,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 60,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "https://techstack-generator.vercel.app/mysql-icon.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 65,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 65,
    height: 80,
  },
  {
    skill_name: "REST API",
    image: "https://techstack-generator.vercel.app/restapi-icon.svg",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "AWS",
    image: "https://techstack-generator.vercel.app/aws-icon.svg",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Nginx",
    image: "https://techstack-generator.vercel.app/nginx-icon.svg",
    width: 75,
    height: 80,
  },

] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Docker",
    image: "https://techstack-generator.vercel.app/docker-icon.svg",
    width: 70,
    height: 70,
  },
] as const;

export const PROJECTS = [
  {
    title: "Manas Aesthetics Centre",
    description:
      'Designed and developed a full-scale web solution for ADCO, covering UI/UX design, frontend and backend development, API integration, and seamless deployment. Built for performance, scalability, and security to deliver a smooth user experience.',
    image: "/projects/1.png",
    link: "https://manasaesthetics.com/",
  },
  {
    title: "Eatcheap App",
    description:
      'Designed and developed a complete e-learning platform, including UI/UX design, full-stack development, and deployment. Built for an engaging and interactive user experience, ensuring seamless functionality and scalability.',
    image: "/projects/2.png",
    link: "https://eatcheap.app/",
  },
  {
    title: "Kitchien Planner",
    description:
      'Developed a powerful Discord bot with seamless API integration, custom commands, and automation. Built a full-featured UI with frontend and backend development for an intuitive and efficient user experience.',
    image: "/projects/3.png",
    link: "https://planner.diy-kitchens.com/",
  },
  {
    title: "Casino Betting Game",
    description:
      'Developed a secure and scalable casino betting site with full-stack development, seamless API integration, and OAuth for secure authentication. Built for speed, reliability, and an engaging user experience.',
    image: "/projects/4.png",
    link: "http://bunny-bet-casino.onrender.com/",
  },
  {
    title: "Ecommerce",
    description:
      'Experienced in building websites and business applications with a focus on scalability, performance, and security. Skilled in full-stack development, writing clean, efficient code for both frontend and backend. Actively involved in software design, testing, and debugging to ensure seamless functionality and reliability.',
    image: "/projects/5.png",
    link: "https://gethugothemes.com/products/hargo?utm_source=hargo_github&utm_medium=referral&utm_campaign=gh_theme_about",
  },
  {
    title: "Move Management",
    description:
      'A decentralized platform enabling users to buy, sell, and stake SolView Solana tokens. Built with a React-TradingView widget for seamless trading. Staking rewards are calculated using APY, reflecting projected annual earnings based on compounding intervals. Integrated a launchpad smart contract, allowing users to securely purchase tokens during the launch phase.',
    image: "/projects/6.png",
    link: "https://movie-magnet-smoky.vercel.app/",
  }
] as const;

export const TYPED_STRINGS = [
  "I design and develop things",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I design and develop motion",
];

export const SOCIALS = [
  {
    name: "Telegram",
    icon: FaTelegram,
    link: "https://t.me/mura1005",
  },
  {
    name: "Discord",
    icon: FaDiscord,
    link: "https://discord.com/channels/@me/1363221359999848510",
  },
  {
    name: "Github",
    icon: RxGithubLogo,
    link: "https://github.com/murakimiko1005",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "Telegram",
        icon: FaTelegram,
        link: "https://t.me/mura1005",
      },
      {
        name: "Discord",
        icon: FaDiscord,
        link: "https://discord.gg/huYghttps://discord.com/channels/@me/1363221359999848510"
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/murakimiko1005",
      },
    ],
  },
  
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/murakimiko1005/Mura-Portfolio",
};
