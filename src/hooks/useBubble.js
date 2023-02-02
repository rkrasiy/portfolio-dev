import { useRef, useEffect, useState } from 'react'

const useBubble = ( ) => {
    const canvasRef = useRef(null);
    const [ particleArray, setParticleArray] = useState([])

    useEffect(()=>{
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let frameCount = 0;
        //  const dpr = window.devicePixelRatio;
        const dpr = 1;
        var cw = window.innerWidth;
        var ch = window.innerHeight;
        canvas.width = cw * dpr;
        canvas.height = ch * dpr;

        let animationFrameId;

        const draw = (ctx, color ) => { 
            for(let i = 0; i < 10; i++){
                const size = Math.random() * 10 + 1;
                let h = 20;
                let step =  Math.random() * 3 - 1.5;
                if(step > 0) h *= -1
            

                particleArray.push({
                    x: Math.random() * cw,
                    y: ch / 2 + h,
                    size: size,
                    baseSize: size,
                    speedY: step
                })
            }

            for(let i = 0; i < particleArray.length; i++){
                particleArray[i].y -= particleArray[i].speedY;

                if(particleArray[i].size > 0.2) particleArray[i].size -= 0.025
                else particleArray[i].size = particleArray[i].baseSize
                
                ctx.fillStyle = "hsl(" + color + ", 100%, 50%)";

                ctx.beginPath();
                ctx.arc(particleArray[i].x, particleArray[i].y, particleArray[i].size, 0, Math.PI * 2);
                ctx.fill();

                if(particleArray[i].size <= 0.3 || particleArray[i].y <= 100 || particleArray[i].y >= ch - 100 ){
                	particleArray.splice(i, 1);
                	i--;
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