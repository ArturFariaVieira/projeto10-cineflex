import styled from "styled-components";
import Botao from "./Botao";
export default function DiaSessao(props) {
    const horarios = props.horarios;
    return(
    <>    
        <Texto>
            <h2> {props.semana} - {props.data}</h2>
        </Texto>
        <Botoes>
            {horarios.map((horario) => <Botao id= {horario.id} nome= {horario.name}/>)}
        </Botoes>
    </>
    
    )

}

const Texto = styled.div`
height: 36px;
width: 374px;
justify-content: center;
h2{
    font-family: 'Roboto';
    font-size: 20px;
    text-align:center;
}`;

const Botoes = styled.div`
height: 64px;
width: 374px;
display: flex;
justify-content: space-around;
button{
    height:43px;
    width: 83px;
    background-color: #E8833A;
    text-align: center;
    color: white;
    font-size: 18px;
    font-family: 'Roboto';
}`