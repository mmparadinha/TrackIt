import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Topo from './comuns/Topo';
import Menu from './comuns/Menu';
import styled from "styled-components";

export default function Logado({children}) {
    const navigate = useNavigate();
    const usuario = JSON.parse(localStorage.getItem('trackit'));
    const horarioAtual = Date.now();

    useEffect(() => {
        if (usuario === null || horarioAtual - usuario.horario > 3.6e+6) {
            alert('Não autorizado, favor refazer o login');
            localStorage.clear('trackit');
            navigate('/');
        }}
    );

    if (usuario !== null && usuario.token) {
        return (
            <Container>
                <Topo />
                <Wrapper >
                    {children}
                </Wrapper>
                <Menu />
            </Container>
        );
    } else {
        localStorage.clear('trackit');
    };
};

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #e5e5e5;
`;

const Wrapper = styled.div`
    padding: 70px 0;
`;