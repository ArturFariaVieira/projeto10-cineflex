import { Link } from "react-router-dom";
export default function Botao(props) {
    return(
        <Link to = {`/assentos/${props.id}`}>
        <button>{props.nome}</button>
        </Link>
    )
}