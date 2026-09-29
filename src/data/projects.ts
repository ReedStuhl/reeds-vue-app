export interface Project {
  id: number;
  title: string;
  description: string;
  url?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Magnificent 7 Forecasting",
    description:
      "Originally built as a project during my senior year of college, it has since been redesigned into an ongoing interactive machine learning project, with new features and analysis actively being added. Using PyTorch, a deep learning framework, it trains an LSTM, a type of neural network built for sequential data like time series, to forecast prices for the Magnificent 7 stocks over the coming week. Results are shown transparently against a naive baseline instead of just showcasing the model's own numbers, including the weeks it loses.",
    url: "https://web-gamma-kohl-59.vercel.app",
  },
  {
    id: 2,
    title: "Salesforce Trailblazer",
    description:
      "A Salesforce Ranger with 120+ Trailhead badges and over 51,000 points earned across 25 trails, including a certification in MuleSoft Integration Foundations and a completed Business Administration Specialist superbadge. Driven by hands on platform experience, not just credentials.",
    url: "https://trailblazer.me/id/rstuhlreyer",
  },
  {
    id: 3,
    title: "Affordhealth.org",
    description:
      "As a Frontend React Developer for Affordhealth.org, I specialized in building highly reusable and modular functional components using TypeScript. I also integrated our component library with Storybook, which was crucial for streamlined User Acceptance Testing (UAT).",
    url: "https://www.affordhealth.org",
  },
  {
    id: 4,
    title: "Tech Blog",
    description:
      "My blog captured the excitement of the NFT boom through the lens of owning a Zed Run racehorse. The posts served as a guide, detailing my experiences with purchasing crypto, using OpenSea, transferring blockchain assets, and exploring the role of Decentralized Apps (DApps) in the play-to-earn economy.",
    url: "https://fungibleblog.blogspot.com",
  },
];
