import { Project } from "./Project"

export const ProjectsList = ({ projects, index, setIndex }) => {
    return (
        <section className="projectsContainer" style={{ transform: `translateX(-${index === 0 ? 0 : (100 / projects.length) * index - 15}%)`}}>
            {projects.map((project) => (
              <Project
                index={index}
                setIndex={setIndex}
                project={project}
                key={project.id}
              />
            ))}
          </section>
    )
}