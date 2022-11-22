import { useState } from "react";

export default function Usuario() {
    const imagemPadrao = "https://www.lacazmartins.com.br/wp-content/uploads/2017/05/sem-foto-oficial.png";
    const [nome, setNome] = useState("Anônimo");
    const [usuario, setUsuario] = useState("Anônimo");
    const [imagem, setImagem] = useState(imagemPadrao);
    

    function mudarNome(){
        setNome(prompt("Qual é o seu nome?"))
    }

    function mudarImagem(){
        setImagem(prompt("Escolha o link da sua imagem"))
    }

    return (
        <div className="teste">
            <User usuario={usuario} nome={nome} imagem={imagem} imagemPadrao={imagemPadrao} mudarNome={mudarNome} mudarImagem={mudarImagem}/>
        </div>
    )
}

function User(props) {
    return (
        <div data-test="user" className="perfil">
            <img onClick={props.mudarImagem} data-test="profile-image" src={!props.imagem ? props.imagemPadrao : props.imagem} />
            <p>
                <span className="negrito">@{props.nome.toLowerCase()}</span> <br />
                <span data-test="name" className="linha-fina">{props.nome}</span>
                <ion-icon className="edit-pencil" onClick={props.mudarNome} data-test="edit-name" name="pencil-outline"></ion-icon>
            </p>
        </div>
    )
}