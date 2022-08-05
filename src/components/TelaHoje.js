import styled from "styled-components";
import { useEffect } from "react";
import { getHabitos } from "../services/trackit";
import RecadoProgressoHoje from "./RecadoProgressoHoje";

export default function TelaHoje() {

    useEffect(() => {
        getHabitos()
            .then(resposta => console.log(resposta.data))
            .catch(erro => console.log(erro));
        },
    []);

    return (
        <Container>
            <h2>Dia, dd/mm</h2>
            <RecadoProgressoHoje />
            <h1>tela hoje</h1>
            <h1>tela hoje</h1>
            <h1>tela hoje</h1>
            <h1>tela hoje</h1>
            <h1>tela hoje</h1>
            <h1>tela hoje</h1>
            <h1>tela hoje</h1>
            <h1>tela hoje</h1>
            <h1>tela hoje</h1>
            <h1>tela hoje</h1>
            <h1>tela hoje</h1>
            <h1>tela hoje</h1>
            <h1>tela hoje</h1>
            <h1>tela hoje</h1>
        </Container>
    );
}

const Container = styled.div`
    padding: 18px;

    h2 {
        margin-top: 28px;
        font-size: 23px;
        color: #126BA5;
    }
`;