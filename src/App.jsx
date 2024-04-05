import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { Experience } from "./components/Experience";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

function App() {
  return (
    <div className="canvas-container">
      <Canvas shadows camera={{ position: [0, 0, -100], fov: 30 }}>
        <color attach="background" args={["#000011"]} />
        <Experience />
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} mipmapBlur />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default App;
