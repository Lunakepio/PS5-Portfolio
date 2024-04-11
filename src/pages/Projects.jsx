import { useEffect, useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { projectsData } from "../data/projects";
import { ProjectNav } from "../components/ProjectNav";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ProjectsList } from "../components/ProjectsList";
import { useAppStore } from "../store";

export const Projects = () => {
  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState("projects");
  const [buttonClick, setButtonClick] = useState(false);

  const backgroundRef = useRef();
  const projectInfromationRef = useRef();
  const visitButtonRef = useRef();
  const descriptionRef = useRef();
  const informationRef = useRef();

  const { setOpacity, opacityTrigger } = useAppStore();

  useEffect(() => {
    console.log(opacityTrigger);
  }, [opacityTrigger]);

  useEffect(() => {
    const nextArrow = (e) => {
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
    window.addEventListener("wheel", nextScroll);

    setOpacity(false);

    return () => {
      window.removeEventListener("keydown", nextArrow);
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
  }, [index, position]);

  useGSAP(() => {
    gsap.fromTo(
      descriptionRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        duration: 1.4,
        opacity: 1,
        y: 0,
      },
    );

    gsap.fromTo(
      informationRef.current,
      {
        opacity: 0,
        scale: 0,
      },
      {
        duration: 1,
        delay: 0.2,
        opacity: 1,
        scale: 1,
      },
    );
  }, [position]);

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

  const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 15, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 3000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <>
      {!buttonClick && <ProjectNav setPosition={setPosition} />}
      <section
        className="pageContainer"
        style={{ transform: `translateX(-${position === "about" ? 50 : 0}%)` }}
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
            <p>{projectsData[index].description}</p>

            <div className="buttonContainer" ref={visitButtonRef}>
              <div className="glowProjectLink"></div>
              <button
                onClick={handleButtonClick}
                className={`visit ${buttonClick ? "visitActive" : ""}`}
              >
                Visit
              </button>
            </div>
          </section>
        </section>

        <section className="aboutContentPage">
          <article className="information" ref={informationRef}>
            <Tilt options={defaultOptions}>
              <div className="imageContainer">
                <div className="glowProject"></div>
                <img src="/user-image.webp" />
              </div>
            </Tilt>
          </article>

          <p className="description" ref={descriptionRef}>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate.
          </p>
        </section>
      </section>
    </>
  );
};
