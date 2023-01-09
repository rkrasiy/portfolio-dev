import { useRef, useEffect } from 'react'

const useCanvas = (draw, options = {}) => {
    const canvasRef = useRef(null);
    useEffect(()=>{
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const context = canvas.getContext(options.context || '2d');

        // let frameCount = 0;
        let animationFrameId;
        let textParticles = [];

        if(options.text){
            context.fillStyle = "white";
            context.font = `30px sans-serif`;
            // context.fillText( options.text, canvas.width/2, canvas.height/2, canvas.width);
            context.fillText( options.text, 10, 30, canvas.width);
            let textCoordinates = context.getImageData(0, 0, canvas.width, canvas.height);

            for(let y = 0; y <  textCoordinates.height; y++){
                for(let x = 0; x < textCoordinates.width; x++){
                    const index = (y * 4 * textCoordinates.width) + (x * 4) + 3;
                    if(textCoordinates.data[index] > 128){
                        const posX = x * 15;
                        const posY = y * 20;
                        const particle = {
                                        x: posX,
                                        y: posY,
                                        size: 2,
                                        baseX: posX,
                                        baseY: posY,
                                        density: (Math.random() * 40) + 5
                                    }
    
                        textParticles.push(particle)
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

export default useCanvas;