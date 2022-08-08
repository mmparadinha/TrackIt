import styled from "styled-components";

export default function SeletorDiaExistente({ diaNome, diasHabito, diaNumero }) {
    let marcado = false;

    for (let i = 0; i < diasHabito.length; i++) {
        if (diasHabito[i] === diaNumero) {
            marcado = true;
            break;
        };
    };

    return (
        <ButtonDias selected={marcado} onClick={() => alert('EM BREVE: ainda não é possível alterar um hábito já existente.\nSiga firme no planejado!!')}>{diaNome}</ButtonDias>
    );
};

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