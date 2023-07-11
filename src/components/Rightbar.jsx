import FriendRequest from "./subcomponents/FriendRequest";
import Friends from "./subcomponents/Friends";
import Sponsor from "./subcomponents/Sponsor";

export default function RightBar(){
    return (
        <nav className="right-bar">
            <div>
                <div className="rightbar-title">
                    <p>Sponsored</p>
                </div>
                <Sponsor link={"https://fullscale.io/careers"} image={"images/ad1.png"} title={"Full Scale is Hiring"} desc={"fullscale.io"}/>
                <Sponsor link={"https://uniqlo.com"} image={"images/ad2"} title={"Shop UNIQLO Outerwear"} desc={"uniqlo.com"}/>
            </div>
            <div className="div-friend">
                <div className="rightbar-title">
                    <div className=" flex-row friend-req">
                        <p>Friend Request</p>
                        <small><a href="#!">See all</a></small>
                    </div>
                </div>
                <FriendRequest image={"images/c1.png"} name={"Facebook User"} ago={"6d"}/>
            </div>

            <div className="div">
                <div className="rightbar-title">
                    <div className=" flex-row friend-req contact-title">
                        <p>Contacts</p>
                        <img src="images/dotmen.png" alt=""/>
                    </div>
                </div>
                <Friends image={"images/c3.png"} name={"Mark Zuckerberg"}/>
                <Friends image={"images/r2.png"} name={"Bill Gates"}/>
                <Friends image={"images/c9.png"} name={"Elon Musk"}/>
                <Friends image={"images/r3.png"} name={"Jeff Bezos"}/>
                <Friends image={"images/fp8.png"} name={"Steve Jobs"}/>
                <Friends image={"images/jennie.jpg"} name={"Jennie Kim"}/>
                <Friends image={"images/sp3.png"} name={"Kevin Powell"}/>
                <Friends image={"images/suzy.jpg"} name={"Bae Suzy"}/>
                <Friends image={"images/coco.jpg"} name={"Coco"}/>
                <Friends image={"images/c8.png"} name={"Fireship io"}/>
                <Friends image={"images/nanno.jpg"} name={"Kitty Chicha"}/>

                <div className="div">
                    <div className="rightbar-title">
                        <div className=" flex-row friend-req contact-title">
                            <p>Group conversations</p>
                        </div>
                    </div>
                    <Friends image={"images/icreate.jpg"} name={"iCreate Developers"}/>
                    <Friends image={"images/coeng.jpg"} name={"BSCPE"}/>
                    <Friends image={"images/scrimba.png"} name={"Scrimba Community"}/>
                    <Friends image={"images/c11.png"} name={"Freecodecamp Org"}/>
                </div>
            </div>
        </nav>
    )
}
