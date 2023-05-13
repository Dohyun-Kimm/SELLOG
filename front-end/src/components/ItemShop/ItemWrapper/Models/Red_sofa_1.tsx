/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/red_sofa_1.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Sofa: THREE.Mesh;
    Cube: THREE.Mesh;
    Cube001: THREE.Mesh;
  };
  materials: {
    ["red.001"]: THREE.MeshStandardMaterial;
    ["black.001"]: THREE.MeshStandardMaterial;
  };
};

export function Red_sofa_1(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/items/red_sofa_1.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Sofa.geometry}
        material={materials["red.001"]}
        position={[-0.01, 0, 0]}
        rotation={[0, -0.02, 0]}
        scale={1.2}
      >
        <mesh
          geometry={nodes.Cube.geometry}
          material={materials["black.001"]}
          position={[-1.36, 1.16, -0.13]}
          rotation={[-0.14, 0.7, -0.7]}
        />
        <mesh
          geometry={nodes.Cube001.geometry}
          material={materials["black.001"]}
          position={[1.21, 1.02, -0.13]}
          rotation={[0.08, -1.26, 0.37]}
        />
      </mesh>
    </group>
  );
}

// useGLTF.preload("/models/items/red_sofa_1.glb");