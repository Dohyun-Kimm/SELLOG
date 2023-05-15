/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/csQuiz/oMark.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Text: THREE.Mesh;
  };
  materials: {
    ["default"]: THREE.MeshStandardMaterial;
  };
};

export function OMark(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/csQuiz/oMark.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        name="OMark"
        geometry={nodes.Text.geometry}
        material={materials["default"]}
        position={[-13, 0, 5]}
        scale={[15, 0.86, 15]}
      >
        <meshStandardMaterial attach="material" color="#28a745" />
      </mesh>
    </group>
  );
}