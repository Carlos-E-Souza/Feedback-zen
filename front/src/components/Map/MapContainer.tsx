import { FC } from "react"
import { ContainerMap, YellowDown, PinkBallon2 } from "./MapContainer.style"
import yellowDown from "../../assets/yellowDown.svg"
import pinkBallon from "../../assets/pinkBallon2.svg"

interface MapContainerProps {}

export const MapContainer: FC<MapContainerProps> = () => {
    return (
        <ContainerMap>
            <YellowDown src={yellowDown} />
            <PinkBallon2 src={pinkBallon} />
        </ContainerMap>
    )
}
