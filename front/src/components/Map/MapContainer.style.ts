import styled from "styled-components"
import map from "../../assets/map.png"

export const ContainerMap = styled.div`
    background-image: url(${map});
    background-position: right;
    background-repeat: no-repeat;
    background-size: 90% 100%;
    position: absolute;
    width: 40%;
    height: 100%;
    top: 0;
    right: 0;
`

export const BallonSection = styled.div``

export const YellowDown = styled.img`
    position: absolute;
    z-index: 100;
    top: 55%;
    left: 0;
    width: 25%;
    height: 20%;
`

export const PinkBallon2 = styled.img`
    position: absolute;
    left: 0;
    z-index: 50;
    bottom: -6%;
    width: 60%;
    height: 50%;
`

export const MapMain = styled.img`
    max-width: 100%;
    height: auto;
    max-height: 100%;
    position: absolute;
    right: 0;
`
