import styled from "styled-components";
import { useNavigate } from "react-router-dom"


export default function Sucesso(props) {
    const navigate = useNavigate();

    return (
        <>
            <Caixatexto>
                    <h2>Pedido feito            com sucesso! </h2>
            </Caixatexto>
            <Caixainfos>
                    <h1> Filme e sessão</h1>
                    <h2>{props.movie.title} </h2>
                    <h2>{props.day.date} - {props.nome}</h2>
                    <h1> Ingressos</h1> 
                    {props.selecionados.map((value) => <h2>Assento {value%50}</h2>)}
                    <h1>Comprador</h1>  
                    <h2>Nome: {props.nomecomprador}</h2>
                    <h2>CPF: {props.cpf}</h2>  
                    <div><button onClick={() => {navigate("/") ;
                    document.location.reload(true);}}> Home </button></div>
            </Caixainfos>
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
    color: #247A6B;
    
    
}`;

const Caixainfos = styled.div`
width: 375px;
height: 400px;
display: flex;
flex-direction: column;
padding: 10px;
box-sizing: border-box;
div{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
button {
    margin-top: 20px;
    margin-bottom: 30px;
    width: 225px;
    height: 42px;
    color: white;
    font-family: 'Roboto';
    text-align: center;
    font-size: 18px;
    background-color: #E8833A;


}
h1{
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 24px;
    color: #293845;
    margin-top: 10px;
    margin-bottom: 10px;
    
}
h2{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 22px;
    color: #293845;
    margin-top: 10px;
    margin-bottom: 10px;
}`