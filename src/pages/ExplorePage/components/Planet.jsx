import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default function Planet({ name, scale }) {
    const gltf = useLoader(GLTFLoader, `/${name.toLowerCase()}/${name}.glb`);

    return (
        <group>
            <primitive object={gltf.scene} scale={scale} />
        </group>
    );
}
