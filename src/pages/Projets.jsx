import { useEffect, useState } from "react";
import { Projet } from "../components/Projet";
import { projetsData } from "../data/projets";
import { ProjetNav } from "../components/ProjetNav";

export const Projets = () => {
  const [backgroundProjet, setBackgroundProjet] = useState("");
  const [ index, setIndex ] = useState(0)

  const [position, setPosition] = useState('projects')
  
  useEffect(() => {
    function nextArrow (e){

      switch (e.keyCode) {
        case 37:
          setIndex(prev => (prev === 0 ? 0 : prev - 1))
          break;

        case 39:
          setIndex(prev => (prev === projetsData.length - 1 ? prev : prev + 1))
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

  useEffect(() => {
    setBackgroundProjet(projetsData[index].img)
    document.querySelector(".background").classList.add("background-animation");
    document.querySelector(".logoDescriptionContainer").classList.add("LogoDescriptionAnimation");

    setTimeout(() => {
      document
        .querySelector(".background")
        .classList.remove("background-animation");
      document.querySelector(".logoDescriptionContainer").classList.remove("LogoDescriptionAnimation");

    }, 500);
  }, [index])

  return (<>
    <ProjetNav setPosition={setPosition}/>
    <section className="pageContainer" style={{ transform: `translateX(-${position === 'about' ? 50 : 0}%)`}}>

    <section className="projetsContentPage">
      <div
        className="background"
        style={{ backgroundImage: `url(${backgroundProjet})` }}
      ></div>
      <div className="gradient"></div>
      <section className="projetsContainer" style={{ transform: `translateX(-${index === 0 ? 0 : (100 / projetsData.length) * index - 15}%)`}}>
        {projetsData.map((projet) => (
          <Projet
            index={index}
            setIndex={setIndex}
            projet={projet}
            key={projet.id}
            setBackgroundProjet={setBackgroundProjet}
          />
        ))}
      </section>

        <section className="logoDescriptionContainer">
          <img src={projetsData[index].logo} alt={`logo du projet ${projetsData[index].title}`} className="logoProjet" />
          <p>{projetsData[index].description}</p>

          <a href={projetsData[index].link} className="visit">Visit</a>
        </section>
    </section>

    <section className="aboutContentPage">
    </section>

    </section>
    
    </>
  );
};
