"use client";

import React, { Suspense, useEffect } from "react";
import { Stage, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { div } from "three/examples/jsm/nodes/Nodes.js";

export const Scene = () => {
  return (
    <Canvas shadows>
      <Suspense fallback={null}>
        <Stage shadows>{/* <Model /> */}</Stage>
      </Suspense>
    </Canvas>
  );
};

// const Model = () => {
//   //   const { scene, animations } = useGLTF("/typo.glb");
//   //   const { actions } = useAnimations(animations, scene);
//   //   useEffect(() => {
//   //     console.log(actions);
//   //     // actions["Death"]?.reset().play();
//   //   }, []);

//   //   return <primitive object={null}></primitive>;
//   return <div></div>;
// };
