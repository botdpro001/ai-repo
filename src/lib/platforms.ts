import { Facebook, Instagram, Twitter, Linkedin, Music, Ghost, ArrowRight, Plus } from "lucide-react";

export type PlatformType = "facebook" | "instagram" | "twitter" | "linkedin" | "tiktok" | "snapchat";

export interface PlatformInfo {
  id: PlatformType;
  name: string;
  icon: typeof Facebook;
  color: string;
  bgGradient: string;
  fields: string[];
  analyzeCriteria: string[];
}

export const platforms: PlatformInfo[] = [
  {
    id: "facebook",
    name: "Facebook",
    icon: Facebook,
    color: "text-blue-500",
    bgGradient: "from-blue-600 to-blue-700",
    fields: ["username", "profileUrl", "bio", "friends", "followers", "postCount", "accountAge"],
    analyzeCriteria: [
      "Profile completeness",
      "Friends vs followers ratio",
      "Duplicate or stolen profile images",
      "Recently created accounts",
      "Suspicious links or scam keywords"
    ]
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: Instagram,
    color: "text-pink-500",
    bgGradient: "from-pink-500 via-purple-500 to-orange-400",
    fields: ["username", "profileUrl", "bio", "followers", "following", "postCount", "accountAge"],
    analyzeCriteria: [
      "Followers vs following imbalance",
      "Engagement vs followers ratio",
      "AI-generated or stock profile pictures",
      "Repetitive captions or hashtag spam",
      "Sudden follower spikes"
    ]
  },
  {
    id: "twitter",
    name: "Twitter (X)",
    icon: Twitter,
    color: "text-sky-400",
    bgGradient: "from-sky-400 to-sky-500",
    fields: ["username", "profileUrl", "bio", "followers", "following", "tweetCount", "accountAge"],
    analyzeCriteria: [
      "Tweet frequency and timing",
      "Bot-like behavior patterns",
      "Reposted content ratio",
      "Scam and phishing keywords (NLP)",
      "Follower authenticity"
    ]
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: Linkedin,
    color: "text-blue-700",
    bgGradient: "from-blue-700 to-blue-800",
    fields: ["username", "profileUrl", "bio", "connections", "jobTitle", "company", "accountAge"],
    analyzeCriteria: [
      "Fake job titles or companies",
      "Employment scam indicators",
      "Copy-pasted bios",
      "Profile activity authenticity",
      "Connection network patterns"
    ]
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: Music,
    color: "text-pink-400",
    bgGradient: "from-pink-500 to-cyan-400",
    fields: ["username", "profileUrl", "bio", "followers", "following", "videoCount", "likes"],
    analyzeCriteria: [
      "Repeated or stolen videos",
      "Bot activity patterns",
      "Sudden viral-like follower growth",
      "Engagement authenticity",
      "Content originality"
    ]
  },
  {
    id: "snapchat",
    name: "Snapchat",
    icon: Ghost,
    color: "text-yellow-400",
    bgGradient: "from-yellow-400 to-yellow-500",
    fields: ["username", "displayName", "bio", "snapScore", "friendCount"],
    analyzeCriteria: [
      "Snap score vs account age",
      "Friend activity patterns",
      "Profile authenticity",
      "Suspicious messaging patterns",
      "Account behavior analysis"
    ]
  }
];

export const getFieldLabel = (field: string): string => {
  const labels: Record<string, string> = {
    username: "Username",
    profileUrl: "Profile URL",
    bio: "Bio / About Text",
    friends: "Number of Friends",
    followers: "Number of Followers",
    following: "Number of Following",
    postCount: "Post Count",
    tweetCount: "Tweet Count",
    videoCount: "Video Count",
    likes: "Total Likes",
    accountAge: "Account Created (approx.)",
    connections: "Connections",
    jobTitle: "Job Title",
    company: "Company",
    displayName: "Display Name",
    snapScore: "Snap Score",
    friendCount: "Friend Count"
  };
  return labels[field] || field;
};

export const getFieldPlaceholder = (field: string): string => {
  const placeholders: Record<string, string> = {
    username: "@username",
    profileUrl: "https://...",
    bio: "Paste the bio/about text here",
    friends: "e.g., 500",
    followers: "e.g., 1000",
    following: "e.g., 200",
    postCount: "e.g., 50",
    tweetCount: "e.g., 150",
    videoCount: "e.g., 25",
    likes: "e.g., 5000",
    accountAge: "e.g., 2 months, 1 year",
    connections: "e.g., 500+",
    jobTitle: "e.g., CEO, Manager",
    company: "e.g., Google, Unknown Startup",
    displayName: "Display name shown",
    snapScore: "e.g., 50000",
    friendCount: "e.g., 100"
  };
  return placeholders[field] || "Enter value";
};
