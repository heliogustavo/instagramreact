export default function Sugestao(props) {

    return (
        <div className='sugestao'>
            <div className='perfil1'>
                <img src={props.imagem} />
                {props.texto}
            </div>
            <p> <span className="seguir">Seguir</span></p>
        </div>
    )
}