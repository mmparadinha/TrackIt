import styled from "styled-components";
import { Link } from 'react-router-dom';
import Progresso from "./Progresso";

export default function Menu() {
    return (
        <Footer>
            <Link to='/habitos'>
                <h4>Hábitos</h4>
            </Link>

            <Container>
                <Link to='/hoje'>
                    <Progresso />
                </Link>
            </Container>

            <Link to='/historico'>
                <h4>Histórico</h4>
            </Link>
        </Footer>
    );
};

const Footer = styled.div`
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    width: 100%;
    padding: 0 18px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;

    h4 {
        font-size: 18px;
        color: #52B6FF;
    }

    a:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`;

const Container = styled.div`
    width: 92px;
    height: 92px;
    position: relative;
    bottom: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #52B6FF;
    border-radius: 50%;
`;