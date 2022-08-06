import ProgressContext from "../context/ProgressContext";
import { useContext } from "react";
import styled from "styled-components";

export default function RecadoProgressoHoje() {
    const { progresso } = useContext(ProgressContext);

    if (isNaN(progresso)) {
        return (
            <Wrapper progresso={progresso}>
                {'Você não possui hábitos para hoje'}
            </Wrapper>
        );
    } else {
        return (
            <Wrapper progresso={progresso}>
                {progresso === 0 ? 'Nenhum hábito concluído ainda' : `${progresso.toFixed(0)}% dos habitos concluídos`}
            </Wrapper>
        );
    }
}

const Wrapper = styled.p`
    font-size: 18px;
    margin-bottom: 28px;
    color: ${props => (props.progresso === 0 || isNaN(props.progresso)) ? '#BABABA' : '#8FC549'};
`;