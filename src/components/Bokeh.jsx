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
  const [currentUrl, setCurrentUrl] = useState(window.location.pathname);

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

  useEffect(() => {
    setCurrentUrl(window.location.pathname);
  }, [window.location.href]);

  const mesh = useRef();
  const materialRef = useRef();

  useGSAP(() => {
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
        duration: Math.random() * 3 + 1,
        delay: isAbout ? 0.5 : 5,
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
    materialRef.current.color.multiplyScalar(0.5 + Math.random() * 0.5);
  }, []);

  useFrame((state, delta) => {
    if (opacityTrigger && mesh.current.scale.x > 0) {
      mesh.current.scale.x -= 0.1;
      mesh.current.scale.y -= 0.1;
      mesh.current.scale.z -= 0.1;
    } else if (
      !opacityTrigger &&
      mesh.current.scale.x < visualProperty.scale &&
      currentUrl === "/projects"
    ) {
      mesh.current.scale.x += 0.1;
      mesh.current.scale.y += 0.1;
      mesh.current.scale.z += 0.1;
    }

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
  const visualProperty = useMemo(
    () => ({
      scale: Math.random(),
      color: colors[Math.floor(Math.random() * colors.length)],
      texture: bokehTextures[Math.floor(Math.random() * bokehTextures.length)],
    }),
    [],
  );

  const [moveProperty, setMoveProperty] = useState({
    directionX: Math.random() - 0.5,
    directionY: Math.random() - 0.5,
    directionZ: Math.random() - 0.5,
    speed: Math.random() - 0.5,
  });
  const [isTimeoutEnd, setIsTimeoutEnd] = useState(false);
  const mesh = useRef();
  const materialRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setIsTimeoutEnd(true);
    }, 3500);
  });

  useGSAP(() => {
    gsap.fromTo(
      materialRef.current,
      {
        opacity: 0,
      },
      {
        opacity: Math.random() * 1,
        duration: 0.5,
        delay: 4.3,
      },
    );

    gsap.fromTo(
      mesh.current.scale,
      {
        x: visualProperty.scale * 6,
        y: visualProperty.scale * 6,
        z: visualProperty.scale * 6,
      },
      {
        x: visualProperty.scale / 9,
        y: visualProperty.scale / 9,
        z: visualProperty.scale / 9,
        duration: Math.random() * 1 + 1,
        delay: 4,
      },
    );
    materialRef.current.color.multiplyScalar(0.5 + Math.random() * 0.5);
  }, []);
  useFrame((state, delta) => {
    if (isTimeoutEnd) {
      mesh.current.position.x +=
        moveProperty.directionX * moveProperty.speed * delta * 20;
      mesh.current.position.y +=
        moveProperty.directionY * moveProperty.speed * delta * 20;
      mesh.current.position.z +=
        moveProperty.directionZ * moveProperty.speed * delta * 200;
    }
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
