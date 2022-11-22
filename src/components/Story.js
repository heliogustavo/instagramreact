export default function Story(props) {
    return (
        <div className="cada-stories">
            <img src={props.imagem}/>
            <p>{props.texto}</p>
        </div>
    )
}