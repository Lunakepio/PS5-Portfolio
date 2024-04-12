export const Project = ({ project, index, setIndex }) => {
  return (
    <article
      className={`projectContent ${(index+ 1) === project.id ? "projectContent-active" : ""}`}
      key={project.id}
      id={project.id}
      onClick={() => (index + 1) === project.id ? null : setIndex(project.id - 1)
      }
      style={{ animationDelay: `${project.id / 10}s` }}
    >


      <div className="imageContainer">
        <div className="glowProject"></div>
        <div
          style={{ backgroundImage: `url(${project.cardImg})` }}
          className="imageProject"
        >
        </div>
      </div>

      
      <h2>{project.title}</h2>
    </article>
  );
};
