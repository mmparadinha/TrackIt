import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./context/UserContext";
import ProgressContext from "./context/ProgressContext";
import HabitsTodayContext from "./context/HabitsTodayContext";
import AllHabitsContext from "./context/AllHabitsContext";
import NewHabitContext from "./context/NewHabit";
import GlobalStyles from "./comuns/GlobalStyles";
import TelaLogin from "./acesso/TelaLogin";
import TelaCadastro from "./acesso/TelaCadastro";
import Logado from "./Logado";
import TelaHoje from "./hoje/TelaHoje";
import TelaHabitos from "./habitos/TelaHabitos";
import TelaHistorico from "./historico/TelaHistorico";

export default function App() {
  const [usuario, setUsuario] = useState({
    email: '',
    id: '',
    image: '',
    name: '',
    token: '',
    horario: ''
  });
  const [progresso, setProgresso] = useState(0);
  const [habitosHoje, setHabitosHoje] = useState(null);
  const [habitosTodos, setHabitosTodos] = useState(null);
  const [form, setForm] = useState({
    name: '',
    days: []
  });

  return (
    <>
      <GlobalStyles />
      <NewHabitContext.Provider value={{ form, setForm }}>
      <AllHabitsContext.Provider value={{ habitosTodos, setHabitosTodos }}>
      <HabitsTodayContext.Provider value={{ habitosHoje, setHabitosHoje }}>
        <ProgressContext.Provider value={{ progresso, setProgresso }}>
          <UserContext.Provider value={{ usuario, setUsuario }}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<TelaLogin />} />
                <Route path="/cadastro" element={<TelaCadastro />} />
                <Route path='/hoje' element={
                  <Logado>
                    <TelaHoje />
                  </Logado>
                } />
                <Route path='/habitos' element={
                  <Logado>
                    <TelaHabitos />
                  </Logado>
                } />
                <Route path='/historico' element={
                  <Logado>
                    <TelaHistorico />
                  </Logado>
                } />
              </Routes>
            </BrowserRouter>
          </UserContext.Provider>
        </ProgressContext.Provider>
      </HabitsTodayContext.Provider>
      </AllHabitsContext.Provider>
      </NewHabitContext.Provider>
    </>
  );
}