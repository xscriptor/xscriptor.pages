
import { PortfolioTimeline } from "../components/timeline/timelinePortfolio";


export const metadata = {
  title: "Portfolio - xscriptor",
  description: "Here you can learn in detail about the knowledge and experience that my portfolio can bring to your project",
};


export default function Portfolio() {
  return (
    <div>
      <div className="animate-fade-in-up"> 
        <PortfolioTimeline />
      </div>
      </div>
  );
}
