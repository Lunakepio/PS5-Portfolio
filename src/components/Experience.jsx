import { MeshRay } from "./godrays/Mesh";
import { MeshReflection } from "./reflection/Mesh";
import { Background } from "./Background";
import { BokehParticles } from "./BokehParticles";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

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
