/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/csQuiz/xMark.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Text001: THREE.Mesh;
  };
  materials: {
    ["default"]: THREE.MeshStandardMaterial;
  };
};

export function XMark(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/csQuiz/xMark.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        name="XMark"
        geometry={nodes.Text001.geometry}
        material={materials["default"]}
        position={[5, 0, 5]}
        scale={[15, 0.86, 15]}
      >
        <meshStandardMaterial attach="material" color="#dc3545" />
      </mesh>
    </group>
  );
}