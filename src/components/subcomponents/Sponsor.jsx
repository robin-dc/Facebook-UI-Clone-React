export default function Sponsor({link, image, title, desc}){
    return (
        <a href={link} target="_blank">
            <div className="flex-row hover2 ads">
                <img src={image} alt=""/>
                <div className="ad-p">
                    <p>{title}</p>
                    <small>{desc}</small>
                </div>
            </div>
        </a>
    )
}
