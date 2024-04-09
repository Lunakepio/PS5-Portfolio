import { useEffect, useRef, useState } from "react";
import { Project } from "../components/Project";
import { projectsData } from "../data/projects";
import { ProjectNav } from "../components/ProjectNav";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'

export const Projects = () => {
  const [ index, setIndex ] = useState(0)
  const [position, setPosition] = useState('projects')

  const backgroundRef = useRef()
  const logoDescriptionRef = useRef()
  
  useEffect(() => {
    function nextArrow (e){

      switch (e.keyCode) {
        case 37:
          setIndex(prev => (prev === 0 ? 0 : prev - 1))
          break;

        case 39:
          setIndex(prev => (prev === projectsData.length - 1 ? prev : prev + 1))
          break;
      
        default:
          break;
      }
    }

    window.addEventListener('keydown', nextArrow)

    return  () => {
     window.removeEventListener('keydown', nextArrow)
    }
    
  }, [])

  useGSAP(() => {
    gsap.fromTo(
      backgroundRef.current.style, 
      {
        opacity: .4,
        transform: `translateX(5%)`
      },
      {
        duration: .5,
        opacity: 1,
        transform: `translateX(0%)`
      }
    );

    gsap.fromTo(
      logoDescriptionRef.current.style,
      {
        opacity: .4,
        transform: 'translate(5%)'
      },
      {
        opacity: 1,
        transform: 'translateY(0)'
      }
    )
  }, [index])

  return <>
    <ProjectNav setPosition={setPosition}/>
    <section className="pageContainer" style={{ transform: `translateX(-${position === 'about' ? 50 : 0}%)`}}>

      <section className="projectsContentPage">
        <div
          ref={backgroundRef}
          className="background"
          style={{ backgroundImage: `url(${projectsData[index].img})` }}
        ></div>
        <div className="gradient"></div>
        <section className="projectsContainer" style={{ transform: `translateX(-${index === 0 ? 0 : (100 / projectsData.length) * index - 15}%)`}}>
          {projectsData.map((project) => (
            <Project
              index={index}
              setIndex={setIndex}
              project={project}
              key={project.id}
            />
          ))}
        </section>

        <section ref={logoDescriptionRef} className="logoDescriptionContainer">
          <img src={projectsData[index].logo} alt={`logo du projet ${projectsData[index].title}`} className="logoProject" />
          <p>{projectsData[index].description}</p>

          <div className="buttonContainer">
            <div className="glowProjectLink"></div>
           <a href={projectsData[index].link} className="visit">Visit</a>
          </div>
        </section>
      </section>

      <section className="aboutContentPage">
      </section>

    </section>
    
    </>
};
