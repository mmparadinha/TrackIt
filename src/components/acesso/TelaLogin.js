import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { postLogin } from "../../services/trackit";
import Loading from "../comuns/Loading";
import UserContext from "../context/UserContext";

export default function TelaLogin() {
    const [entrando, setEntrando] = useState(false);
    const navigate = useNavigate();
    const {setUsuario} = useContext(UserContext);
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

    function atualizarInput(e) {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    function entrar(e) {
        e.preventDefault();
        setEntrando(true)

        postLogin(login)
            .then(resposta => {
                localStorage.setItem('trackit', JSON.stringify({token: resposta.data.token, horario: +new Date()}));
                setUsuario({
                    email: resposta.data.email,
                    id: resposta.data.id,
                    image: resposta.data.image,
                    name: resposta.data.name,
                    password: resposta.data.password,
                    token: resposta.data.token
                });
                console.log(resposta.data)
                navigate('/hoje');
                })
            .catch(erro => {
                alert('Não foi possível logar, tente novamente');
                console.log(erro, 'erro');
                setLogin({
                    email: "",
                    password: "",
                });
                setEntrando(false);
            });
    }

    return (
        <Main>
            <img src="./assets/logo_TrackIt.png" alt='logo TrackIt' />
            <form onSubmit={entrar}>
                <Input
                    disabled={entrando}
                    required
                    type='email'
                    name='email'
                    value={login.email}
                    onChange={atualizarInput}
                    placeholder='email'
                />
                <Input
                    disabled={entrando}
                    required
                    type='password'
                    name='password'
                    value={login.password}
                    onChange={atualizarInput}
                    placeholder='senha'
                />
                <Button type='submit' disabled={entrando}>{entrando ? <Loading /> : 'Entrar'}</Button>
            </form>

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

    img {
        margin-top: 50px;
        margin-bottom: 33px;
        width: 180px;
        height: 180px;
    }

    a {
        color: #52B6FF;
        font-size: 14px;
        text-align: center;

        &:hover {
            opacity: 0.7;
            text-decoration: underline;
        }
    }
`;

const Input = styled.input`
    width: 100%;
    height: 45px;
    padding: 10px;
    margin: 3px 0;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    font-weight: 400;
    font-size: 20px;

    &::placeholder {
        color: #DBDBDB;
    }

    &:disabled {
        background-color: #F2F2F2;
        color: #D4D4D4;
    }
`;

const Button = styled.button`
    background-color: #52B6FF;
    color: #FFFFFF;
    font-size: 21px;
    width: 100%;
    height: 45px;
    margin-top: 3px;
    margin-bottom: 25px;
    border-radius: 5px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }

    &:disabled {
        opacity: 0.7;
        cursor: default;
    }
`;