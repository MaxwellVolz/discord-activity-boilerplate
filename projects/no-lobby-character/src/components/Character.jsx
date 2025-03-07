/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/fallguy_char.glb -o src/components/Character.jsx -r public
*/

import { Text, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useGraph } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef } from "react";
import { SkeletonUtils } from "three-stdlib";

export function Character({
    animation = "wave", // FG_Run_A, FG_Walk_A, FG_Idle_A
    color = "yellow",
    name = "Player",
    ...props
}) {
    const group = useRef();
    const { scene, animations } = useGLTF("/models/character.glb", "draco/gltf/");
    // Skinned meshes cannot be re-used in threejs without cloning them
    const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
    const { nodes, materials } = useGraph(clone);
    const { actions } = useAnimations(animations, group);
    useEffect(() => {
        actions[animation]?.reset().fadeIn(0.1).play();
        return () => actions[animation]?.fadeOut(0.1);
    }, [animation]);

    const textRef = useRef();

    useFrame(({ camera }) => {
        if (textRef.current) {
            textRef.current.lookAt(camera.position);
        }
    });
    return (
        <group ref={group} {...props} dispose={null}>
            <group ref={textRef}>
                <Text
                    position-y={2.8}
                    fontSize={0.5}
                    anchorX="center"
                    anchorY="middle"
                    font="fonts/PaytoneOne-Regular.ttf"
                >
                    {name}
                    <meshBasicMaterial color="white" />
                </Text>
                <Text
                    position-y={2.78}
                    position-x={0.02}
                    position-z={-0.02}
                    fontSize={0.5}
                    anchorX="center"
                    anchorY="middle"
                    font="fonts/PaytoneOne-Regular.ttf"
                >
                    {name}
                    <meshBasicMaterial color="black" />
                </Text>
            </group>
            <group name="Scene">
                <group name="fall_guys">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                        name="body"
                        geometry={nodes.body.geometry}
                        skeleton={nodes.body.skeleton}
                    >
                        <meshStandardMaterial {...materials.Material_0} color={color} />
                    </skinnedMesh>
                    <skinnedMesh
                        name="eye"
                        geometry={nodes.eye.geometry}
                        material={materials.Material_2}
                        skeleton={nodes.eye.skeleton}
                    >
                        <meshStandardMaterial {...materials.Material_2} color={"white"} />
                    </skinnedMesh>
                    <skinnedMesh
                        name="hand-"
                        geometry={nodes["hand-"].geometry}
                        skeleton={nodes["hand-"].skeleton}
                    >
                        <meshStandardMaterial {...materials.Material_0} color={color} />
                    </skinnedMesh>
                    <skinnedMesh
                        name="leg"
                        geometry={nodes.leg.geometry}
                        skeleton={nodes.leg.skeleton}
                    >
                        <meshStandardMaterial {...materials.Material_0} color={color} />
                    </skinnedMesh>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/models/character.glb", "draco/gltf/");
