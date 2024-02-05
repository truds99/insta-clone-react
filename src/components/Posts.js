import React from "react";

function TopoPost(props) { 
    return (
        <div class="topo">
            <div class="usuario">
                <img src={props.userImg} />
                {props.user}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}

function Post(props) {

    const[isLiked, setIsLiked] = React.useState(props.isLiked);

    function toggleLike(){
        setIsLiked(!isLiked);
    }


    return (
        <div class="post">
            <TopoPost userImg={props.userImg} user={props.user}/>

            <div class="conteudo">
                <img src={props.content} onClick={() => setIsLiked(true)}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        {isLiked ? <ion-icon name="heart" class="liked" onClick={toggleLike}></ion-icon> : <ion-icon name="heart-outline" onClick={toggleLike}></ion-icon>}
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.imgLikes} />
                    <div class="texto">
                        Curtido por <strong>{props.userLike}</strong> e <strong>outras {props.likes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

const postsData = [
    {
      user: 'meowed',
      userImg: 'assets/img/meowed.svg',
      content: 'assets/img/gato-telefone.svg',
      likes: '101.523',
      userLike: 'respondeai',
      imgLikes: 'assets/img/respondeai.svg',
      isLiked: false
    },
    {
      user: 'jane_doe',
      userImg: 'assets/img/barked.svg',
      content: 'assets/img/dog.svg',
      likes: 15,
      userLike: 'remboline',
      imgLikes: 'assets/img/adorable_animals.svg',
      isLiked: false
    },
]
export default function Posts() {
    return (
        <div class="posts">
            {postsData.map(elm => <Post 
            user={elm.user} userImg={elm.userImg} 
            content={elm.content} likes={elm.likes}
             userLike={elm.userLike} imgLikes={elm.imgLikes}/>)}
        </div>
    )
}