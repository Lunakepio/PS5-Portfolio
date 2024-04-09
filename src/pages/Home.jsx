import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/Experience";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Suspense } from "react";
import { Content } from "../components/Content";

export const Home = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{ background: "#000011", width: "100vw", height: "100vh" }}
        ></div>
      }
    >
      <div className="canvas-container">
        <Canvas shadows camera={{ position: [0, 0, -100], fov: 30 }}>
          <color attach="background" args={["#000011"]} />
          <Experience />
          <EffectComposer>
            <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} mipmapBlur />
          </EffectComposer>
        </Canvas>
      </div>

      <Content />
    </Suspense>
  );
};
