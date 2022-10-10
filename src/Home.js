import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import Styled from "styled-components"
import Filme from "./Filme"

export default function Home() {
    const [filmes, setFilmes] = useState(undefined);
    const [error, setError] = useState(false) 
    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
        const promise = axios.get(URL)
    
        promise.then((res) => {
          setFilmes(res.data) 
        })
    
        promise.catch((err) => {
        
          
          setError(true) 
        })
      }, [])   

    
        if (error === true) {
            return <div>Erro na requisição! Atualize a página</div>
        }
    
     
        if (!error && filmes === undefined) {
            return <div>Carregando...</div>
        }


    return (
        <CaixaHome>
            <Caixatexto>
                <h2>Selecione o filme</h2>
            </Caixatexto>
            
            <Caixafilmes>
                {filmes.map((filmes) => <Filme id= {filmes.id} poster= {filmes.posterURL}/>)}
            </Caixafilmes>
        </CaixaHome>
    )
}

const CaixaHome = Styled.div`
height: 810px;
width: 375px;
position: absolute;
top: 67px;
left: 0px;`;

const Caixafilmes = Styled.div`
height: 700px;
width: 375px;
box-sizing: border-box;
display: flex;
flex-wrap: wrap;
 `;

const Caixatexto = Styled.div`
height: 110px;
width: 374px;
text-align: center;
align-items: center;
justify-content: center;
display: flex;
h2{
    font-size: 24px;
    font-family: 'Roboto';
    text-align: center;
    
    
}
`;
