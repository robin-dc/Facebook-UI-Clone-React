import { useEffect, useRef, useState } from "react"

export default function Topbar(){
    const [isOpen, setIsOpen] = useState(false)
    const container = useRef()

    useEffect(()=> {
        container.current.classList.toggle('block')
    }, [isOpen])

    useEffect(()=> {
        function handleScroll(){
            container.current.classList.remove('block')
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    function handleClick(){
        setIsOpen(open => !open)
    }

    return (
        <header>
            <nav>
                <div>
                    <a href=""><img src="images/logo.png" alt=""/></a>
                </div>
                <div className="search hover">
                    <i className="fa-sharp fa-solid fa-magnifying-glass search_icon"></i>
                    <input type="text" placeholder="Search Facebook"/>
                </div>
                <div className="top-icon hover toggle-menu">
                    <a href="#!"><img src="images/bars.png" alt="" title="Menu"/></a>
                </div>
                <ul className="top-menu">
                    <li className="top-icon hover chats" data-chats="1">
                        <a href="#!"><img src="images/messenger.png" alt="" title="Messenger"/></a>
                        <div className="top-icon-des">
                            <p className="top-icon-p"><small>Messenger</small></p>
                        </div>
                    </li>
                    <li className="top-icon hover notif" data-notif="5">
                        <a href="#!"><img src="images/notif.png" alt="" title="Notifications"/></a>
                        <div className="top-icon-des">
                            <p className="top-icon-p"><small>Notifications</small></p>
                        </div>
                    </li>
                    <li className="top-icon profile-nav" onClick={handleClick} ref={container}>
                        <a><img src="images/robin.png" alt=""/></a>
                        <ul className="new">
                            <h3> What's New?    </h3>
                            <li>• Unlimited New Post</li>
                            <li>• Hide Posts</li>
                            <li>• Like Posts</li>
                            <li>• Delete Friend Request</li>
                            <li>• Stories Slider</li>
                            <li><small>Other functionalities are still under development, v2.0.0</small></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <ul className="nav-menu flex-row">
                <li><a href="#!"><i className="fa-sharp fa-solid fa-house"></i></a></li>
                <li><a href="#!"><img src="images/friend-mobile.png" alt=""/></a></li>
                <li><a href="#!"><img src="images/mes-mobile.png" alt=""/></a></li>
                <li><a href="#!"><i className="fa-regular fa-bell"></i></a></li>
                <li><a href="#!"><i className="bx bx-slideshow"></i></a></li>
                <li><a href="#!"><i className="bx bx-store"></i></a></li>
            </ul>
        </header>
    )
}
