import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./context/UserContext";
import ProgressContext from "./context/ProgressContext";
import HabitsTodayContext from "./context/HabitsTodayContext";
import GlobalStyles from "./GlobalStyles";
import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import Logado from "./Logado";
import TelaHoje from "./TelaHoje";
import TelaHabitos from "./TelaHabitos";
import TelaHistorico from "./TelaHistorico";

export default function App() {
  const [usuario, setUsuario] = useState({
    email: '',
    id: '',
    image: '',
    name: '',
    password: '',
    token: ''
  });
  const [progresso, setProgresso] = useState(0);
  const [habitosHoje, setHabitosHoje] = useState(null)

  return (
    <>
      <GlobalStyles />
      <HabitsTodayContext.Provider value={{habitosHoje, setHabitosHoje}}>
      <ProgressContext.Provider value={{progresso, setProgresso}}>
      <UserContext.Provider value={{usuario, setUsuario}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TelaLogin />} />
            <Route path="/cadastro" element={<TelaCadastro />} />
            <Route path='/hoje' element={
              <Logado>
                <TelaHoje />
              </Logado>
            }/>
            <Route path='/habitos' element={
              <Logado>
                <TelaHabitos />
              </Logado>
            }/>
            <Route path='/historico' element={
              <Logado>
                <TelaHistorico />
              </Logado>
            }/>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
      </ProgressContext.Provider>
      </HabitsTodayContext.Provider>
    </>
  );
}