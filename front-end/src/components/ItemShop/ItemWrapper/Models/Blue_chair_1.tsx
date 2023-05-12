/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/blue_chair_1.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Chair: THREE.Mesh;
    Arm_Rest: THREE.Mesh;
    Arm_Rest_Cushiion: THREE.Mesh;
    Chair_Legs: THREE.Mesh;
  };
  materials: {
    Sofa: THREE.MeshStandardMaterial;
    Steel: THREE.MeshStandardMaterial;
  };
};

export function Blue_chair_1(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/items/blue_chair_1.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Chair.geometry}
        material={materials.Sofa}
        position={[0.02, 0, -0.02]}
        scale={1.05}
      >
        <mesh geometry={nodes.Arm_Rest.geometry} material={materials.Steel} />
        <mesh
          geometry={nodes.Arm_Rest_Cushiion.geometry}
          material={materials.Sofa}
        />
        <mesh geometry={nodes.Chair_Legs.geometry} material={materials.Steel} />
      </mesh>
    </group>
  );
}

// useGLTF.preload("/models/items/blue_chair_1.glb");
