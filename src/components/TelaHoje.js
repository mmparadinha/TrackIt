import styled from "styled-components";
import { useEffect, useState } from "react";
import { getHabitosHoje } from "../services/trackit";
import RecadoProgressoHoje from "./RecadoProgressoHoje";
import { useContext } from 'react';
import ProgressContext from './context/ProgressContext';
import HabitoHoje from "./HabitoHoje";
import HabitsTodayContext from "./context/HabitsTodayContext";
import Loading from "../Loading";

export default function TelaHoje() {
    const { setProgresso } = useContext(ProgressContext);
    const {habitosHoje, setHabitosHoje} = useContext(HabitsTodayContext);

    useEffect(() => {
        getHabitosHoje()
            .then(resposta => {
                setHabitosHoje(resposta.data);
            })
            .catch(erro => console.log(erro));
    },
    []);

    useEffect(() => {habitosHoje && setProgresso(100*habitosHoje.filter((habito) => habito.done).length / habitosHoje.length)}, [habitosHoje]);

    return (
        <Container>
            <h2>Dia, dd/mm</h2>
            {habitosHoje ? <RecadoProgressoHoje /> : ''}
            {habitosHoje ? habitosHoje.map((value, index) => <HabitoHoje key={index} habito={value} />) : <Loading />}
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