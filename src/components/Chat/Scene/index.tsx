import { Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

export const Scene = () => {
  return (
    <Canvas shadows>
      <Suspense fallback={null}>
        <Stage></Stage>
      </Suspense>
    </Canvas>
  );
};
