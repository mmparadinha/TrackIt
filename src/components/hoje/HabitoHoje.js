import styled from "styled-components";
import { marcarHabito, desmarcarHabito } from "../../services/trackit";
import { useContext } from "react";
import HabitsTodayContext from "../context/HabitsTodayContext";
import { getHabitosHoje } from "../../services/trackit";

export default function HabitoHoje({ habito }) {
    const { setHabitosHoje } = useContext(HabitsTodayContext);

    function statusHabito(props) {
        if (habito.done) {
            desmarcarHabito(props)
                .then(getHabitosHoje()
                        .then(resposta => setHabitosHoje(resposta.data))
                        .catch(erro => console.log(erro.response.data.message)))
                .catch(erro => console.log(erro.response.data.message));
        } else {
            marcarHabito(props)
                .then(getHabitosHoje()
                        .then(resposta => setHabitosHoje(resposta.data))
                        .catch(erro => console.log(erro.response.data.message)))
                .catch(erro => console.log(erro.response.data.message));
        }
    }

    return (
        <Box>
            <Wrapper>
                <h3>{habito.name}</h3>
                <p>Sequência atual: <SequenciaAtual realizado={habito.done} atual={habito.currentSequence} recorde={habito.highestSequence}>{habito.currentSequence} dias</SequenciaAtual></p>
                <p>Seu recorde: <SequenciaRecorde atual={habito.currentSequence} recorde={habito.highestSequence}>{habito.highestSequence} dias</SequenciaRecorde></p>
            </Wrapper>
            <div>
                <Checkbox onClick={() => statusHabito(habito.id)} realizado={habito.done}><ion-icon name="checkmark-outline"></ion-icon></Checkbox>
            </div>
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
    h3 {
        font-size: 20px;
        margin-bottom: 8px;
     }

    p {
        font-size: 13px;
    }
`;

const SequenciaAtual = styled.span`
    color: ${props => (props.atual !== 0 && (props.realizado || props.atual === props.recorde)) ? '#8FC549' : '#666666'}; 
`;

const SequenciaRecorde = styled.span`
    color: ${props => (props.atual !== 0 && props.atual === props.recorde) ? '#8FC549' : '#666666'};
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