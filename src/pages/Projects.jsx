import { useEffect, useRef, useState } from "react";
import { ProjectNav } from "../components/ProjectNav";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ProjectsList } from "../components/ProjectsList";
import { useAppStore } from "../store";
import { Project3D } from "../components/Project3D.jsx";

export const Projects = () => {
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState("projects");
  const [buttonClick, setButtonClick] = useState(false);
  const [selectDisable, setSelectDisable] = useState(false);

  const pageContainerRef = useRef();
  const backgroundRef = useRef();
  const projectInfromationRef = useRef();
  const visitButtonRef = useRef();

  const { setOpacity, languageSelect, setLanguage } = useAppStore();

  const projectsData = [
    {
      id: 1,
      cardImg: "/mario-bros-card.png",
      img: "/mario-bros-game.png",
      logo: "/logo-mario.png",
      title: "Mario Bros.js",
      descriptionFr:
        "Mario Bros.JS est la reproduction du jeu Super Mario Bros réalisé par Nintendo, mais sur navigateur web grâce à WebGL",
      descriptionEn:
        "Mario Bros.JS is the reproduction of the Super Mario Bros game made by Nintendo on a web browser using WebGL",
      link: "https://mario-bros-js-one.vercel.app/",
      position: {
        x: 0,
        y: 1,
        z: 0,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      mesh: "Mario",
      scale: {
        desktop: 2,
        mobile: 1.5,
      },
    },
    {
      id: 2,
      cardImg: "/mario-kart-js.jpg",
      img: "/mario-kart-js-game.jpg",
      logo: "/logo-mario.png",
      title: "Mario Kart 3.js",
      descriptionFr:
        "Mario Kart 3.JS est la reproduction du jeu Mario Kart réalisé par Nintendo, mais sur navigateur web grâce à WebGL",
      descriptionEn:
        "Mario Kart 3.JS is the reproduction of the Mario Kart game made by Nintendo on a web browser using WebGL",
      link: "https://github.com/Lunakepio/Mario-Kart-3.js/tree/main",
      position: {
        x: 0,
        y: 1,
        z: 0,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      mesh: "MarioKart",
      scale: {
        desktop: 1.5,
        mobile: 1.3,
      },
    },
    {
      id: 3,
      cardImg: "/star_wars_card.png",
      img: "/starwars.jpg",
      logo: "/star_wars_logo.png",
      title: "STAR WARS : DEATH STAR TRENCH RUN",
      descriptionFr:
        "Dans une galaxie lointaine, j'ai recréé la scène de Star Wars où Luke Skywalker détruit l'Étoile de la Mort. J'ai utilisé Three.js pour la 3D, GSAP pour l'animation et l'API Web Audio pour les effets sonores. Projet Open Source sur Github.",
      descriptionEn:
        "In a distant galaxy, I recreated the iconic scene from Star Wars where Luke Skywalker destroys the Death Star. I used Three.js for the 3D, GSAP for animation, and the Web Audio API for sound effects. The project is Open Source and available on my Github.",
      link: "https://death-star-trench-run.vercel.app/",
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      mesh: "XWing",
      scale: {
        desktop: 1,
        mobile: 1,
      },
    },
    {
      id: 4,
      cardImg: "/card-flightSim.webp",
      img: "/background-filghtSim.webp",
      logo: "/f4u.webp",
      title: "3D Flight Simulator.js",
      descriptionFr:
        "Vivez le frisson de voler sans jamais quitter votre siège avec ce simulateur de vol 3D immersif, optimisé par Three.js. Conçu en 3D et utilisant l'API innovante de tuiles 3D de Google, il offre une représentation incroyablement détaillée et très précise d'un environnement urbain. ",
      descriptionEn:
        "Experience the thrill of flying without ever leaving your seat with this immersive 3D flight simulator, powered by Three.js. Crafted in 3D and utilizing the innovative Google 3D tiles API, it delivers an incredibly detailed and highly accurate representation of an urban environment.",
      link: "https://flightsimu.vercel.app/",
      position: {
        x: 0,
        y: 0,
        z: -30,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      mesh: "F4",
      scale: {
        desktop: 2,
        mobile: 1,
      },
    },
    {
      id: 5,
      cardImg: "/unnamed.png",
      img: "/porsche.jpg",
      logo: "/porsche-logo.png",
      title: "Porsche 3D Experience",
      descriptionFr:
        "Ce projet mêle programmation, animation et cinéma pour créer une scène 3D réactive au défilement de l'utilisateur. Il harmonise technologie et creative coding pour offrir une esthétique cinématographique unique.",
      descriptionEn:
        "This project blends coding, animation, and cinema to create a 3D scene that reacts to user scrolling, all crafted with pure code. It seamlessly harmonizes technology with artistic coding to deliver a distinctive cinematic aesthetic.",
      link: "https://3d-test-beta.vercel.app/",
      position: {
        x: 0,
        y: 0.5,
        z: -8,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      mesh: "Porche",
      scale: {
        desktop: 1.8,
        mobile: 1,
      },
    },
    {
      id: 6,
      cardImg: "/starfox-app.png",
      img: "/starfox.jpg",
      logo: "/StarFox_logo.png",
      title: "Star Fox",
      descriptionFr:
        "En essayant d'introduire le titre classique de la Nintendo 64 sur le Web, revivez le début du niveau original de Corneria avec votre souris et votre clavier. Entrez dans votre Arwing et éliminez l'armée du méchant Roi Singe. Faisons du rock and roll !",
      descriptionEn:
        "Trying to bring the classic Nintendo 64 title to the web, relive the start of the original Corneria level with your mouse and keyboard. Get inside your Arwing and take down the evil Monkey King's army. Let's rock and roll !",
      link: "https://3d-test-beta.vercel.app/",
      position: {
        x: 0,
        y: 0,
        z: -35,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      mesh: "Arwinghigh",
      scale: {
        desktop: 1.5,
        mobile: 1,
      },
    },
    {
      id: 7,
      cardImg: "/vision.jpg",
      img: "/vision.png",
      logo: "/Apple-Logo.png",
      title: "Apple Vision Pro UI",
      descriptionFr:
        "J'ai adoré le nouveau concept d'Apple Vision Pro, alors je l'ai recréé : une interface utilisateur spatiale dans un appartement en 3D. Vous pouvez interagir avec elle sous différents angles en bougeant votre tête !",
      descriptionEn:
        "I fell in love with the new Apple Vision Pro concept and decided to recreate it: a spatial user interface in a 3D apartment. You can interact with the UI and check it from different angles by literally looking around with your head! ",
      link: "https://vision-omega-two.vercel.app/",
      position: {
        x: 0,
        y: 0,
        z: 0,
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0,
      },
      mesh: "/mesh/mario_obj.glb",
      scale: {
        desktop: 1,
        mobile: 1,
      },
    },
  ];

  useEffect(() => {
    const nextArrow = (e) => {
      setSelectDisable(true);

      if (e.keyCode === 13 && position === "projects") {
        handleButtonClick();
      }

      switch (e.keyCode) {
        case 37:
          setIndex((prev) => (prev === 0 ? 0 : prev - 1));
          break;

        case 39:
          setIndex((prev) =>
            prev === projectsData.length - 1 ? prev : prev + 1,
          );
          break;

        default:
          break;
      }
    };

    const handleKeyUp = () => {
      setSelectDisable(false);
    };

    const nextScroll = (e) => {
      if (e.deltaY < 0) {
        setIndex((prev) =>
          prev === projectsData.length - 1 ? prev : prev + 1,
        );
      } else {
        setIndex((prev) => (prev === 0 ? 0 : prev - 1));
      }
    };

    window.addEventListener("keydown", nextArrow);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("wheel", nextScroll);

    setOpacity(false);

    return () => {
      window.removeEventListener("keydown", nextArrow);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("wheel", nextScroll);
    };
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      backgroundRef.current,
      {
        opacity: 0.4,
        x: 25,
      },
      {
        duration: 0.5,
        opacity: 1,
        x: 0,
      },
    );

    gsap.fromTo(
      projectInfromationRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        duration: 0.5,
        opacity: 1,
        y: 0,
      },
    );
  }, [index, languageSelect]);

  useGSAP(() => {
    gsap.set(pageContainerRef.current, {
      opacity: 0,
    });

    gsap.to(pageContainerRef.current, {
      duration: 0.5,
      opacity: 1,
    });
  }, []);

  const handleButtonClick = () => {
    setButtonClick(true);

    gsap.fromTo(
      visitButtonRef.current,
      {
        padding: 2,
        scale: 1,
        borderColor: "black",
      },
      {
        scale: 1.5,
        padding: 15,
        borderColor: "white",
        opacity: 0,
        duration: 0.1,
      },
    );

    setTimeout(() => {
      window.location.href = projectsData[index].link;
    }, 1500);
  };

  return (
    <main>
      <section className="project3DContainer">
        <Project3D
          mesh={projectsData[index].mesh}
          position={projectsData[index].position}
          rotation={projectsData[index].rotation}
          scale={projectsData[index].scale}
        />
      </section>
      <select
        style={{
          padding: "10px",
          background: "#120F0B",
          color: "white",
          border: "0px solid white",
          borderRadius: "10px",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "999",
        }}
        defaultValue={languageSelect}
        disabled={selectDisable}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value={"en"}>🇺🇸</option>
        <option value={"fr"}>🇫🇷</option>
      </select>
      {!buttonClick && <ProjectNav setPosition={setPosition} />}
      <section
        ref={pageContainerRef}
        style={{ opacity: 0 }}
        className="pageContainer"
      >
        <section
          className={`projectsContentPage ${buttonClick ? "leaveProjectPage" : ""}`}
        >
          <div
            ref={backgroundRef}
            className="background"
            style={{ backgroundImage: `url(${projectsData[index].img})` }}
          ></div>
          <div className="gradient"></div>
          <ProjectsList
            index={index}
            setIndex={setIndex}
            projects={projectsData}
          />

          <section
            style={{ color: "white" }}
            ref={projectInfromationRef}
            className="projectInformationContainer"
          >
            <img
              src={projectsData[index].logo}
              alt={`logo du projet ${projectsData[index].title}`}
              className="logoProject"
            />
            <p>
              {languageSelect === "fr"
                ? projectsData[index].descriptionFr
                : projectsData[index].descriptionEn}
            </p>

            <div className="buttonContainer" ref={visitButtonRef}>
              <div className="glowProjectLink"></div>
              <button
                onClick={handleButtonClick}
                className={`visit ${buttonClick ? "visitActive" : ""}`}
              >
                {languageSelect === "fr" ? "Visiter" : "Visit"}
              </button>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
};
