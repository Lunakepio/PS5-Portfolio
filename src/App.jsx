import { Home } from "./pages/Home";
import { Experience } from "./components/Experience";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
      <div className="canvas-container">
        <Canvas shadows camera={{ position: [0, 0, -100], fov: 30 }}>
          <color attach="background" args={["#000011"]} />
          <Experience />
          <EffectComposer>
            <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} mipmapBlur />
          </EffectComposer>
        </Canvas>
      </div>
    </>
  );
}

export default App;
