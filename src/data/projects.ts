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
    title: "Magnificent 7 Forecasting",
    description:
      "This is a fun iteration and rebuild of a project I created as a senior in college. It's an ongoing project, with new features and analysis actively being added. Using PyTorch, a deep learning framework, it trains an LSTM, a type of neural network built for sequential data like time series, to forecast stock market prices for the \"Mag 7.\" Check it out. I've now built an interactive frontend for it.",
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
