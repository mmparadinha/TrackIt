import styled from "styled-components";
import { Link } from "react-router-dom";

export default function TelaLogin() {
    return (
        <Main>
            <img src="./assets/logo_TrackIt.png" alt='logo TrackIt' />
            <input placeholder='email'></input>
            <input placeholder='senha'></input>
            <button>Entrar</button>
            <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </Main>
    );
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    padding: 10px;
    gap: 6px;

    img {
        margin-top: 50px;
        margin-bottom: 33px;
        width: 180px;
        height: 180px;
    }

    input {
        width: 100%;
        height: 45px;
        padding: 10px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        font-weight: 400;
        font-size: 20px;
        color: #DBDBDB;
    }

    button {
        background-color: #52B6FF;
        color: #FFFFFF;
        font-size: 21px;
        width: 100%;
        height: 45px;
        margin-bottom: 25px;
        border-radius: 5px;
        border: none;
    }

    a {
        color: #52B6FF;
        font-size: 14px;
        text-align: center;
        
        &:hover {
            opacity: 0.8;
            text-decoration: underline;
        }
    }
`;