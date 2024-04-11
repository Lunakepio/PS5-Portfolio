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
      <Content />
    </Suspense>
  );
};
