import { useRef, useEffect } from 'react'

const useTextCanvas = (draw, options = {}) => {
    const canvasRef = useRef(null);
    useEffect(()=>{
        const canvas = canvasRef.current;
        const context = canvas.getContext(options.context || '2d');

      //  const dpr = window.devicePixelRatio;
        const dpr = 1;
        var cw = window.innerWidth;
        var ch = window.innerHeight;
        canvas.width = cw * dpr;
        canvas.height = ch * dpr;
     //   context.scale(dpr, dpr);

        // let frameCount = 0;
        let animationFrameId;
        let textParticles = [];

        if(options.text){
            context.fillStyle = "white";
            context.font = `20px sans-serif`;
            // context.fillText( options.text, canvas.width/2, canvas.height/2, canvas.width);
            context.fillText( options.text, 10, 30);
            let textCoordinates = context.getImageData(0, 0, canvas.width, canvas.height);
            let dist = 22;
            for(let y = 0; y <  textCoordinates.height; y++){
                for(let x = 0; x < textCoordinates.width; x++){
                    const index = (y * 4 * textCoordinates.width) + (x * 4) + 3;
                    if(textCoordinates.data[index] > 128){
                       
                        const posX = x * dist;
                        const posY = y * dist;   
                        
                        textParticles.push( {
                            x: posX,
                            y: posY,
                            size: 4,
                            baseX: posX,
                            baseY: posY,
                            density: (Math.random() * 40) + 15
                        })
                    }
                }
            }
        }

        const render = ()=>{
           //frameCount++;
            context.clearRect(0, 0, canvas.width, canvas.height)
            // context.fillStyle = "rgba(0,0,0, 0.01)";
            // context.fillRect(0,0, canvas.width, canvas.height);
            // draw(context, frameCount, textParticles);
            draw(context, textParticles);
            animationFrameId = window.requestAnimationFrame(render)
        }

        render()

        //is called right before the component unmount.
        //our animation frame is cancelled after our canvas component unmount.
        return ()=>{
            window.cancelAnimationFrame(animationFrameId)
        }

    },[draw])

    return canvasRef
}

export default useTextCanvas;