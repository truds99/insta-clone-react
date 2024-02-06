import React from "react";

function TopoPost({userImg, user}) { 
    return (
        <div className="topo">
            <div className="usuario">
                <img src={userImg} />
                {user}
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>
    )
}

function Post({
    isLiked, likes, userImg, user, content, imgLikes, userLike 
}) {

    const[liked, setLiked] = React.useState(isLiked);

    const[numberOfLikes, setNumberOfLikes] = React.useState(likes);

    function toggleLike(a){
        if (a === 1){
            setLiked(true);
            if(!liked) {
                setNumberOfLikes(numberOfLikes + 1);
            }
        }
        else {
            setLiked(!liked);
            liked ? setNumberOfLikes(numberOfLikes - 1) : setNumberOfLikes(numberOfLikes + 1);
        }
    }


    return (
        <div className="post">
            <TopoPost userImg={userImg} user={user}/>

            <div className="conteudo">
                <img src={content} onClick={() => toggleLike(1)}/>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        {liked ? <ion-icon name="heart" class="liked" onClick={() => toggleLike(2)}></ion-icon> : <ion-icon name="heart-outline" onClick={() => toggleLike(2)}></ion-icon>}
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={imgLikes} />
                    <div className="texto">
                        Curtido por <strong>{userLike}</strong> e <strong>outras {numberOfLikes} pessoas</strong>
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
      likes: 101,
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
        <div className="posts">
            {postsData.map((elm, idx) => <Post 
            user={elm.user} userImg={elm.userImg} 
            content={elm.content} likes={elm.likes} key={idx}
            userLike={elm.userLike} imgLikes={elm.imgLikes}/>)}
        </div>
    )
}