import styled from "styled-components"
import React from "react"

export default function Seat(props) {
    //console.log(props)
    
    return (
        <>
            <Botaoreserva idassento = {props.idassento} selecionados ={props.selecionados} disponivel = {props.disponivel} onClick={() => props.gerencia(props.idassento, props.disponivel)} > {props.nome} </Botaoreserva>
        </>  
    )
}
const Botaoreserva = styled.button`
width: 26px;
height: 26px;
border-radius: 12px;
margin-left: 7px;
margin-bottom: 18px;
border: 1px solid #808F9D;
color: black;
font-family: 'Roboto';
font-size: 11px;
background-color: ${(props) => props.selecionados.includes(props.idassento)? '#1AAE9E': (props.disponivel === true? '#C3CFD9' : '#FBE192' ) };
border: 1px solid ${(props) => props.disponivel === true? '#808F9D' : (props.selecionados.includes(props.idassento)? '#0E7D71' : '#F7C52B' ) };`