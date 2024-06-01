import { MeshRay } from "./godrays/Mesh";
import { MeshReflection } from "./reflection/Mesh";
import { Background } from "./Background";
import { BokehParticles } from "./BokehParticles";
import { Suspense, useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { MarioBros } from "./Mario_Bros";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MarioKart } from "./Mariokart";
import { F4 } from "./F4";
import { Porche } from "./Porche";
import { Arwinghigh } from "./Arwinghigh";
import { Ship } from "./Star_wars_x-wing";
import { XWing } from "./XWing";

export const Experience = () => {
  return (
    <Suspense fallback={null}>
      <Background />
      <MeshRay isAbout={false} />
      <MeshReflection isAbout={false} />
      <BokehParticles isAbout={false} />
    </Suspense>
  );
};

export const ExperienceAbout = () => {
  return (
    <>
      <Background />
      <MeshRay isAbout={true} />
      <MeshReflection isAbout={true} />
      <BokehParticles isAbout={true} />
      
    </>
  );
};

export const ExperienceProject = ({ position, mesh, rotation, scale }) => {
  const ref = useRef();

  useFrame(({ camera }) => {
    camera.position.set(position.x, position.y, position.z);
    camera.rotation.set(0, Math.PI, 0);
    ref.current.rotation.y += 0.005;
  });

  useGSAP(() => {
    if (window.innerWidth > 800) {
      gsap.fromTo(
        ref.current.scale,
        {
          x: 0,
          y: 0,
          z: 0,
        },
        {
          x: scale.desktop,
          y: scale.desktop,
          z: scale.desktop,
          duration: 1,
        },
      );
    } else {
      gsap.fromTo(
        ref.current.scale,
        {
          x: 0,
          y: 0,
          z: 0,
        },
        {
          x: scale.mobile,
          y: scale.mobile,
          z: scale.mobile,
          duration: 1,
        },
      );
    }
  }, [mesh]);

  return (
    <group ref={ref} rotation={[rotation.x, rotation.y, rotation.z]}>
      {returnProjectMesh(mesh)}
    </group>
  );
};

function returnProjectMesh(mesh) {
  switch (mesh) {
    case "Mario":
      return <MarioBros />;

    case "MarioKart":
      return <MarioKart />;

    case "F4":
      return <F4 />;

    case "Porche":
      return <Porche />;

    case "Arwinghigh":
      return <Arwinghigh />;

    case "XWing":
      // return <Ship />;
      return <XWing/>
    default:
      break;
  }
}
