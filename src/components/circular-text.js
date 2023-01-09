import {useRef, useEffect} from "react";

function CircularImage(){
    const imageRef = useRef();

    useEffect(() => {
        // Update the document title using the browser API
       
        document.onmousemove = handleMouseMove;
    },[]);

    const handleMouseMove = (e) => {

      //  console.log(e.clientX, e.clientY)
        imageRef.current.style.left = e.clientX + "px";
        imageRef.current.style.top = e.clientY + "px";
    }

    return (
        <div ref={imageRef} className="absolute top-0 left-0 animate-spin spin-slow w-24">
            <img src="circular-text.png"/>
        </div>
    )
}

export default CircularImage