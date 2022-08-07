import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { getListaHabitos, postHabitoNovo } from "../../services/trackit";
import SeletorDiaCriar from "./SeletorDiaCriar";
import HabitoAtivo from "./HabitoAtivo";
import Loading from "../comuns/Loading";
import AllHabitsContext from "../context/AllHabitsContext";
import NewHabit from "../context/NewHabit";

export default function TelaHabitos() {
    const [criar, setCriar] = useState(false);
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const { habitosTodos, setHabitosTodos } = useContext(AllHabitsContext);
    const {form, setForm} = useContext(NewHabit);
    const [enviando, setEnviando] = useState(false);


    console.log(form)

    useEffect(() => {
        getListaHabitos()
            .then(resposta => {
                setHabitosTodos(resposta.data)
                console.log(habitosTodos)
            })
            .catch(erro => console.log(erro.response.data.message));
    }, []);

    function preencherInput(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function criarHabito() {
        setEnviando(true);
        if (form.days.length !== 0 && form.name !== '') {
            postHabitoNovo(form)
            .then(() => {
                                getListaHabitos()
                                    .then(resposta => {
                                        setHabitosTodos(resposta.data);
                                        setCriar(false);
                                        setForm({
                                            name: '',
                                            days: []
                                        })
                                        setEnviando(false)
                                    })
                                    .catch(erro => console.log(erro.response.data.message));})
            .catch(erro => console.log(erro.response.data.message));
        } else {
            alert('Ei, não esqueça de selecionar o nome e os dias para acompanhar seu hábito!');
            setEnviando(false);
        }        
    }

    return (
        <Container>
            <Title>
                <h2>Meus hábitos</h2>
                <ion-icon name="add" onClick={() => setCriar(!criar)} />
            </Title>
            {criar && (<Box>
                <div>
                    <input
                        disabled={enviando}
                        required
                        name='name'
                        value={form.name}
                        onChange={preencherInput}
                        placeholder="nome do habito"
                    />
                    <WrapperDias>
                        {dias.map((dia, index) => <SeletorDiaCriar key={index} enviando={enviando} diaNome={dia} diasSelecionados={form.days} diaNumero={index}/>)}
                    </WrapperDias>
                </div>

                <Wrapper>
                    <span onClick={() => setCriar(false)}>Cancelar</span>
                    <button disabled={enviando} onClick={criarHabito}>{enviando ? <Loading /> : 'Salvar'}</button>
                </Wrapper>
            </Box>)}

            {habitosTodos !== null && habitosTodos.map((habito) => <HabitoAtivo key={habito.id} habito={habito} />)}

            {(habitosTodos !== null && habitosTodos.length === 0) &&  <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
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
        &:disabled {
            background-color: #F2F2F2;
            color: #D4D4D4;
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