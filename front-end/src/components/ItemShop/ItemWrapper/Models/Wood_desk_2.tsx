/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/wood_desk_2.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Table: THREE.Mesh;
    Drawers: THREE.Mesh;
    Roundcube: THREE.Mesh;
    Roundcube001: THREE.Mesh;
    Roundcube002: THREE.Mesh;
    Table_Legs: THREE.Mesh;
  };
  materials: {
    Wood: THREE.MeshStandardMaterial;
    Steel: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/items/wood_desk_2.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Table.geometry}
        material={materials.Wood}
        position={[0, 0, -0.03]}
      >
        <mesh
          geometry={nodes.Drawers.geometry}
          material={materials.Wood}
          position={[-1.2, 1.56, 0.8]}
        >
          <mesh
            geometry={nodes.Roundcube.geometry}
            material={materials.Steel}
            position={[0, 0, 0.05]}
          />
          <mesh
            geometry={nodes.Roundcube001.geometry}
            material={materials.Steel}
            position={[1.19, 0, 0.05]}
          />
          <mesh
            geometry={nodes.Roundcube002.geometry}
            material={materials.Steel}
            position={[2.41, 0, 0.05]}
          />
        </mesh>
        <mesh geometry={nodes.Table_Legs.geometry} material={materials.Steel} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/items/wood_desk_2.glb");
