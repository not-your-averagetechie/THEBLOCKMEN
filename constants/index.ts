import { RxDiscordLogo, RxTwitterLogo, RxLinkedinLogo } from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
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
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const SOCIALS = [
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://x.com",
  },
  {
    name: "Discord",
    icon: RxDiscordLogo,
    link: "https://discord.com",
  },
  {
    name: "Linkedin",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
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
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const OTHER_SKILL: readonly { skill_name: string; image: string; width: number; height: number }[] = [];

export const PROJECTS = [
  {
    title: "Prediction Market Engine",
    description:
      "On-chain prediction market infrastructure with automated market makers, real-time oracle feeds, and AI-driven liquidity optimization.",
    link: "#",
  },
  {
    title: "AI Signal Intelligence",
    description:
      "ML pipelines analyzing on-chain data, social sentiment, and market microstructure to generate high-conviction trading signals.",
    link: "#",
  },
  {
    title: "DeFi Automation Suite",
    description:
      "Smart contract automation for cross-chain yield strategies, position management, and risk-adjusted portfolio rebalancing.",
    link: "#",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com",
      },
    ],
  },
  {
    title: "Connect",
    data: [
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Partner with us",
        icon: null,
        link: "mailto:hello@blockmen.io",
      },
      {
        name: "Contact",
        icon: null,
        link: "mailto:hello@blockmen.io",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Tech",
    link: "#skills",
  },
  {
    title: "Work",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/blockmen",
};
