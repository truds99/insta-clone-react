import React from "react";


function User({img, user}) {

    const [userName, setUserName] = React.useState("catanacomics");
    const [userPhoto, setUserPhoto] = React.useState(img);

    function editName() {
        let newName = prompt("Digite seu novo nome do usuário");
        if (newName) {
            setUserName(newName);
        }
    }

    function editPhoto() {
      let newPhoto = prompt("Digite a URL da nova foto");
      if (newPhoto) {
        setUserPhoto(newPhoto);
      }
    }

    return (
      <div className="usuario">
        <img src={userPhoto} onClick={editPhoto} />
        <div className="texto">
          <strong>{userName}</strong>
          <span>
            {user}
            <ion-icon name="pencil" onClick={editName}></ion-icon>
          </span>
        </div>
      </div>
    );
}

function Suggestion({img, nome, razao}) {

    const [seguir, setSeguir] = React.useState("Seguir");

    function toggleSeguir() {
        seguir === "Seguir" ? setSeguir("Seguindo") : setSeguir("Seguir");
    }

    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={img} />
                <div className="texto">
                    <div className="nome">{nome}</div>
                    <div className="razao">{razao}</div>
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

function Suggestions () {

    return (
      <>
        {sugestaoData.map((elm, idx) => (
        <Suggestion img={elm.img} nome={elm.nome} razao={elm.razao} key={idx} />
        ))}
      </>
    );
}

export default function Sidebar() {
    return (
        <div className="sidebar">
            <User user='Catana' img='assets/img/catanacomics.svg'/>

            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                <Suggestions />
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