import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Topo() {
    const usuario = JSON.parse(localStorage.getItem('trackit'));
    const navigate = useNavigate();

    function voltarHome() {
        navigate('/');
        localStorage.clear();
    };

    return (
        <Navbar>
            <h1 onClick={voltarHome}>TrackIt</h1>
            <img src={usuario.image} alt='imagem do usuário' />
        </Navbar>
    );
};

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
        cursor: pointer;
        &:hover {
            opacity: 0.7;
        }
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`;