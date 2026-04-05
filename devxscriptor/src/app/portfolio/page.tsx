
import { PortfolioTimeline } from "../components/timeline/timelinePortfolio";


export const metadata = {
  title: "Portfolio - xscriptor",
  description: "Here you can learn in detail about the knowledge and experience that my portfolio can bring to your project",
};


export default function Portfolio() {
  return (
    <div>
      <h1><span className="inline lg:block">Portfolio <em>timeline</em></span>
        </h1>
          <p className='pb-10'><span className="inline lg:block text-xl text-right">Chronicle of <em>professional evolution </em></span>
           <span className="inline lg:block text-xl text-right"> & <em>technical milestones</em></span>
          </p>
      <div className="animate-fade-in-up"> 
        <PortfolioTimeline />
      </div>
      </div>
  );
}
