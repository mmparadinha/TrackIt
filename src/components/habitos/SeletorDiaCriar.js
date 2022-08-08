import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import NewHabit from "../context/NewHabit";

export default function SeletorDiaCriar({ enviando, diaNome, diasSelecionados, diaNumero }) {
    const [selected, setSelected] = useState(null);
    const { form, setForm } = useContext(NewHabit);

    useEffect(() => {
        for (let i = 0; i < diasSelecionados.length; i++) {
            if (diasSelecionados[i] === diaNumero) {
                setSelected(true);
                break;
            };
        };
    }, []);
    
    function diaEscolhido(dia) {
        if (dia !== diaNumero) {
            return true;
        };
    };

    function selecionarDia() {
        setSelected(!selected);
        if (selected) {
            setForm({ ...form, days: form.days.filter(diaEscolhido) });
            return;
        };
        setForm({ ...form, days: [...form.days, diaNumero] });
    };

    return (
        <ButtonDias disabled={enviando} selected={selected} onClick={selecionarDia}>{diaNome}</ButtonDias>
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
    cursor: pointer;
    :hover {
        opacity: 0.7;
    }
    &:disabled {
        cursor: default;
        opacity: 1;
    }
`;
