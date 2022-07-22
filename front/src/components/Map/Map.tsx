import { FC } from "react"
import { MapSection, MapImg } from "./Map.style"
import map from "/map.png"

interface MapProps {}

export const Map: FC<MapProps> = () => {
    return (
        <MapSection>
            <MapImg src="https://i.postimg.cc/ZYGQHmv1/map.png" />
        </MapSection>
    )
}
