import styled from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DiaSessao from "./DiaSessao"

export default function Filmes() {
    const { idFilme } = useParams();
    const [error, setError] = useState(false)
    const [sessoes, setSessoes] = useState([])
    const [dias, setDias] =useState([])
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
        promise.then((res) => {
          console.log(res.data)
          setSessoes(res.data)
          setDias(res.data.days)
        })
    
        promise.catch((err) => {
          console.log(err.response.data)
          setError(true)
        })
      },[])

      if (error === true) {
        return <div>Erro na requisição! Atualize a página</div>
    }

 
    if (!error && sessoes === undefined  && dias === undefined) {
        return <div>Carregando...</div>
    }
    console.log(idFilme);
    return (
        <>
            <Caixatexto>
                <h2>Selecione o horário</h2>
            </Caixatexto>
            <CaixaDias>
                {dias.map((dia) => <DiaSessao semana= {dia.weekday} data= {dia.date} horarios= {dia.showtimes} />)}
            </CaixaDias>
            <Footer>
                <img src = {sessoes.posterURL}/>
                <h2>{sessoes.title} </h2>
            </Footer>
        </>    
    )

}

const Caixatexto = styled.div`
height: 100px;
width: 374px;
text-align: center;
align-items: center;
justify-content: center;
display: flex;
h2{
    font-size: 24px;
    font-family: 'Roboto';
    text-align: center;
    
    
}`;

const CaixaDias= styled.div`
height: 583px;
width: 374px;
overflow-y: scroll;`;

const Footer=styled.div`
height: 117px;
width: 375px;
margin-top: 10px;
position: relative;
align-items: center;
display: flex;
justify-content: center;
background-color: #9EADBA;
img{
    height: 72px;
    width: 48px;
    position: absolute;
    bottom: 23px;
    left: 18px;

}
h2{
    font-family: 'Roboto';
    font-size: 26px;
    text-align: center;


}`