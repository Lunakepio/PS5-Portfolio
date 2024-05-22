import { useEffect, useState } from "react";
import { BokehInstance } from "./BokehInstance.jsx";
import { BokehInstanceAnimation } from "./BokehInstanceAnimation.jsx";

export const BokehParticles = ({ isAbout }) => {
  const positions = Array.from({ length: 800 }).map((_, i) => [
    (i - 400) / 7,
    Math.sin(i * 0.007) * 10 + (Math.random() - 0.5) * 10 - 6,
    Math.cos(i * 0.007) * 10 + (Math.random() - 0.5) * 80,
  ]);

  const animationPositions = Array.from({ length: 50 }).map((_, i) => [
    Math.random() - 0.5,
    Math.random() - 0.5,
    Math.random() * 5 - 90,
  ]);

  // Si isAbout est vrai, on peut choisir de ne pas afficher les instances de bokeh
  return (
    <group rotation={[0, 0, -0.03]}>
      <BokehInstance positions={positions} isAbout={isAbout} />

      {isAbout ? null : (
        <BokehInstanceAnimation positions={animationPositions} />
      )}
    </group>
  );
};
