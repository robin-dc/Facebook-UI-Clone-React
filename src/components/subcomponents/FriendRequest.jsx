import { useRef } from "react"

export default function FriendRequest({image, name, ago}){
    const container = useRef()

    function handleDelete(){
        container.current.remove()
    }

    return (
        <div className="flex-row hover2 ads friend-deactfp" ref={container}>
            <img src={image} alt=""/>
            <div className="flex-column friend-des">
                <div className="flex-row friend-name">
                    <p>{name}</p>
                    <small>{ago}</small>
                </div>
                <div className="flex-row friend-name btn">
                    <button>Confirm</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}
