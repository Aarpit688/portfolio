import { experienceData } from "../../data/experienceData";
import { React } from "react";

const Experience = () => {
  return (
    <section className="about__experience">
      <h2 className="title-font pink-text h2-tag">Work Experience</h2>
      {experienceData.map((info, index) => (
        <section key={index}>
          <h3 className="h3-tag">{info.jobtitle}</h3>
          <section className="experience__company">
            <p>{info.companyname} - </p>
            <p>{info.worktype}</p>
          </section>
          <p>{info.duration}</p>
          <p>{info.location}</p>
          <ol className="experience__responsibilities ul-tag">
            {info.responsibility.map((data, index) => (
              <li key={index}>
                {data.includes("http") ? (
                  <>
                    {data.split("https")[0]}
                    <a
                      href={`https${data.split("https")[1]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {`https${data.split("https")[1]}`}
                    </a>
                  </>
                ) : (
                  data
                )}
              </li>
            ))}
          </ol>
        </section>
      ))}
    </section>
  );
};
export default Experience;
