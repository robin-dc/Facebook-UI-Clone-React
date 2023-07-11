import { useRef, useState, useEffect } from "react";

export default function Myday(){
    const [isScrollEnd, setIsScrollEnd] = useState(false)
    const container = useRef()
    const btnNext = useRef()
    const btnPrev = useRef()

    useEffect(() => {
        if(isScrollEnd){
            container.current.scrollTo(500, 0)
            btnNext.current.classList.add('active')
            if(btnPrev.current.classList.contains('active')){
                btnPrev.current.classList.remove('active')
            }
        }
        else{
            container.current.scrollTo(0, 0)
            btnPrev.current.classList.add('active')
            if(btnNext.current.classList.contains('active')){
                btnNext.current.classList.remove('active')
            }
        }
    }, [isScrollEnd])


    useEffect(() => {
        function handleScroll() {
          const currentScrollWidth = container.current.scrollLeft;

          if (currentScrollWidth > 200) {
            btnNext.current.classList.add('active')
            if(btnPrev.current.classList.contains('active')){
                btnPrev.current.classList.remove('active')
            }
          } else {
            btnPrev.current.classList.add('active')
            if(btnNext.current.classList.contains('active')){
                btnNext.current.classList.remove('active')
            }
          }
        }

        container.current.addEventListener("scroll", handleScroll);

        return () => {
          container.current.removeEventListener("scroll", handleScroll);
        };
      }, []);

    function scroll(){
        setIsScrollEnd(mode => !mode)
    }

    return (
        <>
        <div className="stories-scroll" ref={container}>
            <ul className="flex-row stories-container">
                <div className="stories">
                    <div className="flex-column story create-story"></div>
                    <div className="create-container flex-row">
                        <div className="plus-story top-icon"><i className="fa fa-plus"></i></div>
                        <p><small>Create story</small></p>
                    </div>
                </div>
                <div className="stories">
                    <div className="flex-column story story-1"></div>
                    <p><small>Fireship io</small></p>
                </div>
                <div className="stories">
                    <div className="flex-column story story-2"></div>
                    <p><small>Pham Hanni</small></p>
                </div>
                <div className="stories">
                    <div className="flex-column story story-3"></div>
                    <p><small>Kim Minji</small></p>
                </div>
                <div className="stories">
                    <div className="flex-column story story-4"></div>
                    <p><small>Kang Haerin</small></p>
                </div>
                <div className="stories">
                    <div className="flex-column story story-5"></div>
                    <p><small>Mark Zuckerberg</small></p>
                </div>
                <div className="stories">
                    <div className="flex-column story story-6"></div>
                    <p><small>Jennie Kim</small></p>
                </div>
                <div className="stories">
                    <div className="flex-column story story-7"></div>
                    <p><small>Bae Suzy</small></p>
                </div>
            </ul>
        </div>

        <div className="top-icon hover2 btn-prev" ref={btnPrev} onClick={scroll}>
            <a><img src="images/arrow.png" alt=""/></a>
        </div>
        <div className="top-icon hover2 btn-next" onClick={scroll} ref={btnNext}>
            <a><img src="images/arrow.png" alt=""/></a>
        </div>
    </>
    )
}
