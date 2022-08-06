import styled from "styled-components";
import SeletorDia from "./SeletorDia";
import { postDeletar } from "../../services/trackit";

export default function HabitoAtivo({habito}) {
    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    function deletarHabito(props) {
        postDeletar(props)
            .then(resposta => console.log(resposta.data))
            .catch(erro => console.log(erro.response.data.message));
    }

    return (
        <Box>
            <Titulo>
                <h3>{habito.name}</h3>
                <div>
                    <ion-icon name="trash-outline" onClick={() => deletarHabito(habito.id)} />
                </div>
            </Titulo>
            <WrapperDias>
                {dias.map((dia, index) => <SeletorDia key={index} dia={dia} />)}
            </WrapperDias>
        </Box>
    );
}

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