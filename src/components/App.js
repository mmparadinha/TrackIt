import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";
import TelaHoje from "./TelaHoje";

export default function App() {
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaLogin />}/>
          <Route path="/cadastro" element={<TelaCadastro />}/>
          <Route path='/hoje' element={<TelaHoje />}/>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}