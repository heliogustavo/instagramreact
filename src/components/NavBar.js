export default function NavBar() {
    return (
        <div className="container-cabecalho">
            <div className="cabecalho">
                <div className="cabecalho-esquerda">
                    <div className="icone-instagram">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </div>
                    <div className="linha1"></div>
                    <div className="logo">
                        <img src="./assets/img/logo.png" />
                    </div>
                </div>
                <div className="cabecalho-centro">
                    <input placeholder="Pesquisar" className="campo-texto" type="text" />
                </div>
                <div className="cabecalho-direita">
                    <div className="icone-direct">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div className="icone-pessoas">
                        <ion-icon name="compass-outline"></ion-icon>
                    </div>
                    <div className="icone-atividades">
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div className="icone-perfil">
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    )
}