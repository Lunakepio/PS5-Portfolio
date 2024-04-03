import React, { useRef, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export const Bokeh = ({ position }) => {
  const bokehOne = useLoader(TextureLoader, "/bokeh-1.png");
  const bokehTwo = useLoader(TextureLoader, "/bokeh-2.png");
  const bokehThree = useLoader(TextureLoader, "/bokeh-3.png");
  const bokehFour = useLoader(TextureLoader, "/bokeh-4.png");
  const bokehFive = useLoader(TextureLoader, "/bokeh-5.png");

  const bokehTextures = [bokehOne, bokehTwo, bokehThree, bokehFour, bokehFive];

  const mesh = useRef();

  const materialRef = useRef();
 const colors = ["#eeaf6c", "#f3c797", "#efc675", "#ae8456"]

  useGSAP(() => {
    gsap.fromTo(
      materialRef.current,
      {
        opacity: 0.3,
      },
      {
        opacity: 0,
        duration: Math.random() * 8 + 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    );
    materialRef.current.color.multiplyScalar(0.5 + Math.random() * 0.5);
  }, []);

  const direction = Math.random() - 0.5;
  const speed = Math.random() * 0.1;
  const movement = useMemo(() => ({
    directionX: Math.random() - 0.5,
    directionY: Math.random() - 0.5,
    directionZ: Math.random() - 0.5, 
    speed: Math.random() * 0.1,
  }), []);

  useFrame((state, delta) => {
    mesh.current.position.x += movement.directionX * movement.speed * delta;
    mesh.current.position.y += movement.directionY * movement.speed * delta;
    mesh.current.position.z += movement.directionZ * movement.speed * delta;
  });

  const randomizedScale = Math.random();
  return (
    <mesh
      position={[position[0], position[1], position[2]]}
      rotation={[0, Math.PI, 0]}
      scale={randomizedScale}
      ref={mesh}
    >
      <planeGeometry args={[1, 1, 1]} />
      <meshBasicMaterial
        color={colors[Math.floor(Math.random() * colors.length)]}
        ref={materialRef}
        map={bokehTextures[Math.floor(Math.random() * bokehTextures.length)]}
        opacity={1}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
};
