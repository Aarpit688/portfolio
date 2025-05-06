import ProjectsPreview from "./ProjectsPreview";
import { React } from "react";

const PortfolioPreview = () => {
  return (
    <article className="landing__portfolio">
      <section className="portfolio-content">
        <h2 className="title-font pink-text h2-tag">Portfolio</h2>
        <p className="white-text p-tag">
          I've dedicated significant time to working on diverse projects,
          finding real joy in building applications from scratch. Each project
          represents a step forward in my growth as a developer, showcasing both
          creativity and technical skill. From full-stack applications like Ace
          Global Logistics to animated UI clones like Refokus, I’ve consistently
          challenged myself to go beyond the basics. Alongside these, I’ve
          completed several smaller projects through online courses and
          challenges to solidify my foundation. You're welcome to explore my
          work on my{" "}
          <span>
            <a
              href="https://github.com/Aarpit688?tab=repositories"
              className="pink-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </span>
        </p>
      </section>
      <ProjectsPreview />
    </article>
  );
};

export default PortfolioPreview;
