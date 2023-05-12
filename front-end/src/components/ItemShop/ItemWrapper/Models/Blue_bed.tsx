/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/blue_bed.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Bed: THREE.Mesh;
    Plane010: THREE.Mesh;
    Plane013: THREE.Mesh;
    Plane014: THREE.Mesh;
    Plane015: THREE.Mesh;
  };
  materials: {
    Wood2: THREE.MeshStandardMaterial;
    Bed: THREE.MeshStandardMaterial;
    Sheet: THREE.MeshStandardMaterial;
  };
};

export function Blue_bed(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/items/blue_bed.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Bed.geometry} material={materials.Wood2}>
        <mesh geometry={nodes.Plane010.geometry} material={materials.Bed} />
        <mesh
          geometry={nodes.Plane013.geometry}
          material={materials.Sheet}
          position={[0.04, 1.97, -0.97]}
          rotation={[0, 0.23, 0]}
        />
        <mesh
          geometry={nodes.Plane014.geometry}
          material={materials.Sheet}
          position={[-0.69, 0.91, 1.82]}
          rotation={[0, -0.29, 0]}
        />
        <mesh
          geometry={nodes.Plane015.geometry}
          material={materials.Sheet}
          position={[0.88, 0.91, 1.65]}
          rotation={[0, 0.34, 0]}
          scale={0.86}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/items/blue_bed.glb");
