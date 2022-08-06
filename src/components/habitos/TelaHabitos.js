import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { getListaHabitos, postHabitoNovo } from "../../services/trackit";
import SeletorDia from "./SeletorDia";
import HabitoAtivo from "./HabitoAtivo";
import AllHabitsContext from "../context/AllHabitsContext";

export default function TelaHabitos() {
    const [criar, setCriar] = useState(false);
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const { habitos, setHabitos } = useContext(AllHabitsContext);

    useEffect(() => {
        getListaHabitos()
            .then(resposta => {
                setHabitos(resposta.data)
                console.log(habitos)
            })
            .catch(erro => console.log(erro.response.data.message));
    }, []);

    function criarHabito() {
        console.log('bora criar')
        let body = {
            name: 'Tomar whey com 3 ovos crus e correr ao redor de Konoha 50x com as caneleiras cheias',
            days: [1, 3, 5]
        }

        postHabitoNovo(body)
            .then(resposta => console.log(resposta.data))
            .catch(erro => console.log(erro.response.data.message));
    }

    return (
        <Container>
            <Title>
                <h2>Meus hábitos</h2>
                <ion-icon name="add" onClick={() => setCriar(!criar)} />
            </Title>
            {criar && (<Box>
                <div>
                    <input placeholder='nome do hábito'></input>
                    <WrapperDias>
                        {dias.map((dia, index) => <SeletorDia key={index} dia={dia} />)}
                    </WrapperDias>
                </div>

                <Wrapper>
                    <span onClick={() => setCriar(false)}>Cancelar</span>
                    <button onClick={criarHabito}>Salvar</button>
                </Wrapper>
            </Box>)}

            {habitos !== null && habitos.map((habito) => <HabitoAtivo key={habito.id} habito={habito} />)}

            {habitos !== null && <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
        </Container>
    );
}

const Container = styled.div`
    padding: 18px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
        margin-top: 18px;
        color: #666666;
    }
`;

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    h2 {
        font-size: 23px;
        color: #126BA5;
    }

    ion-icon {
        background-color: #52B6FF;
        border-radius: 5px;
        font-size: 40px;
        color: #FFFFFF;
        cursor: pointer;
        :hover {
            opacity: 0.7;
        }
    }
`;

const Box = styled.div`
    background-color: #FFFFFF;
    min-height: 180px;
    border-radius: 5px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    input {
        border: 1px solid #d4d4d4;
        background-color: #FFFFFF;
        height: 45px;
        width: 100%;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 10px;
        font-size: 20px;
        ::placeholder {
            color: #DBDBDB;
        }
    }
`;

const WrapperDias = styled.div`
    display: flex;
    gap: 4px;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 23px;
    font-size: 16px;

    span {
        color: #52B6FF;
        cursor: pointer;
        :hover {
            opacity: 0.7;
        }
    }

    button {
        background-color: #52B6FF;
        width: 84px;
        height: 35px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        :hover {
            opacity: 0.7;
        }
    }
`;