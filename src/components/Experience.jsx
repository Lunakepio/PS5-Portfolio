import { OrbitControls, Preload } from "@react-three/drei";
import { MeshRay } from "./godrays/Mesh";
import { MeshReflection } from "./reflection/Mesh";
import { BokehParticles } from "./BokehParticles";
import { Background } from "./Background";

export const Experience = () => {
  return (
    <>
      <Background />
      <MeshRay isAbout={false} />
      <MeshReflection isAbout={false} />
      <BokehParticles isAbout={false} />
    </>
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
