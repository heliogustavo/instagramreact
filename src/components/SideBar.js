import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

export default function SideBar() {
    return (
        <div className="sidebar">
            <Usuario />
            <Sugestoes />
            <div className="infos">
                <p>
                    <span className="info"> Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                        Termos • Localizações • Contas mais relevantes • Hashtags •
                        Idioma </span>
                </p>
            </div>
            <div className="infos2">
                <p>
                    <span className="info">© 2021 INSTAGRAM DO FACEBOOK</span>
                </p>
            </div>
        </div>
    )
}