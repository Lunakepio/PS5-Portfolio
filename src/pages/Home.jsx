import { Suspense, useEffect, useRef, useState } from "react";
import { Content } from "../components/Content";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Scene } from "../components/Scene";

export const Home = () => {
  const messageRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      messageRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
      },
    );

    gsap.to(messageRef.current, {
      opacity: 0,
      duration: 1.3,
      delay: 4,
      onComplete: () => {
        messageRef.current.style.display = "none";
      },
    });
  }, []);
  return (
    <>
      <section
        ref={messageRef}
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "300",
        }}
      >
        <p style={{ width: "60w", textAlign: "center" }}>
          Ce que vous allez voir est une expérience interactive mêlant 2D et 3D
          en temps réel. Pour une meilleure expérience, veuillez utiliser un
          ordinateur de bureau ou un ordinateur portable.
        </p>
      </section>

      <Content />
      <Scene isAbout={false} />
    </>
  );
};
