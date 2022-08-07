import styled from "styled-components";
import { useState } from "react";

export default function SeletorDiaExistente({ diaNome, diasHabito, diaNumero }) {
    let marcado = false;

    //mais feio, porém mais eficiente
    for (let i = 0; i < diasHabito.length; i++) {
        //console.log(diaNome, diasHabito[i], diaNumero)
        if (diasHabito[i] === diaNumero) {
            //console.log('parei');
            marcado = true;
            break;
        };
    }

    //mais elegante, porém menos eficiente
    // diasHabito.filter(dia => filtrar(dia))

    // function filtrar(dia) {
    // console.log(diaNome, dia, diaNumero)
    //     if (dia === diaNumero) {
    //         console.log('parei');
    //         marcado = true;
    //         return
    //     }
    // }

    return (
        <ButtonDias selected={marcado} onClick={() => alert('EM BREVE: ainda não é possível alterar um hábito já existente.\nSiga firme no planejado!!')}>{diaNome}</ButtonDias>
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
`;
