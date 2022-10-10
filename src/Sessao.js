import styled from "styled-components"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Seat from "./Seat"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Sessao(props) {
    const idSessao = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState(false)
    const [assentos, setAssentos] = useState([])
    let enviar = function enviardados(e){
        e.preventDefault();
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";
        const body = {
          ids: props.selecionados,
          name: props.nomecomprador,
          cpf: props.cpf
        }
    
        let promise = axios.post(URL, body);
    
        promise.then(() => {
        navigate("/sucesso")})
        promise.catch(() => alert("nao deu certo"))
      }



    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao.idSessao}/seats`)
        promise.then((res) => {
            setAssentos(res.data.seats)
            
            props.setmovie(res.data.movie)
            props.setnome(res.data.name)
            props.setday(res.data.day)
        })

        promise.catch((err) => {
            setError(true)
        })
    }, [])

    if (error === true) {
        return <div>Erro na requisição! Atualize a página</div>
    }


    if (!error && assentos === [] && props.movie === []) {
        return <div>Carregando...</div>
    }
   


    return (
        <>
            <Caixatexto>
                <h2>Selecione o(s) assento(s) </h2>
            </Caixatexto>
            <Botoesreserva>
                {assentos.map((seat) => <Seat idassento={seat.id} nome={seat.name} disponivel={seat.isAvailable} gerencia={props.gerencia} selecionados={props.selecionados} />)}
            </Botoesreserva>
            <Caixalegenda>
                <Botoeslegenda>
                    <Buttonlegenda disabled={true} color={"green"}></Buttonlegenda>
                    <Buttonlegenda disabled={true} color={"grey"}></Buttonlegenda>
                    <Buttonlegenda disabled={true} color={"yellow"}></Buttonlegenda>
                </Botoeslegenda>
                <Textolegenda>
                    <h2>Selecionado</h2>
                    <h2>Disponível</h2>
                    <h2>Indisponível</h2>
                </Textolegenda>
            </Caixalegenda>
            <Caixaformulario>
                <form onSubmit={enviar}>
                    <label htmlFor="name" >Nome do comprador:</label>
                    <input
                        id="name"
                        placeholder = "Digite seu nome"
                        value={props.nomecomprador}
                        onChange={e => props.setnomecomprador(e.target.value)}
                        type="text"
                        required
                    />
                    <label htmlFor="CPF" >CPF do comprador:</label>
                    <input                        
                        id="CPF"
                        placeholder = "Digite seu CPF"
                        value={props.cpf}
                        onChange={e => props.setCPF(e.target.value)}
                        type="text"
                        required
                    />
                    <button type="submit" >Reservar Assentos</button>
                </form>
            </Caixaformulario>
                
            
            <Footer>
                <img src={props.movie.posterURL} />
                <h2>{props.movie.title} </h2>
                <h2>{props.day.weekday} - {props.nome}</h2>
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

const Footer = styled.div`
height: 117px;
width: 375px;
margin-top: 10px;
position: relative;
align-items: center;
display: flex;
flex-direction: column;
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
    line-height: 27px;
    margin-left: 20px;
    margin-bottom: 10px;
    font-family: 'Roboto';
    font-size: 20px;
    text-align: center;
    max-width: 250px;


}`;

const Textolegenda = styled.div`
height: 16px;
width: 375px;
display: flex;
justify-content: space-around;
h2{
    font-family: 'Roboto';
    font-size: 13px;
    color: #4E5A65;
}`;

const Caixaformulario = styled.div`
height: 280px;
width: 375px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
box-sizing: border-box;
form{ 
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
label{
    line-height: 30px;
    font-size: 16px;
    font-family: 'Roboto';
}
input{
    width: 327px;
    height: 51px;
    font-family: 'Roboto';
    font-style: italic;
    
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
`

const Botoeslegenda = styled.div`
height: 34px;
width: 375px;
display: flex;
justify-content: space-around;`;

const Caixalegenda = styled.div`
height: 50px;
width: 375px;`;

const Botoesreserva = styled.div`
width: 375px;
height: auto;
padding: 17px;
box-sizing: border-box;`

const Buttonlegenda = styled.button`
width: 26px;
height: 26px;
border-radius: 12px;
background-color: ${(props) => props.color === "green" ? '#1AAE9E' : (props.color === "grey" ? '#C3CFD9' : '#FBE192')};
border: 1px solid ${(props) => props.color === "green" ? '#0E7D71' : (props.color === "grey" ? '#7B8B99' : '#F7C52B')}; `