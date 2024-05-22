import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Instance, Instances } from "@react-three/drei";
import { BokehAnimation, BokehSinusoidal } from "./Bokeh";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const BokehInstanceAnimation = ({ positions, isAbout }) => {
  const bokehTexture = useMemo(
    () => [
      useLoader(TextureLoader, "/bokeh-1.png"),
      useLoader(TextureLoader, "/bokeh-2.png"),
      useLoader(TextureLoader, "/bokeh-3.png"),
      useLoader(TextureLoader, "/bokeh-4.png"),
      useLoader(TextureLoader, "/bokeh-5.png"),
    ],
    [],
  );

  const colors = ["#eeaf6c", "#efc675", "#ae8456", "#ffdebd", "#ffefe0"];

  const [animationEnd, setAnimationEnd] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimationEnd(true), 10000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const instances = useMemo(() => {
    return positions.map((position, index) => {
      const visualProperty = {
        scale: Math.random(),
        color: colors[Math.floor(Math.random() * colors.length)],
        texture: bokehTexture[Math.floor(Math.random() * bokehTexture.length)],
        position: position,
        directionX: Math.random() - 0.5,
        directionY: Math.random() - 0.5,
        directionZ: Math.random() - 0.5,
        speed: Math.random() - 0.5,
      };

      return visualProperty;
    });
  }, [positions, bokehTexture, colors]);

  const material1 = useRef();

  useGSAP(() => {
    gsap.to(material1.current, {
      opacity: 1,
      duration: Math.random() * 4,
      delay: 4.0,
    });

    gsap.to(material1.current, {
      opacity: 0,
      delay: 9,
      duration: 0.5,
    });
  }, []);

  return (
    <>
      {!animationEnd ? (
        <group>
          <Instances range={positions.length}>
            <planeGeometry args={[1, 1]} />
            <meshBasicMaterial
              color={"white"}
              ref={material1}
              map={bokehTexture[1]}
              opacity={0}
              transparent
              depthWrite={false}
            />
            {instances.map((instance, i) => (
              <BokehAnimation visualProperty={instance} isAbout={isAbout} />
            ))}
          </Instances>
        </group>
      ) : null}
    </>
  );
};
