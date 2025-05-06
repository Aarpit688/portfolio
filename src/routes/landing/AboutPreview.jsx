import AboutMe from "../about/AboutMe";
import Stack from "../about/Stack";
import { React } from "react";

const AboutPreview = () => {
  return (
    <article className="landing__about">
      <AboutMe />
      <Stack />
    </article>
  );
};

export default AboutPreview;
