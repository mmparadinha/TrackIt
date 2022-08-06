import styled from "styled-components";

export default function TelaHistorico() {
    return (
        <Container>
            <h2>Histórico</h2>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </Container>
    );
}

const Container = styled.div`
    padding: 18px;
    font-size: 18px;
    color: #666666;

    h2 {
        margin-bottom: 17px;
        font-size: 23px;
        color: #126BA5;
    }
`;