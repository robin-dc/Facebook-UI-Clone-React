export default function Friends({image, name}){
    return (
        <div className="flex-row hover2 ads friend contacts">
            <div className="friend-img">
                <img src={image} alt=""/>
            </div>
            <div className="flex-column friend-des">
                <div className="flex-row friend-name">
                    <p>{name}</p>
                </div>
            </div>
        </div>
    )
}
