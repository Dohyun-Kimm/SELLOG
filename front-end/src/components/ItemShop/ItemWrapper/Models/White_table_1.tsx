/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/white_table_1.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Table001: THREE.Mesh;
    Plane011: THREE.Mesh;
    Plane012: THREE.Mesh;
  };
  materials: {
    Wood: THREE.MeshStandardMaterial;
    Resin: THREE.MeshPhysicalMaterial;
    Metal: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/items/white_table_1.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Table001.geometry}
        material={materials.Wood}
        position={[1.04, 0, 0.71]}
      >
        <mesh geometry={nodes.Plane011.geometry} material={materials.Resin} />
        <mesh geometry={nodes.Plane012.geometry} material={materials.Metal} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/items/white_table_1.glb");
