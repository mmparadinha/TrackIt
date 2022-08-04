import axios from 'axios';

const URL_BASE = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function postCadastrar(cadastro) {
  const promise = axios.post(`${URL_BASE}/auth/sign-up`, cadastro);
  return promise;
}

function postLogin(login) {
  const promise = axios.post(`${URL_BASE}/auth/login`, login);
  return promise;
}

//function 

export { postCadastrar, postLogin };