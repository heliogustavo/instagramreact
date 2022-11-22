import Sugestao from "./Sugestao";

export default function Sugestoes() {
    const sugestoes = [
        {
            imagem: "./assets/img/badvibesmemes.png",
            texto: <p> <span className="linha1-perfil1">bad.vibes.memes</span><br /><span className="linha2-perfil1">Segue você</span></p>
        },
        {
            imagem: "./assets/img/chibirdart.png",
            texto: <p> <span className="linha1-perfil1">chibirdart</span><br /><span className="linha2-perfil1">Segue você</span></p>
        },
        {
            imagem: "./assets/img/razoesparaacreditar.png",
            texto: <p> <span className="linha1-perfil1">razoesparaacreditar</span><br /><span className="linha2-perfil1">Novo no Instagram</span></p>
        },
        {
            imagem: "./assets/img/adorableanimals.png",
            texto: <p> <span className="linha1-perfil1">adorable_animals</span><br /><span className="linha2-perfil1">Segue você</span></p>
        },
        {
            imagem: "./assets/img/smallcutecats.png",
            texto: <p> <span className="linha1-perfil1">smallcutecats</span> <br /><span className="linha2-perfil1">Segue você</span></p>
        }
    ]

    return (
        <>
            {sugestoes.map((sugestao) =>
                <Sugestao key={sugestao.imagem} imagem={sugestao.imagem} texto={sugestao.texto} />
            )}
        </>
    )
}