import React, { useRef, useMemo, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export const BokehSinusoide = ({ position }) => {
  const bokehOne = useLoader(TextureLoader, "/bokeh-1.png");
  const bokehTwo = useLoader(TextureLoader, "/bokeh-2.png");
  const bokehThree = useLoader(TextureLoader, "/bokeh-3.png");
  const bokehFour = useLoader(TextureLoader, "/bokeh-4.png");
  const bokehFive = useLoader(TextureLoader, "/bokeh-5.png");

  const bokehTextures = [bokehOne, bokehTwo, bokehThree, bokehFour, bokehFive];
  const colors = ["#eeaf6c", "#efc675", "#ae8456", "#ffdebd", "#ffefe0"];

  const [property, setProperty] = useState({
    directionX: Math.random() - 0.5,
    directionY: Math.random() - 0.5,
    directionZ: Math.random() - 0.5,
    speed: Math.random() - 0.5,
    scale: Math.random(),
    color: colors[Math.floor(Math.random() * colors.length)],
    texture: bokehTextures[Math.floor(Math.random() * bokehTextures.length)],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setProperty((prev) => ({
        scale: prev.scale,
        color: prev.color,
        texture: prev.texture,
        directionX: Math.random() - 0.5,
        directionY: Math.random() - 0.5,
        directionZ: Math.random() - 0.5,
        speed: Math.random() - 0.5 + 0.05,
      }));

      return () => clearInterval(interval);
    }, 1000);
  }, []);

  const mesh = useRef();
  const materialRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      mesh.current.scale,
      {
        x: 0,
        y: 0,
        z: 0,
      },
      {
        x: property.scale,
        z: property.scale,
        y: property.scale,
        duration: Math.random() * 3 + 1,
        delay: 3,
      },
    );

    gsap.fromTo(
      materialRef.current,
      {
        opacity: Math.random() * 1,
      },
      {
        opacity: 0,
        duration: Math.random() * 8 + 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      },
    );
    materialRef.current.color.multiplyScalar(0.5 + Math.random() * 0.5);
  }, []);

  useFrame((state, delta) => {
    mesh.current.position.x += property.directionX * property.speed * delta;
    mesh.current.position.y += property.directionY * property.speed * delta;
    mesh.current.position.z += property.directionZ * property.speed * delta;
  });

  return (
    <mesh
      position={[position[0], position[1], position[2]]}
      rotation={[0, Math.PI, 0]}
      scale={property.scale}
      ref={mesh}
    >
      <planeGeometry args={[1, 1, 1]} />
      <meshBasicMaterial
        color={property.color}
        ref={materialRef}
        map={property.texture}
        opacity={0}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
};

export const BokehAnimation = ({ position }) => {
  const bokehOne = useLoader(TextureLoader, "/bokeh-1.png");
  const bokehTwo = useLoader(TextureLoader, "/bokeh-2.png");
  const bokehThree = useLoader(TextureLoader, "/bokeh-3.png");
  const bokehFour = useLoader(TextureLoader, "/bokeh-4.png");
  const bokehFive = useLoader(TextureLoader, "/bokeh-5.png");

  const bokehTextures = [bokehOne, bokehTwo, bokehThree, bokehFour, bokehFive];
  const colors = ["#eeaf6c", "#efc675", "#ae8456", "#ffdebd", "#ffefe0"];

  const [property, setProperty] = useState({
    directionX: Math.random() - 0.5,
    directionY: Math.random() - 0.5,
    directionZ: Math.random() - 0.5,
    speed: Math.random() - 0.5,
    scale: Math.random(),
    color: colors[Math.floor(Math.random() * colors.length)],
    texture: bokehTextures[Math.floor(Math.random() * bokehTextures.length)],
  });

  const mesh = useRef();
  const materialRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      materialRef.current,
      {
        opacity: Math.random() * 1,
      },
      {
        opacity: 0,
        duration: Math.random() * 8 + 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      },
    );

    gsap.fromTo(
      mesh.current.scale,
      {
        x: property.scale * 2,
        y: property.scale * 2,
        z: property.scale * 2,
      },
      {
        x: property.scale / 9,
        y: property.scale / 9,
        z: property.scale / 9,
        duration: Math.random() * 1 + 1,
        delay: 0,
        ease: "power1.inOut",
      },
    );
    materialRef.current.color.multiplyScalar(0.5 + Math.random() * 0.5);
  }, []);

  useFrame((state, delta) => {
    mesh.current.position.x +=
      property.directionX * property.speed * delta * 20;
    mesh.current.position.y +=
      property.directionY * property.speed * delta * 20;
    mesh.current.position.z +=
      property.directionZ * property.speed * delta * 200;
  });

  return (
    <mesh
      position={[position[0], position[1], position[2]]}
      rotation={[0, Math.PI, 0]}
      scale={property.scale}
      ref={mesh}
    >
      <planeGeometry args={[1, 1, 1]} />
      <meshBasicMaterial
        color={property.color}
        ref={materialRef}
        map={property.texture}
        opacity={0}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
};
