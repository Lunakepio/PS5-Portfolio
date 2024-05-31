import { Canvas, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { ExperienceProject } from "./Experience";

export const Project3D = ({ position, mesh, rotation, scale }) => {
  const [currentPosition, setCurrentPosition] = useState({
    x: position.x,
    y: position.y,
    z: position.z - 10,
  });
  const [currentMesh, setCurrentMesh] = useState(mesh);

  useEffect(() => {
    setCurrentPosition({ x: position.x, y: position.y, z: position.z - 10 });
  }, [position]);

  useEffect(() => {
    setCurrentMesh(mesh);
  }, [mesh]);

  return (
    <Canvas
      camera={{
        position: [currentPosition.x, currentPosition.y, currentPosition.z],
        fov: 30,
      }}
    >
      <ambientLight intensity={4} />
      <ExperienceProject
        scale={scale}
        position={currentPosition}
        rotation={rotation}
        mesh={currentMesh}
      />
    </Canvas>
  );
};
