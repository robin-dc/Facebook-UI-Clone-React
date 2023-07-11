import { useEffect, useRef, useState } from "react"
import Toast from "./Toast"

export default function NewPostForm({setPost}){
    const [input, setInput] = useState('')
    const [toast, setToast] = useState(false)
    const toaster = useRef()

    useEffect(() => {
        if(toast){
            toaster.current.classList.add('active')
        }
    }, [toast])

    function handleSubmit(e){
        e.preventDefault()
        if(input === ''){
            setToast(true)
            setTimeout(function(){
                setToast(false)
            }, 3000)
        }
        else{
            setPost(input)
            setInput('')
        }
    }
    function removeToast(){
        setToast(false)
    }
    return (
        <form className="news-header flex-row border-bot" onSubmit={handleSubmit}>
            <div className="flex-row status">
                <div className="news-dp">
                    <img src="images/robin.png" alt=""/>
                </div>
                <div className="mind-input">
                    <input className="hover post-input"type="text" placeholder="Whats on your mind, Robin?" value={input} onChange={e => setInput(e.target.value)}/>
                </div>
                {toast && <Toast toaster={toaster} removeToast={removeToast}/>}
            </div>
        </form>
    )
}
