import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { postCadastrar } from '../../services/trackit';
import Loading from "../comuns/Loading";

export default function TelaCadastro() {
    const navigate = useNavigate();
    const [enviando, setEnviando] = useState(false)
    const [cadastro, setCadastro] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    });

    function atualizarInput(e) {
        setCadastro({ ...cadastro, [e.target.name]: e.target.value })
    }

    function cadastrar(e) {
        e.preventDefault();
        setEnviando(!enviando)

        postCadastrar(cadastro)
            .then(resposta => {
                console.log(resposta.data);
                setEnviando(!enviando);
                navigate('/');
            })
            .catch(erro => {
                alert(erro.response.data.message);
                setCadastro({
                    email: "",
                    name: "",
                    image: "",
                    password: ""
                });
                setEnviando(false);
            });
    }

    return (
        <Main>
            <img src="./assets/logo_TrackIt.png" alt='logo TrackIt' />
            <form onSubmit={cadastrar}>
                <Input
                    disabled={enviando}
                    required
                    type='email'
                    name='email'
                    value={cadastro.email}
                    onChange={atualizarInput}
                    placeholder='email'
                />
                <Input
                    disabled={enviando}
                    required
                    type='password'
                    name='password'
                    value={cadastro.password}
                    onChange={atualizarInput}
                    placeholder='senha'
                />
                <Input
                    disabled={enviando}
                    required
                    type='text'
                    name='name'
                    value={cadastro.name}
                    onChange={atualizarInput}
                    placeholder='nome'
                />
                <Input
                    disabled={enviando}
                    required
                    type='url'
                    name='image'
                    value={cadastro.image}
                    onChange={atualizarInput}
                    placeholder='foto'
                />
                <Button type='submit' disabled={enviando}>{enviando ? <Loading /> : 'Cadastrar'}</Button>
            </form>

            <Link to="/">Já tem uma conta? Faça login!</Link>
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