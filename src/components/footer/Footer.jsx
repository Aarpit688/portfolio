import "./Footer.sass";
import { React } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <article className="footer">
      <a
        href="https://github.com/Aarpit688/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Designed & Built by Arpit &copy;2025 - {currentYear}
      </a>
    </article>
  );
};

export default Footer;
