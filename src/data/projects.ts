export interface Project {
  id: number;
  title: string;
  description: string;
  url?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Claude Health & Fitness Skill",
    description:
      "A custom Claude Skill that turns your Apple Health and Apple Watch data into the popular competitor metrics you'd normally need a dedicated tracker for: Recovery score, Readiness score, Day Strain, Cardio fitness age, Resilience, plus a visual report you can view, download, or email to yourself. View an example report, or download the skill and try it yourself on GitHub.",
    url: "https://github.com/ReedStuhl/apple-watch-health-scores",
  },
  {
    id: 2,
    title: "SPY Prediction Lab",
    description:
      "This started as a Bitcoin LSTM I built as a senior in college, grew into a Magnificent 7 forecaster, and is now rebuilt around one question: what can you actually predict about the S&P 500 next week? Every weekend it publishes a likely range for SPY's Friday close, built from VIX, and grades last week's call in public. You can also replay crashes like 2008 and 2020 one week at a time, and see an experiment where four models, including a PyTorch LSTM, try to beat simply guessing \"up.\" None of them do, and the site shows why.",
    url: "https://magnificent-forecast.vercel.app",
  },
  {
    id: 3,
    title: "Salesforce Trailblazer",
    description:
      "A Salesforce Ranger with 120+ Trailhead badges and over 51,000 points earned across 25 trails, including a certification in MuleSoft Integration Foundations and a completed Business Administration Specialist superbadge. Driven by hands on platform experience, not just credentials.",
    url: "https://trailblazer.me/id/rstuhlreyer",
  },
];
