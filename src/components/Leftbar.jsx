import Groups from "./subcomponents/Groups";

export default function Leftbar(){
    return (
        <nav className="left-bar">

            <div className="signal"></div>

            <div className="flex-item">
                <div>
                    <a href="#!" className="side-icon hover2">
                        <i className="fa-solid fa-house"></i>
                        <font>Home</font>
                    </a>
            </div>
            <div>
                    <a href="https://www.facebook.com/robin.delacruz.353803" className="side-icon2 hover2">
                        <div className="circle-container2">
                            <img src="images/robin.png" alt=""/>
                        </div>
                        <font>Robin Dela Cruz</font>
                    </a>
                </div>
            </div>

            <div className="flex-item">
                <div>
                    <a href="#!" className="side-icon2 hover2">
                        <div className="circle-container">
                            <img src="images/compact.png" alt=""/>
                        </div>
                        <font>Menu</font>
                    </a>
                </div>
            <div>
                    <a href="#!" className="side-icon2 hover2">
                        <div className="circle-container2">
                            <img src="images/watch.png" alt=""/>
                        </div>
                        <font>Watch</font>
                    </a>
                </div>
                <div>
                    <a href="#!" className="side-icon2 hover2">
                        <div className="circle-container2">
                            <img src="images/marketplace.png" alt=""/>
                        </div>
                        <font>Marketplace</font>
                    </a>
                </div>
                <div>
                    <a href="#!" className="side-icon2 hover2">
                        <div className="circle-container2">
                            <img src="images/gaming.png" alt=""/>
                        </div>
                        <font>Gaming</font>
                    </a>
                </div>
            </div>

            <div className="flex-item">
                <div>
                    <a href="#!" className="side-icon2 hover2">
                        <div className="circle-container">
                            <img src="images/group.png" alt=""/>
                        </div>
                        <font>Groups</font>
                    </a>
                </div>
                <Groups image={"images/group-img-2.png"} title={"Bachelor of Science..."}/>
                <Groups image={"images/group-img-1.jpg"} title={"Programming Philippines"}/>
                <Groups image={"images/fp2.png"} title={"Bachelor of Science..."}/>
            </div>

            <div className="flex-item">
                <div>
                    <a href="#!" className="side-icon2 hover2">
                        <div className="circle-container">
                            <img src="images/link.png" alt=""/>
                        </div>
                        <font>Shortcuts</font>
                    </a>
                </div>
            </div>

            <div className="flex-item links">
                <small>
                    <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0">Privacy •</a>
                    <a href="">Terms •</a>
                    <a href="">Advertising •</a>
                    <a href="">Ad Choices •</a>
                    <a href="">Cookies •</a>
                    <span>More •</span>
                    <span>Meta &copy; 2022</span>
                </small>
                <br></br><br></br><br></br>
            </div>

        </nav>
    )
}
