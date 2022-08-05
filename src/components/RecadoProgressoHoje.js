import ProgressContext from "./context/ProgressContext";
import { useContext } from "react";
import styled from "styled-components";

export default function RecadoProgressoHoje() {
    const { progresso } = useContext(ProgressContext);

    return (
        <Wrapper progresso={progresso}>
            {progresso === 0 ? 'Nenhum hábito concluído ainda' : `${progresso}% dos habitos concluídos`}
        </Wrapper>
    )
}

const Wrapper = styled.p`
    font-size: 18px;
    color: ${props => props.progresso === 0 ? '#BABABA' : '#8FC549'};
`;