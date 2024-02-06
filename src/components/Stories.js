function Story(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={props.img} />
            </div>
            <div className="usuario">
                {props.user}
            </div>
        </div>
    )
}

const storiesData = [
    { user: '9gag', img: 'assets/img/9gag.svg' },
    { user: 'meowed', img: 'assets/img/meowed.svg' },
    { user: 'barked', img: 'assets/img/barked.svg' },
    { user: 'nathanwpylestrangeplanet', img: 'assets/img/nathanwpylestrangeplanet.svg' },
    { user: 'wawawicomics', img: 'assets/img/wawawicomics.svg' },
    { user: 'respondeai', img: 'assets/img/respondeai.svg' },
    { user: 'filomoderna', img: 'assets/img/filomoderna.svg' },
    { user: 'memeriagourmet', img: 'assets/img/memeriagourmet.svg' },
  ];

export default function Stories(){
    return (
        <div className="stories">
            {storiesData.map((elm, idx) => <Story img={elm.img} user={elm.user} key={idx}/>)}
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}