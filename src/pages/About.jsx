import { Suspense, useRef } from "react";
import { Tilt } from "react-tilt";
import { ProjectNav } from "../components/ProjectNav";
import { useAppStore } from "../store";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Scene } from "../components/Scene";

export const About = () => {
  const descriptionRef = useRef();
  const informationRef = useRef();
  const pageContainerRef = useRef();

  const { setOpacity, setLanguage } = useAppStore();

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
        delay: 0.4,
        opacity: 1,
        scale: 1,
      },
    );
  }, []);

  useGSAP(() => {
    gsap.set(pageContainerRef.current, {
      opacity: 0,
    });

    gsap.to(pageContainerRef.current, {
      duration: 0.5,
      opacity: 1,
    });
  }, []);

  return (
    <main>
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
        defaultValue={"en"}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value={"en"}>🇺🇸</option>
        <option value={"fr"}>🇫🇷</option>
      </select>
      <ProjectNav />

      <section
        ref={pageContainerRef}
        style={{ opacity: 0 }}
        className="aboutContentPage"
      >
        <article className="information" ref={informationRef}>
          <Tilt options={defaultOptions}>
            <div className="imageContainer">
              <div className="glowProject"></div>
              <img src="/user-image.webp" />
            </div>
          </Tilt>
        </article>

        <p className="description" ref={descriptionRef}>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
        </p>
      </section>

      <Scene isMessageShow={false} isAbout={true} />
    </main>
  );
};
