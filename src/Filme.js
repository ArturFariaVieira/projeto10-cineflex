import styled from "styled-components"

import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom"
export default function Filme(filmes) {
    
   
    

    return (
        <CaixaFilme>
            <Link to = {`/sessoes/${filmes.id}`}>
            <img src={filmes.poster}/>
            </Link>
        </CaixaFilme>
    )
}

const CaixaFilme= styled.div`
width: 145px;
heigth: 209px;

margin-left: 25px;
margin-bottom: 11px;
padding-bottom: 20px;
padding-left: 10px;
img{
    width: 129px;
    height: 193px;
    border-radius: 5px;
}`