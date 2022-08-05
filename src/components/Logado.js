import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Topo from './Topo';
import Menu from './Menu';
import styled from "styled-components";

export default function Logado({children}) {
    const navigate = useNavigate();
    const autenticador = JSON.parse(localStorage.getItem('trackit'));
    
    // const tempoLogado = new Date() - autenticador.horario;
    // console.log(tempoLogado)

    function erroAutenticador() {
        alert('Não autorizado, favor refazer o login');
        localStorage.clear('trackit')
        navigate('/');
    }

    if (autenticador) {
        return (
            <Wrapper>
                <Topo />
                {children}
                <Menu />
            </Wrapper>
        );
    } else {
        erroAutenticador();
    }
}

const Wrapper = styled.div`
    background-color: #e5e5e5;
    width: 100vw;
    height: 100vh;
    margin: 70px 0;
`;