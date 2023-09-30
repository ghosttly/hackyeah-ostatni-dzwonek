"use client";

import React, { Suspense, useEffect } from "react";
import { Stage, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useStadiStore } from "@/src/store/useStadiAnimations";
useGLTF.preload("/typo_bez_ronk.glb");

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
  const { stadiActions, initStadiAnimations, playAction } = useStadiStore(
    (state) => ({
      stadiActions: state.stadiActions,
      initStadiAnimations: state.initStadiAnimations,
      playAction: state.playAction,
    })
  );
  const { scene, animations } = useGLTF("/typo_bez_ronk.glb");
  const { actions } = useAnimations(animations, scene);
  console.log(actions);
  playAction("Wave");
  useEffect(() => {
    initStadiAnimations(actions);
  }, []);

  return <primitive object={scene} scale={[0.05, 0.05, 0.05]}></primitive>;
};
