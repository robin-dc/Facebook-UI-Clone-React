import { useRef, useState, useEffect } from "react"

export default function PhotoPost({dp, name, ago, likes, comments, shares, desc, post, reactType, border, html, key, newPost}){
    const [isLike, setIsLike] = useState(false)
    const [isMenu, setIsMenu] = useState(false)
    const [isDelete, setDelete] = useState(false)

    const likeBtn = useRef()
    const reactQuantity = useRef()
    const dotMenu = useRef()
    const container = useRef()

    useEffect(() => {
        if(isLike){
            likeBtn.current.classList.toggle('active')
            reactQuantity.current.classList.toggle('activequan')
        }
    }, [isLike])

    useEffect(() => {
        if(isMenu){
            dotMenu.current.classList.toggle('active')
        }
    }, [isMenu])

    useEffect(() => {
        if (isDelete) {
            container.current.remove()
        }
    }, [isDelete])

    useEffect(() => {
        const handleScroll = () => {
            if(dotMenu.current.classList.contains('active')){
                dotMenu.current.classList.remove('active')
            }
        };
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])


    function handleLike(){
        setIsLike(like => !like)
    }
    function handleMenu(){
        setIsMenu(menu => !menu)
    }
    function handleDelete(){
        setDelete(del => !del)
    }

    const style = {
        width: newPost ? "100%" : ""
    }
    return (
        <>
        <div className="newsfeed flex-column" ref={container} key={key} style={style}>
            <div className="news-header flex-row paragraph-box">
                <div className="flex-row">
                    <div className="news-dp">
                        <img src={dp} alt=""/>
                    </div>
                    <div className="dp-name">
                        <p><strong>{name}</strong></p>
                        <div className="flex-row under-name">
                            <small>{ago} •</small><img src="images/globe.png" alt="" className="news-icon"/>
                        </div>
                    </div>
                </div>
                <div className="dot-menu hover2" ref={dotMenu} onClick={handleMenu}>
                    <img src="images/dotmenu.png" alt="" className="news-icon dot"/>
                    <div className="triangle"></div>
                    <small className="del-post" onClick={handleDelete}><i className="fa-solid fa-x"></i>Hide Post</small>
                </div>
            </div>
            <div className="paragraph">
                {
                html ? (
                     <p dangerouslySetInnerHTML={{ __html: desc }}></p>
                ): (
                    newPost ? (
                        <p className="post-par">
                            {desc}
                        </p>
                     ) : (
                        <p>
                            {desc}
                        </p>
                     )
                )
                }
            </div>
            <div className="post">
                {
                    newPost ? (
                        ""
                    ) : (
                        border ? (
                            <div className="pic-container aespa flex-row">
                                <img src={post} alt=""/>
                            </div>
                        ) :
                        (
                            <div className="pic-container">
                                <img src={post} alt=""/>
                            </div>
                        )
                    )
                 }

                <div className="pic-comment"></div>
            </div>
            <div className="news-footer flex-column">
                <div className="flex-row likes" >
                    <div className="flex-row" >
                        <img src={reactType} alt=""/>
                        <p className="react-quan" ref={reactQuantity}>{likes}</p>
                    </div>
                    <div className="flex-row comments">
                        <p>{comments} Comments</p>
                        <p>{shares} Shares</p>
                    </div>
                </div>
                <div className="flex-row interact mind share">
                    <div className="flex-row interact-icons like-container" id="com-react" ref={likeBtn} onClick={handleLike}>
                        <div className="like-icon">

                        </div>
                        <p className="like">Like</p>
                    </div>
                    <div className="flex-row interact-icons comment" id="com-react">
                        <img src="images/comment.png" alt=""/>
                        <p>Comment</p>
                    </div>
                    <div className="flex-row interact-icons" id="com-react">
                        <img src="images/share.png" alt=""/>
                        <p>Share</p>
                    </div>
                </div>
            </div>
        </div>
        </>

    )
}
