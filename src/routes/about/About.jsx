import "./About.sass";
import { useEffect, React } from "react";
import { Footer } from "../../components/index.js";
import Certifications from "./Certifications";
import Languages from "./Languages";
import Stack from "./Stack";
import Education from "./Education";
// import Experience from "./Experience";
import DownloadResume from "./DownloadResume";
import AboutMe from "./AboutMe";
import ScrollButton from "../../helpers/ScrollToTop";

const About = () => {
  useEffect(() => {
    document.title = "About | Arpit Agarwal";
    window.scrollTo(0, 0);
  });
  return (
    <main className="about">
      <AboutMe />
      <Stack />
      <DownloadResume />
      {/* <Experience /> */}
      <Education />
      <Languages />
      <DownloadResume />
      <Certifications />
      <ScrollButton />
      <Footer />
    </main>
  );
};

export default About;
