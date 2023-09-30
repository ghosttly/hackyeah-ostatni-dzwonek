"use client";

import { Stage, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
useGLTF.preload("/typo.glb");

export const Scene = () => {
  return (
    <Canvas shadows>
      <Suspense fallback={null}>
        <Stage shadows>
          <Model />
        </Stage>
      </Suspense>
    </Canvas>
  );
};

const Model = () => {
  const { scene, animations } = useGLTF("/typo.glb");
  const { actions } = useAnimations(animations, scene);

  return <primitive object={scene} scale={[0.1, 0.1, 0.1]}></primitive>;
};
