import styled from "styled-components";
import SeletorDiaExistente from "./SeletorDiaExistente";
import { postDeletar, getListaHabitos } from "../../services/trackit";
import { useContext } from "react";
import AllHabitsContext from "../context/AllHabitsContext";

export default function HabitoAtivo({habito}) {
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const { setHabitosTodos} = useContext(AllHabitsContext);

    function deletarHabito(props) {
        if (window.confirm('Você realmente deseja excluir este hábito?')) {
            postDeletar(props)
                .then(() => {
                            getListaHabitos()
                                .then(resposta => {
                                    setHabitosTodos(resposta.data);
                                })
                                .catch(erro => console.log(erro));
                            })
                .catch(erro => console.log(erro));
        };
    };

    return (
        <Box>
            <Titulo>
                <h3>{habito.name}</h3>
                <div>
                    <ion-icon name="trash-outline" onClick={() => deletarHabito(habito.id)} />
                </div>
            </Titulo>
            <WrapperDias>
                {dias.map((dia, index) => <SeletorDiaExistente key={index} diaNome={dia} diasHabito={habito.days} diaNumero={index}/>)}
            </WrapperDias>
        </Box>
    );
};

const Box = styled.div`
    background-color: #FFFFFF;
    min-height: 91px;
    border-radius: 5px;
    padding: 14px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Titulo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: top;
    color: #666666;

    h3 {
        font-size: 20px;
    }
    
    ion-icon {
        font-size: 16px;
        cursor: pointer;
        :hover {
            opacity: 0.7;
        }
    }
`;

const WrapperDias = styled.div`
    display: flex;
    gap: 4px;
`;