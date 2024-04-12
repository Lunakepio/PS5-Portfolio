import { OrbitControls } from "@react-three/drei";
import { MeshRay } from "./godrays/Mesh";
import { MeshReflection } from "./reflection/Mesh";
import { BokehParticles } from "./BokehParticles";
import { Background } from "./Background";

export const Experience = () => {
  return (
    <>
      <Background />
      <MeshRay />
      <MeshReflection />
      <BokehParticles isAbout={true} />
      <OrbitControls />
    </>
  );
};

export const ExperienceAbout = () => {
  return (
    <>
      <Background />
      <MeshRay />
      <MeshReflection />
      <BokehParticles isAbout={false} />
      <OrbitControls />
    </>
  );
};
