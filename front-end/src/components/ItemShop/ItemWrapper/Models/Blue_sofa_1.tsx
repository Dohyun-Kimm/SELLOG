/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/blue_sofa_1.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Sofa: THREE.Mesh;
    Sofa_Cushions: THREE.Mesh;
    Sofa_Legs: THREE.Mesh;
  };
  materials: {
    Sofa: THREE.MeshStandardMaterial;
    Steel: THREE.MeshStandardMaterial;
  };
};

export function Blue_sofa_1(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/items/blue_sofa_1.glb"
  ) as GLTFResult;
  return (
    <group
      {...props}
      dispose={null}
      rotation={[0, THREE.MathUtils.degToRad(-90), 0]}
      position={[0, -2, 0]}
      scale={1.5}
    >
      <mesh
        geometry={nodes.Sofa.geometry}
        material={materials.Sofa}
        // position={[-0.02, 0, -0.02]}
      >
        <mesh
          geometry={nodes.Sofa_Cushions.geometry}
          material={materials.Sofa}
        />
        <mesh geometry={nodes.Sofa_Legs.geometry} material={materials.Steel} />
      </mesh>
    </group>
  );
}

// useGLTF.preload("/models/items/blue_sofa_1.glb");
