/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/characters/f2.glb -t
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useLocation } from "react-router-dom";

type GLTFResult = GLTF & {
  nodes: {
    f_7: THREE.SkinnedMesh;
    root: THREE.Bone;
    ["MCH-torsoparent"]: THREE.Bone;
  };
  materials: {
    characters: THREE.MeshStandardMaterial;
  };
};

type ActionName = "Idle" | "Run" | "Sad" | "Song Jump" | "Walk" | "Win";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function F2_Other(props: JSX.IntrinsicElements["group"] | any) {
  const group = useRef<THREE.Group | any>();
  const { nodes, materials, animations } = useGLTF(
    "/models/otherCharacters/f2.glb"
  ) as GLTFResult;
  const { actions } = useAnimations<GLTFActions | any>(animations, group);

  const location = useLocation();

  const result = props.result;

  useEffect(() => {
    if (location.pathname.includes("matching")) {
      actions["Idle"]?.play();
    } else {
      if (result) {
        if (result === 0) {
          actions["Idle"]?.play();
        } else if (result > 0) {
          actions["Win"]?.play();
        } else if (result < 0) {
          actions["Sad"]?.play();
        }
      } else {
        actions["Song Jump"]?.play();
      }
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
            name="f_7"
            geometry={nodes.f_7.geometry}
            material={materials.characters}
            skeleton={nodes.f_7.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

// useGLTF.preload("/models/characters/f2.glb");
