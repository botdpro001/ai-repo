import { PlatformType } from "./platforms";

export interface AnalysisResult {
  isFake: boolean;
  fakePercentage: number;
  riskLevel: "low" | "medium" | "high";
  redFlags: string[];
  safetyTips: string[];
  explanation: string;
}

export function analyzeProfile(platform: PlatformType, data: Record<string, string>): AnalysisResult {
  const redFlags: string[] = [];
  let riskScore = 0;

  // Common checks across all platforms
  const bio = data.bio || "";
  const username = data.username || "";
  const followers = parseInt(data.followers || "0");
  const following = parseInt(data.following || "0");
  const postCount = parseInt(data.postCount || data.tweetCount || data.videoCount || "0");

  // Check for suspicious bio patterns
  if (bio.length < 10) {
    redFlags.push("Very short or empty bio");
    riskScore += 10;
  }
  if (/make money|earn \$|dm for|click here|free gift/i.test(bio)) {
    redFlags.push("Bio contains scam-like keywords");
    riskScore += 25;
  }
  if (/18\+|adult|private content/i.test(bio)) {
    redFlags.push("Bio contains suspicious adult content references");
    riskScore += 15;
  }

  // Check account age
  const accountAge = data.accountAge?.toLowerCase() || "";
  if (accountAge.includes("day") || accountAge.includes("week") || accountAge.includes("month")) {
    if (!accountAge.includes("year")) {
      redFlags.push("Recently created account");
      riskScore += 15;
    }
  }

  // Platform-specific analysis
  switch (platform) {
    case "facebook":
      const friends = parseInt(data.friends || "0");
      if (friends > 4000) {
        redFlags.push("Unusually high friend count (near limit)");
        riskScore += 20;
      }
      if (friends < 10 && followers > 1000) {
        redFlags.push("Low friends but high followers - suspicious");
        riskScore += 20;
      }
      break;

    case "instagram":
      const followerRatio = following > 0 ? followers / following : 0;
      if (followers > 10000 && following < 50) {
        redFlags.push("Extreme followers/following imbalance");
        riskScore += 25;
      }
      if (postCount < 5 && followers > 1000) {
        redFlags.push("Few posts but many followers - likely fake");
        riskScore += 30;
      }
      if (followers > 5000 && postCount > 0) {
        const engagementRatio = followers / postCount;
        if (engagementRatio > 500) {
          redFlags.push("Suspiciously low engagement for follower count");
          riskScore += 20;
        }
      }
      break;

    case "twitter":
      const tweets = parseInt(data.tweetCount || "0");
      if (tweets > 10000 && followers < 100) {
        redFlags.push("High tweet volume but low followers - bot behavior");
        riskScore += 25;
      }
      if (following > 5000 && followers < 100) {
        redFlags.push("Mass following pattern detected");
        riskScore += 20;
      }
      break;

    case "linkedin":
      const jobTitle = data.jobTitle?.toLowerCase() || "";
      const company = data.company?.toLowerCase() || "";
      if (/ceo|cto|founder|president/i.test(jobTitle) && company.includes("unknown")) {
        redFlags.push("Executive title at unverifiable company");
        riskScore += 20;
      }
      if (/hiring|opportunity|work from home|passive income/i.test(bio)) {
        redFlags.push("Employment scam keywords detected");
        riskScore += 25;
      }
      break;

    case "tiktok":
      const videos = parseInt(data.videoCount || "0");
      const likes = parseInt(data.likes || "0");
      if (followers > 10000 && videos < 3) {
        redFlags.push("High followers with almost no content");
        riskScore += 30;
      }
      if (followers > 5000 && likes < 100) {
        redFlags.push("Many followers but very low engagement");
        riskScore += 25;
      }
      break;

    case "snapchat":
      const snapScore = parseInt(data.snapScore || "0");
      const friendCount = parseInt(data.friendCount || "0");
      if (snapScore < 1000 && friendCount > 500) {
        redFlags.push("Low snap score with many friends - unusual");
        riskScore += 20;
      }
      break;
  }

  // Check username patterns
  if (/\d{4,}$/.test(username)) {
    redFlags.push("Username ends with many numbers - common in fake accounts");
    riskScore += 10;
  }
  if (/official|real|verified/i.test(username) && !data.profileUrl?.includes("verified")) {
    redFlags.push("Claims to be official/verified without verification");
    riskScore += 20;
  }

  // Calculate final result
  riskScore = Math.min(riskScore, 100);
  
  let riskLevel: "low" | "medium" | "high";
  if (riskScore < 30) {
    riskLevel = "low";
  } else if (riskScore < 60) {
    riskLevel = "medium";
  } else {
    riskLevel = "high";
  }

  const isFake = riskScore >= 50;

  // Generate safety tips based on risk
  const safetyTips: string[] = [];
  if (riskLevel === "high") {
    safetyTips.push("Do not share personal information with this account");
    safetyTips.push("Report this profile to the platform");
    safetyTips.push("Block and avoid any further interaction");
  } else if (riskLevel === "medium") {
    safetyTips.push("Exercise caution when interacting");
    safetyTips.push("Verify the person's identity through other means");
    safetyTips.push("Do not click on any links they share");
  } else {
    safetyTips.push("Profile appears legitimate, but always stay vigilant");
    safetyTips.push("Never share sensitive information online");
  }

  // Generate explanation
  let explanation = "";
  if (redFlags.length === 0) {
    explanation = "Our AI analysis did not detect significant red flags. The profile appears to follow normal patterns for authentic accounts. However, always exercise caution online.";
  } else {
    explanation = `Our AI detected ${redFlags.length} potential warning sign${redFlags.length > 1 ? "s" : ""}. ${
      isFake 
        ? "The combination of these factors strongly suggests this may be a fake or malicious account." 
        : "While some patterns are concerning, they may not definitively indicate a fake account. Proceed with caution."
    }`;
  }

  return {
    isFake,
    fakePercentage: riskScore,
    riskLevel,
    redFlags,
    safetyTips,
    explanation
  };
}
