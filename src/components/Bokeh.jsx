import { useRef, useState, useEffect, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useAppStore } from "../store";

export const BokehSinusoide = ({ position, isAbout }) => {
  const bokehTextures = useMemo(
    () => [
      useLoader(TextureLoader, "/bokeh-1.png"),
      useLoader(TextureLoader, "/bokeh-2.png"),
      useLoader(TextureLoader, "/bokeh-3.png"),
      useLoader(TextureLoader, "/bokeh-4.png"),
      useLoader(TextureLoader, "/bokeh-5.png"),
    ],
    [],
  );
  const colors = ["#eeaf6c", "#efc675", "#ae8456", "#ffdebd", "#ffefe0"];
  const { opacityTrigger } = useAppStore();

  const [moveProperty, setMoveProperty] = useState({
    directionX: Math.random() - 0.5,
    directionY: Math.random() - 0.5,
    directionZ: Math.random() - 0.5,
    speed: Math.random() - 0.5,
  });

  const visualProperty = useMemo(
    () => ({
      scale: Math.random(),
      color: colors[Math.floor(Math.random() * colors.length)],
      texture: bokehTextures[Math.floor(Math.random() * bokehTextures.length)],
    }),
    [],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setMoveProperty(() => ({
        directionX: Math.random() - 0.5,
        directionY: Math.random() - 0.5,
        directionZ: Math.random() - 0.5,
        speed: Math.random() - 0.5 + 0.05,
      }));

      return () => clearInterval(interval);
    }, 3000);
  }, []);

  const mesh = useRef();
  const materialRef = useRef();

  useGSAP(() => {
    if (opacityTrigger) {
      gsap.set(mesh.current.scale, {
        x: visualProperty.scale,
        z: visualProperty.scale,
        y: visualProperty.scale,
      });
      gsap.to(mesh.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: Math.random() * 2,
      });
    } else {
      gsap.fromTo(
        mesh.current.scale,
        {
          x: 0,
          y: 0,
          z: 0,
        },
        {
          x: visualProperty.scale,
          z: visualProperty.scale,
          y: visualProperty.scale,
          duration: Math.random() * 1 + 1,
          delay: isAbout ? Math.random() : Math.random() * 10 + 5,
        },
      );

      gsap.fromTo(
        materialRef.current,
        {
          opacity: Math.random() * 1,
        },
        {
          opacity: 0,
          duration: Math.random() * 8 + 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        },
      );
    }
  }, [opacityTrigger]);

  useFrame((state, delta) => {
    mesh.current.position.x +=
      moveProperty.directionX * moveProperty.speed * delta;
    mesh.current.position.y +=
      moveProperty.directionY * moveProperty.speed * delta;
    mesh.current.position.z +=
      moveProperty.directionZ * moveProperty.speed * delta;
  });

  return (
    <mesh
      position={[position[0], position[1], position[2]]}
      rotation={[0, Math.PI, 0]}
      scale={visualProperty.scale}
      ref={mesh}
    >
      <planeGeometry args={[1, 1, 1]} />
      <meshBasicMaterial
        color={visualProperty.color}
        ref={materialRef}
        map={visualProperty.texture}
        opacity={0}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
};

export const BokehAnimation = ({ position }) => {
  const bokehTextures = useMemo(
    () => [
      useLoader(TextureLoader, "/bokeh-1.png"),
      useLoader(TextureLoader, "/bokeh-2.png"),
      useLoader(TextureLoader, "/bokeh-3.png"),
      useLoader(TextureLoader, "/bokeh-4.png"),
      useLoader(TextureLoader, "/bokeh-5.png"),
    ],
    [],
  );

  const colors = ["#eeaf6c", "#efc675", "#ae8456", "#ffdebd", "#ffefe0"];
  const property = useMemo(
    () => ({
      scale: Math.random(),
      color: colors[Math.floor(Math.random() * colors.length)],
      texture: bokehTextures[Math.floor(Math.random() * bokehTextures.length)],
      directionX: Math.random() - 0.5,
      directionY: Math.random() - 0.5,
      directionZ: Math.random() - 0.5,
      speed: Math.random() - 0.5,
    }),
    [],
  );

  const [isTimeoutEnd, setIsTimeoutEnd] = useState(false);
  const mesh = useRef();
  const materialRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setIsTimeoutEnd(true);
    }, 4000);
  }, []);

  useGSAP(() => {
    if (!isTimeoutEnd) return;

    gsap.fromTo(
      materialRef.current,
      {
        opacity: 0,
      },
      {
        opacity: Math.random() - 0.7,
        duration: Math.random() * 4,
      },
    );

    gsap.fromTo(
      mesh.current.scale,
      {
        x: property.scale * 12,
        y: property.scale * 12,
        z: property.scale * 12,
      },
      {
        x: property.scale / 9,
        y: property.scale / 9,
        z: property.scale / 9,
        duration: 0.6,
        delay: 0.5,
      },
    );
  }, [isTimeoutEnd]);

  useFrame((state, delta) => {
    if (isTimeoutEnd) {
      mesh.current.position.x +=
        property.directionX * property.speed * delta * 100;
      mesh.current.position.y +=
        property.directionY * property.speed * delta * 100;
      mesh.current.position.z +=
        property.directionZ * property.speed * delta * 100 * 2;
    }
  });

  return (
    <mesh
      position={[position[0], position[1], position[2]]}
      rotation={[0, Math.PI, 0]}
      scale={property.scale}
      ref={mesh}
    >
      <planeGeometry args={[1, 1, 1]} />
      <meshBasicMaterial
        color={property.color}
        ref={materialRef}
        map={property.texture}
        opacity={0}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
};
