import styled from "styled-components"
import UserContext from "./context/UserContext";
import { useContext } from "react";

export default function Topo() {
    const { usuario } = useContext(UserContext);

    return (
        <Navbar>
            <h1>TrackIt</h1>
            <img src={usuario.image} alt='imagem do usuário' />
        </Navbar>
    )
}

const Navbar = styled.div`
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    width: 100%;
    padding: 0 18px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    h1 {
        font-family: 'Playball', cursive;
        font-size: 39px;
        color: #FFFFFF;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`;