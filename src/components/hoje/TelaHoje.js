import styled from "styled-components";
import { useEffect, useState } from "react";
import { getHabitosHoje } from "../../services/trackit";
import RecadoProgressoHoje from "./RecadoProgressoHoje";
import { useContext } from 'react';
import ProgressContext from '../context/ProgressContext';
import HabitoHoje from "./HabitoHoje";
import HabitsTodayContext from "../context/HabitsTodayContext";
import Loading from "../comuns/Loading";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br'

export default function TelaHoje() {
    const { progresso, setProgresso } = useContext(ProgressContext);
    const { habitosHoje, setHabitosHoje } = useContext(HabitsTodayContext);
    dayjs.locale('pt-br');

    useEffect(() => {
        getHabitosHoje()
            .then(resposta => setHabitosHoje(resposta.data))
            .catch(erro => console.log(erro.response.data.message));
    },
    [progresso]);

    useEffect(() => {habitosHoje !== null && setProgresso(100*habitosHoje.filter((habito) => habito.done).length / habitosHoje.length)}, [habitosHoje]);

    return (
        <Container>
            <h2>{`${dayjs().format('dddd')}, ${dayjs().format('DD')}/${dayjs().format('MM')}`}</h2>
            {habitosHoje !== null && <RecadoProgressoHoje />}
            {habitosHoje !== null ? habitosHoje.map(value => <HabitoHoje key={value.id} habito={value} />) : <Loading />}
        </Container>
    );
}

const Container = styled.div`
    padding: 18px;
    color: #BABABA;

    h2 {
        text-transform: capitalize;
        margin-top: 28px;
        font-size: 23px;
        color: #126BA5;
    }
`;