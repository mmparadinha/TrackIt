import styled from "styled-components";
import { useState, useContext } from "react";
import ProgressContext from './context/ProgressContext';
import HabitsTodayContext from "./context/HabitsTodayContext";

export default function HabitoHoje({ habito }) {
    const [realizado, setRealizado] = useState(false)
    const { setProgresso } = useContext(ProgressContext);
    const { habitosHoje } = useContext(HabitsTodayContext);

    function realizarHabito() {
        setRealizado(!realizado);
    }

    return (
        <Box>
            <Wrapper atual={habito.currentSequence} recorde={habito.highestSequence}>
                <h3>{habito.name}</h3>
                <p>Sequência atual: <span>{habito.currentSequence} dias</span></p>
                <p>Seu recorde: <span>{habito.highestSequence} dias</span></p>
            </Wrapper>
            <Checkbox onClick={realizarHabito} realizado={realizado}><ion-icon name="checkmark-outline"></ion-icon></Checkbox>
        </Box>
    );
}

const Box = styled.div`
    background-color: #FFFFFF;
    color: #666666;
    min-height: 94px;
    width: 100%;
    border-radius: 5px;
    padding: 14px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const Wrapper = styled.div`
    background-color: red;

    h3 {
        font-size: 20px;
        margin-bottom: 8px;
    }

    p {
        font-size: 13px;
    }

    span {
        color: ${props => props.atual === props.recorde && props.atual !== 0 ? '#8FC549' : '#666666'};
    }
`;

const Checkbox = styled.div`
    height: 69px;
    width: 69px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.realizado ? '#8FC549' : '#EBEBEB'};
    border: 1px solid ${props => props.realizado ? 'none' : '#E7E7E7'};
    border-radius: 5px;

    ion-icon {
        color: #FFFFFF;
        font-size: 48px;
        --ionicon-stroke-width: 72px;
    }
`;