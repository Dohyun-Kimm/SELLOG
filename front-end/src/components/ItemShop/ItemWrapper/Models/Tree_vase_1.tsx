/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/tree_vase_1.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Circle027: THREE.Mesh;
    tree: THREE.Mesh;
  };
  materials: {
    Glass: THREE.MeshPhysicalMaterial;
    Dark: THREE.MeshStandardMaterial;
  };
};

export function Tree_vase_1(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/items/tree_vase_1.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null} scale={1.2} position={[0, -4.5, 0]}>
      <mesh
        geometry={nodes.Circle027.geometry}
        material={materials.Glass}
        position={[0.01, 2.02, 0]}
      >
        <mesh
          geometry={nodes.tree.geometry}
          material={materials.Dark}
          position={[0, 0.22, 0]}
          scale={0.5}
        />
      </mesh>
    </group>
  );
}

// useGLTF.preload("/models/items/tree_vase_1.glb");
