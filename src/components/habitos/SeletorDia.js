import styled from "styled-components";
import { useState } from "react";

export default function SeletorDia({dia}) {
    const [selected, setSelected] = useState(false);

    function selecionarDia() {
        console.log(selected)
        setSelected(!selected);
    }

    return(
        <ButtonDias selected={selected} onClick={selecionarDia}>{dia}</ButtonDias>
    );
}

const ButtonDias = styled.button`
    color: ${props => props.selected ? '#FFFFFF' : '#DBDBDB'};;
    background-color: ${props => props.selected ? '#CFCFCF' : '#FFFFFF'};
    border: 1px solid ${props => props.selected ? '#CFCFCF' : '#D4D4D4'};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    font-size: 20px;
    cursor: pointer;
    :hover {
        opacity: 0.7;
    }
`;
