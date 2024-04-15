import { Project } from "./Project";

export const ProjectsList = ({ projects, index, setIndex }) => {
  return (
    <section
      className="projectsContainer"
      style={
        window.innerWidth < 600
          ? {
              transform: `translateX(-${index === 0 ? 0 : (100 / projects.length) * index - 10}%)`,
            }
          : {
              transform: `translateX(-${index === 0 ? 0 : (100 / projects.length) * index - 15}%)`,
            }
      }
    >
      {projects.map((project) => (
        <Project
          index={index}
          setIndex={setIndex}
          project={project}
          key={project.id}
        />
      ))}
    </section>
  );
};

