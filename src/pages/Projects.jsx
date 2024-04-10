import { useEffect, useRef, useState } from "react";
import { projectsData } from "../data/projects";
import { ProjectNav } from "../components/ProjectNav";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { ProjectsList } from "../components/ProjectsList";

export const Projects = () => {
  const [ index, setIndex ] = useState(0)
  const [position, setPosition] = useState('projects')
  const [buttonClick, setButtonClick] = useState(false)

  const backgroundRef = useRef()
  const projectInfromationRef = useRef()
  const visitButtonRef = useRef()

  
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
      backgroundRef.current, 
      {
        opacity: .4,
        x: 25
      },
      {
        duration: .5,
        opacity: 1,
        x: 0
      }
    );

    gsap.fromTo(
      projectInfromationRef.current,
      {
        opacity: 0,
        y: 50
      },
      {
        duration: .5,
        opacity: 1,
        y: 0
      }
    )
  }, [index])



  const handleButtonClick = () => {
    setButtonClick(true)

    gsap.fromTo(
      visitButtonRef.current,
      {
        padding: 2,
        scale: 1,
        borderColor: 'black'
      },
      {
        scale: 1.5,
        padding: 15,
        borderColor: 'white',
        opacity: 0,
        duration: .1,

      }
    )

    setTimeout(() => {
      window.location.href = projectsData[index].link
    }, 1500)
  }

  return <>
    {
      !buttonClick && <ProjectNav setPosition={setPosition}/>
    }
    <section className="pageContainer" style={{ transform: `translateX(-${position === 'about' ? 50 : 0}%)`}}>

      <section className={`projectsContentPage ${buttonClick ? 'leaveProjectPage' : ''}`}>
          <div
            ref={backgroundRef}
            className="background"
            style={{ backgroundImage: `url(${projectsData[index].img})` }}
          ></div>
          <div className="gradient"></div>
          <ProjectsList index={index} setIndex={setIndex} projects={projectsData} />

          <section style={{ color: 'white' }} ref={projectInfromationRef} className="projectInformationContainer">
            <img src={projectsData[index].logo} alt={`logo du projet ${projectsData[index].title}`} className="logoProject" />
            <p>{projectsData[index].description}</p>

            <div className="buttonContainer" ref={visitButtonRef}>
              <div className="glowProjectLink"></div>
            <button onClick={ handleButtonClick } className={`visit ${buttonClick ? "visitActive" : ''}`}>Visit</button>
            </div>
          </section>
      </section>

      <section className="aboutContentPage">
      </section>

    </section>
    
    </>
};
