import { Canvas } from "@react-three/fiber";
import { Experience, ExperienceAbout } from "./Experience";
import { Loader } from "@react-three/drei";
import { Perf } from "r3f-perf";

export const Scene = ({ isAbout }) => {
  return (
    <>
      <div className="canvas-container">
        <Canvas shadows camera={{ position: [0, 0, -100], fov: 30 }}>
          {isAbout ? <ExperienceAbout /> : <Experience />}
        </Canvas>
        <Loader />
      </div>
    </>
  );
};
