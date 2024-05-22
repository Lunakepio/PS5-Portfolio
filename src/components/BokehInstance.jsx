import { useEffect, useMemo, useRef, useState } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Instance, Instances } from "@react-three/drei";
import { BokehSinusoidal } from "./Bokeh";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const BokehInstance = ({ positions, isAbout }) => {
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

  const instances = useMemo(() => {
    return positions.map((position, index) => {
      const visualProperty = {
        scale: Math.random(),
        color: colors[Math.floor(Math.random() * colors.length)],
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

  const material3 = useRef();
  const material2 = useRef();
  const material4 = useRef();

  useGSAP(() => {
    gsap.fromTo(
      material1.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: Math.random() * 5 + 1,
        yoyo: true,
        repeat: -1,
      },
    );
    gsap.fromTo(
      material2.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: Math.random() * 5 + 1,
        yoyo: true,
        repeat: -1,
      },
    );
    gsap.fromTo(
      material3.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: Math.random() * 5 + 1,
        yoyo: true,
        repeat: -1,
      },
    );
    gsap.fromTo(
      material4.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        yoyo: true,
        repeat: -1,
      },
    );
  }, []);

  return (
    <group>
      <Instances>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          color={"white"}
          map={bokehTexture[0]}
          ref={material1}
          opacity={1}
          transparent
          depthWrite={false}
        />
        {instances.map((instance, i) => (
          <BokehSinusoidal visualProperty={instance} isAbout={isAbout} />
        ))}
      </Instances>
      <Instances>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          color={"white"}
          ref={material2}
          map={bokehTexture[3]}
          opacity={1}
          transparent
          depthWrite={false}
        />
        {instances.map((instance, i) => (
          <BokehSinusoidal visualProperty={instance} isAbout={isAbout} />
        ))}
      </Instances>
      <Instances>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          color={"white"}
          map={bokehTexture[4]}
          ref={material3}
          opacity={1}
          transparent
          depthWrite={false}
        />
        {instances.map((instance, i) => (
          <BokehSinusoidal visualProperty={instance} isAbout={isAbout} />
        ))}
      </Instances>
      <Instances>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial
          color={"white"}
          ref={material4}
          map={bokehTexture[2]}
          opacity={1}
          transparent
          depthWrite={false}
        />
        {instances.map((instance, i) => (
          <BokehSinusoidal visualProperty={instance} isAbout={isAbout} />
        ))}
      </Instances>
    </group>
  );
};
