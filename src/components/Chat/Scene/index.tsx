"use client";

import React, { Suspense, useEffect } from "react";
import { Stage, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
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

  useEffect(() => {
    // actions["Idle"]?.play();
    // scene.traverse(
    //   (obj) =>
    //     "isMesh" in obj &&
    //     obj.isMesh &&
    //     (obj.receiveShadow = obj.castShadow = true)
    // );
  }, [actions, scene]);

  return <primitive object={scene} scale={[0.02, 0.02, 0.02]}></primitive>;
};
