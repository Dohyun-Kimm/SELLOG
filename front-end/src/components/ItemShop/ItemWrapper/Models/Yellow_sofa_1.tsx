/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/yellow_sofa_1.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Sofa: THREE.Mesh;
    Plane029: THREE.Mesh;
    Plane031: THREE.Mesh;
    Plane032: THREE.Mesh;
    Plane033: THREE.Mesh;
  };
  materials: {
    Wood: THREE.MeshStandardMaterial;
    Fabric: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/items/yellow_sofa_1.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Sofa.geometry}
        material={materials.Wood}
        position={[-0.02, -0.24, -0.08]}
        scale={0.74}
      >
        <mesh geometry={nodes.Plane029.geometry} material={materials.Fabric} />
        <mesh geometry={nodes.Plane031.geometry} material={materials.Fabric} />
        <mesh geometry={nodes.Plane032.geometry} material={materials.Fabric} />
        <mesh geometry={nodes.Plane033.geometry} material={materials.Wood} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/items/yellow_sofa_1.glb");
