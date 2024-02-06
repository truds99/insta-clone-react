import React from "react";


function Usuario(props) {
    return (
        <div className="usuario">
            <img src={props.img} />
            <div className="texto">
                <strong>catanacomics</strong>
                <span>
                    {props.user}
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}

function Sugestao(props) {

    const [seguir, setSeguir] = React.useState("Seguir");

    function toggleSeguir() {
        seguir === "Seguir" ? setSeguir("Seguindo") : setSeguir("Seguir");
    }

    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.img} />
                <div className="texto">
                    <div className="nome">{props.nome}</div>
                    <div className="razao">{props.razao}</div>
                </div>
            </div>

            <div className="seguir" onClick={toggleSeguir}>{seguir}</div>
        </div>
    )
}

const sugestaoData = [
    {
        img: "assets/img/bad.vibes.memes.svg",
        nome: "bad.vibes.memes",
        razao: "Segue você",
    },
    {
        img: "assets/img/chibirdart.svg",
        nome: "chibirdart",
        razao: "Segue você",
    },
    {
        img: "assets/img/razoesparaacreditar.svg",
        nome: "razoesparaacreditar",
        razao: "Novo no Instagram",
    },
    {
        img: "assets/img/adorable_animals.svg",
        nome: "adorable_animals",
        razao: "Segue você",
    },
    {
        img: "assets/img/smallcutecats.svg",
        nome: "smallcutecats",
        razao: "Segue você",
    },
];


export default function Sidebar() {
    return (
        <div className="sidebar">
            <Usuario user='Catana' img='assets/img/catanacomics.svg'/>

            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestaoData.map((elm, idx) => 
                <Sugestao
                img={elm.img} nome={elm.nome} razao={elm.razao} key={idx}/>)}
            </div>

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}