import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import TelaLogin from "./TelaLogin";
import TelaCadastro from "./TelaCadastro";

export default function App() {
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaLogin />}/>
          <Route path="/cadastro" element={<TelaCadastro />}/>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}