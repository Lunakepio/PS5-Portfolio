import { Suspense, useEffect, useRef, useState } from "react";
import { Content } from "../components/Content";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Scene } from "../components/Scene";

export const Home = ({ isMessageShow, setIsMessageShow }) => {
  const messageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setIsMessageShow(false);
    }, 5400);
  }, []);

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
    });
  }, []);
  return (
    <>
      {isMessageShow ? (
        <section
          ref={messageRef}
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ width: "60w", textAlign: "center" }}>
            Ce que vous allez voir est une expérience interactive mêlant 2D et 3D en temps réel. Pour une meilleure
            expérience, veuillez utiliser un ordinateur de bureau ou un ordinateur portable.
          </p>
        </section>
      ) : (
        <Suspense
          fallback={
            <div
              style={{ background: "#000011", width: "100vw", height: "100vh" }}
            ></div>
          }
        >
          <Content />
          <Scene isMessageShow={isMessageShow} isAbout={false} />
        </Suspense>
      )}
    </>
  );
};
