import { useRef, useEffect, useState } from 'react'

const useScroll = () => {
    const elem = useRef(null);
    const [ pos, setPos ] = useState(0);
    const [ step, setStep ] = useState(-36)

    function refreshStyle() {
        let max = elem.current.clientHeight - 36;
        if(pos + step <= -max || pos + step > -36) setStep(step * -1)
        setPos(pos + step)
    }

    useEffect(()=>{
        const elDom = elem.current;
        elDom.style.transform = `translateY(${pos}px)`;

        const timerId = setInterval(refreshStyle, 2500);
        return function cleanup() {
            clearInterval(timerId);
        };
    
    },[pos])

        

    return elem

}

export default useScroll;