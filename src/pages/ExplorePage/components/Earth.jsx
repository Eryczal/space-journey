import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { AdditiveBlending, BackSide, MeshPhongMaterial, TextureLoader } from "three";
import { OBJLoader } from "three/examples/jsm/Addons.js";

function Earth() {
    const cloudsTexture = useLoader(TextureLoader, "/earth/Textures/Clouds_2K.png");
    const diffuseTexture = useLoader(TextureLoader, "/earth/Textures/Diffuse_2K.png");
    const bumpTexture = useLoader(TextureLoader, "/earth/Textures/Bump_2K.png");
    const specularTexture = useLoader(TextureLoader, "/earth/Textures/Ocean_Mask_2K.png");

    const atmosphereMaterial = new MeshPhongMaterial({
        color: 0x2c7cc9,
        specular: 0x808080,
        shininess: 96.078431,
        transparent: true,
        opacity: 0.2,
        blending: AdditiveBlending,
        depthWrite: false,
        side: BackSide,
    });

    const cloudsMaterial = new MeshPhongMaterial({
        map: cloudsTexture,
        color: 0xa3a3a3,
        specular: 0x808080,
        shininess: 96.078431,
        transparent: true,
        opacity: 1,
        blending: AdditiveBlending,
        depthWrite: false,
    });

    const earthMaterial = new MeshPhongMaterial({
        map: diffuseTexture,
        bumpMap: bumpTexture,
        bumpScale: 1.0,
        specularMap: specularTexture,
        color: 0xa3a3a3,
        specular: 0x808080,
        shininess: 96.078431,
        opacity: 1.0,
        blending: AdditiveBlending,
        depthWrite: false,
    });

    const obj = useLoader(OBJLoader, "/earth/Earth 2K.obj");

    const cloudsRef = useRef();

    obj.traverse((child) => {
        if (child.isMesh) {
            if (child.name.toLowerCase().includes("atmosphere")) {
                child.material = atmosphereMaterial;
            } else if (child.name.toLowerCase().includes("cloud")) {
                child.material = cloudsMaterial;
                cloudsRef.current = child;
            } else {
                child.material = earthMaterial;
            }
            child.geometry.computeVertexNormals();
        }
    });

    useFrame((state, delta) => {
        if (cloudsRef.current) {
            cloudsRef.current.rotation.y -= delta * 0.01;
        }
    });

    return (
        <group>
            <primitive object={obj} />;
        </group>
    );
}

export { Earth };
