import { Hexagon } from "./Hexagon"

export const GameArena = () => {
    return (
        <group scale={10} position={[0, -5, 0]}>
            <Hexagon />
        </group>)
}