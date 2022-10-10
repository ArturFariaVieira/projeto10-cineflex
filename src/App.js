import { BrowserRouter, Routes, Route  } from "react-router-dom"
import { useState } from "react"
import Home from "./Home"
import Filmes from "./Filmes"
import Sessao from "./Sessao"
import Sucesso from "./Sucesso"
import Styled from "styled-components"
import Seta from "./arrow-back-outline.svg"
import { ResetCss } from "./resetcss"


export default function App() {
    const [filme, setFilme] =useState([])
    const [name, setName] = useState("");
    const [dia, setDia] = useState("");
    const [selecionados, setSelecionados] = useState([])
    
    const [namecomprador, setNamecomprador] = useState("")
    const [CPF, setCPF] = useState("")

  

  let funcao = function gerenciaassento(assentoclicado, disponivel){
      let novoselecionados = [...selecionados]
      if(disponivel === false ){
        alert("O assento selecionado não está disponível")
        
        return 
        
      }
      if(!selecionados.includes(assentoclicado)){
        novoselecionados.push(assentoclicado)
        setSelecionados(novoselecionados)
        return
        
      }
      if(selecionados.includes(assentoclicado)){
        novoselecionados = novoselecionados.filter((assento) => assento !== assentoclicado);
        setSelecionados(novoselecionados);
        return
        
      }
      
    }
  return (
    <BrowserRouter> 
    <ResetCss/>   
      <Header>
        <Caixaseta>
            <img src={Seta}/>
        </Caixaseta>
        <h2>CINEFLEX</h2>
      </Header >
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sessoes/:idFilme" element={<Filmes />}/>
        <Route path="/assentos/:idSessao" element={<Sessao movie = {filme} setmovie = {setFilme} nome = {name} setnome = {setName} day={dia} setday ={setDia} selecionados ={selecionados} gerencia = {funcao} nomecomprador={namecomprador} setnomecomprador={setNamecomprador} cpf = {CPF} setCPF = {setCPF} />}/>
        <Route path="/sucesso" element={<Sucesso movie = {filme} setmovie = {setFilme} nome = {name} setnome = {setName} day={dia} setday ={setDia} selecionados ={selecionados} gerencia = {funcao} nomecomprador={namecomprador} setnomecomprador={setNamecomprador} cpf = {CPF} setCPF = {setCPF} />}/>
      </Routes>
    </BrowserRouter>
  )
  
}

const Header = Styled.div`
position: relative;
background-color: #C3CFD9;
width: 375px;
height: 67px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
h2{
    text-align: center;
    font-size: 34px;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
}`;

const Caixaseta = Styled.div`
display: none;
height: 67px;
width: 67px;
position: absolute;
top: 15px;
left: 15px;
img{
    height: 30px;
    width: 30px;
    
}`