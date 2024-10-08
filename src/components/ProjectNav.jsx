import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppStore } from "../store";

export const ProjectNav = () => {
  const [page, setPage] = useState("projects");

  useEffect(() => {
    switch (window.location.pathname) {
      case "/projects":
        setPage("projects");
        break;

      case "/about":
        setPage("about");
        break;

      default:
        break;
    }
  }, []);

  const { languageSelect } = useAppStore();
  return (
    <nav>
      <ul className="navContainer">
        <li
          className="navOnglet"
          style={page === "projects" ? { opacity: 1 } : { opacity: 0.6 }}
        >
          <Link to={"/projects"}>{languageSelect === "fr" ? "Projets" : "Projects"}</Link>
        </li>
        <li
          className="navOnglet"
          style={page === "about" ? { opacity: 1 } : { opacity: 0.6 }}
        >
          <Link to={"/about"}>{languageSelect === "fr" ? "À propos" : "About"}</Link>
        </li>
      </ul>
    </nav>
  );
};
