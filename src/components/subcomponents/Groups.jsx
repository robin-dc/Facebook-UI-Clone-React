export default function Groups({image, title}){
    return (
        <div>
            <a href="#!" className="side-icon2 hover2">
                <div className="circle-container2 fp">
                    <img src={image} alt=""/>
                </div>
                <font>{title}</font>
            </a>
        </div>
    )
}
