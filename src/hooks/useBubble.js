import { useRef, useEffect, useState } from 'react'

const useBubble = ( config ) => {
    const canvasRef = useRef(null);
    const [ particleArray, setParticleArray] = useState([])

    useEffect(()=>{
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let frameCount = 0;

        const dpr = 1;
        const cw = window.visualViewport.width;
        const ch = window.visualViewport.height;
        canvas.width = cw * dpr;
        canvas.height = ch * dpr;

        let animationFrameId;
        for(let i = 0; i < 500; i++){
            const size = Math.random() * 2 + 1;
            let speed =  Math.random() * 3 - 1.5;
        
            particleArray.push({
                x: Math.random() * cw,
                y: -size,
                size: 2,
                baseSize: size,
                speedY: speed
            })
        }

        const draw = (ctx, color ) => { 
            for(let i = 0; i < particleArray.length; i++){
                particleArray[i].y -= (particleArray[i].speedY) - particleArray[i].size ;

                // if(particleArray[i].size > 0.2) particleArray[i].size -= 0.05
                // else particleArray[i].size = particleArray[i].baseSize
                
                ctx.fillStyle = "hsl(" + color + ", 100%, 50%)";
              
                ctx.beginPath();
                ctx.arc(particleArray[i].x, particleArray[i].y, particleArray[i].size, 0, Math.PI * 2);

                ctx.fill();

                if(particleArray[i].y > ch ){
                	particleArray[i].y = 0;
                }
            }

        }

        const render = ()=>{
            frameCount += 0.25
            context.clearRect(0, 0, canvas.width, canvas.height)
            // context.fillStyle = "rgba(0,0,0, 0.01)";
            // context.fillRect(0,0, canvas.width, canvas.height);

            draw(context, frameCount);
            animationFrameId = window.requestAnimationFrame(render)
        }

        render()

        return ()=>{
            window.cancelAnimationFrame(animationFrameId)
        }

    })

    return canvasRef
}

export default useBubble;