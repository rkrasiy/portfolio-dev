import { useRef, useEffect } from 'react'

const useHuePencilCanvas = ( draw, options = {} ) => {
    const canvasRef = useRef(null);
    useEffect(()=>{
        const canvas = canvasRef.current;
        const context = canvas.getContext(options.context || '2d');
        let frameCount = 0;
      //  const dpr = window.devicePixelRatio;
        const dpr = 1;
        var cw = window.innerWidth;
        var ch = window.innerHeight;
        canvas.width = cw * dpr;
        canvas.height = ch * dpr;

        let animationFrameId;

        const render = ()=>{
            frameCount+=0.5
            context.clearRect(0, 0, canvas.width, canvas.height)
            //context.fillStyle = "rgba(0,0,0, 0.01)";
            //context.fillRect(0,0, canvas.width, canvas.height);
         
            draw(context, frameCount);
            animationFrameId = window.requestAnimationFrame(render)
        }

        render()

        return ()=>{
            window.cancelAnimationFrame(animationFrameId)
        }

    },[draw])

    return canvasRef
}

export default useHuePencilCanvas;