export default function Post(props) {

    return (
                <div data-test="post" className="primeiro-post">
                    <div className="titulo-post">
                        <div className="titulo-post-esquerda">
                            {props.imagemPerfil} <p> {props.nomePerfil} </p>
                        </div>
                        <div className="titulo-post-direita">
                            <p> ... </p>
                        </div>
                    </div>
                    <div className="foto">
                        {props.fotoPost}
                    </div>
                    <div className="rodape-post">
                        <div className="rodape-post-esquerda">
                            <ion-icon data-test="like-post" name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div className="rodape-post-direita">
                            <ion-icon data-test="save-post" name="bookmark-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="curtidas">
                        {props.imagemLike}
                        <p data-test="likes-number"> <span className="thin">Curtido por </span>
                            <span className="bold">{props.nomeLike}</span>
                            <span className="thin"> e </span>
                            <span className="bold">{props.qtdLike}</span> </p>
                    </div>
                    <div className="comentarios">
                        <div className="comentario">
                            <p> <span className="bold">{props.nomeComentario} </span>
                                <span className="thin">{props.comentario}</span> </p>
                        </div>
                        <div className="like-comentario">
                            <ion-icon name="heart-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="comente">
                        <div className="texto">
                            <input placeholder="Adicione um comentario..." className="campo-texto2" type="text" />
                        </div>
                        <div className="publicar">
                            <p> Publicar </p>
                        </div>
                    </div>
                </div>
    )
}