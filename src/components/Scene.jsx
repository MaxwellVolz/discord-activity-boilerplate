
import { Box, OrbitControls } from "@react-three/drei";

const Scene = () => {
    return (
        <>
            <OrbitControls />
            <mesh>
                <Box />
                <meshNormalMaterial />
            </mesh>
        </>
    )
}

export default Scene;