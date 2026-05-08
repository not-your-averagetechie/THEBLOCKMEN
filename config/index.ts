import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "BLOCKMEN | Blockchain × AI",
  description: "We build autonomous systems at the intersection of blockchain and AI. Prediction markets. Automated. Intelligent.",
  keywords: [
    "blockchain",
    "AI",
    "prediction-markets",
    "DeFi",
    "automation",
    "smart-contracts",
    "machine-learning",
    "web3",
    "on-chain",
    "consultancy",
  ] as Array<string>,
  authors: {
    name: "BLOCKMEN",
    url: "https://blockmen.io",
  },
} as const;
