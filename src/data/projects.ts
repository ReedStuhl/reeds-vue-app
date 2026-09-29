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
      "An interactive PyTorch LSTM tool that forecasts prices for the Magnificent 7 stocks over the coming week, evaluated transparently against a naive baseline instead of just showcasing its own numbers, including the weeks it loses. Originally built as a project during my senior year of college, it has since been completely rebuilt and remains an evolving project, with new features and analysis actively being added.",
    url: "https://web-gamma-kohl-59.vercel.app",
  },
  {
    id: 2,
    title: "Salesforce Trailblazer",
    description:
      "Building on my experience as a Salesforce and Mulesoft Developer at Ford, I've actively expanded my proficiency by earning numerous Salesforce badges and certifications. I have a genuine passion for technology adoption and am driven by the opportunity to continually improve my knowledge and expertise.",
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
