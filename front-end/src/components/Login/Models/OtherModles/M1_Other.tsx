/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/characters/m1.glb -t
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useLocation } from "react-router-dom";

type GLTFResult = GLTF & {
  nodes: {
    m_5: THREE.SkinnedMesh;
    root: THREE.Bone;
    ["MCH-torsoparent"]: THREE.Bone;
  };
  materials: {
    characters: THREE.MeshStandardMaterial;
  };
};

type ActionName = "Idle" | "Run" | "Sad" | "Song Jump" | "Walk" | "Win";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function M1_Other(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group | any>();
  const { nodes, materials, animations } = useGLTF(
    "/models/otherCharacters/m1.glb"
  ) as GLTFResult;
  const { actions } = useAnimations<GLTFActions | any>(animations, group);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("matching")) {
      actions["Idle"]?.play();
    } else {
      actions["Song Jump"]?.play();
    }
  }, []);

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={4}
      position={[0, -3, 0]}
    >
      <group name="Scene">
        <group name="rig">
          <primitive object={nodes.root} />
          <primitive object={nodes["MCH-torsoparent"]} />
          <skinnedMesh
            name="m_5"
            geometry={nodes.m_5.geometry}
            material={materials.characters}
            skeleton={nodes.m_5.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

// useGLTF.preload("/models/characters/m1.glb");
