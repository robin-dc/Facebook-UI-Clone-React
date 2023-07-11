import { useEffect, useRef } from "react";

export default function Loader({onLoaderFinished}){
    const preLoader = useRef()

    useEffect(() => {
        const timeout = setTimeout(() =>{
            preLoader.current.classList.add('hide-load');
            onLoaderFinished()
          }, 9620)

        return () => {
            clearTimeout(timeout)
        }
    }, [])

    return (
        <section className="flex-column loading" ref={preLoader}>
            <img src="images/facebook.gif" alt=""/>
            <div className="meta">
                <img src="images/meta.png" alt=""/>
                <p>Logging in....</p>
                <div>
                    <p>I do not own any logo, pictures, icons, and idea. This website is for educational purposes only.</p>
                    <p>Copyright Infringement not intended. All Rights Reserved to Facebook.</p>
                </div>
            </div>
        </section>
    )
}
