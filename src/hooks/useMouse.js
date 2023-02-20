import { useRef, useEffect, useState } from 'react'

const useMouse = ( draw, options = {} ) => {
    const canvasRef = useRef(null);
    const [ particleArray, setParticleArray] = useState([])

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

        const mouse = {
            x: cw / 2,
            y: ch / 2
        }
        const mouseHandler = (e)=>{
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            for(let i = 0; i < 5; i++){
                const size = Math.random() * 10 + 1
                particleArray.push({
                    x:  mouse.x,
                    y:  mouse.y,
                    size: size,
                    baseSize: size,
                    speedX: Math.random() * 3 - 1.5,
                    speedY: Math.random() * 3 - 1.5,
                    color: i
                })
            }
        }

        document.addEventListener('mousemove', mouseHandler);
        document.addEventListener('click', mouseHandler);

        let animationFrameId;

        let mX = 200;
        let mY = 200;
        let speedX = 4.4;
        let speedY = 4.4;

        const drawA = (ctx, hue ) => {
            if(particleArray.length == 0) return
            // for(let i = 0; i < 10; i++){
            //     const size = Math.random() * 15 + 1
            //     particleArray.push({
            //         x:  mouse.x,
            //         y:  mouse.y,
            //         size: size,
            //         baseSize: size,
            //         speedX: Math.random() * 3 - 1.5,
            //         speedY: Math.random() * 3 - 1.5,
            //         color: i
            //     })
            // }

            for(let i = 0; i < particleArray.length; i++){
                particleArray[i].x += particleArray[i].speedX;
                particleArray[i].y += particleArray[i].speedY;

                if(particleArray[i].size > 0.2) particleArray[i].size -= 0.05
                else particleArray[i].size = particleArray[i].baseSize
                
                ctx.fillStyle = "hsl(" + hue + ", 100%, 50%)";

                ctx.beginPath(); 
                //ctx.strokeStyle = "hsl(" + hue + ", 100%, 40%)";
                ctx.arc(particleArray[i].x, particleArray[i].y, particleArray[i].size, 0, Math.PI * 2);
              //  ctx.stroke();
                ctx.fill();

                if(particleArray[i].size <= 0.3 ){
                	particleArray.splice(i, 1);
                	i--;
                }
            }
          
            mX += speedX;
            mY += speedY;
            let a =  window.innerWidth;
            let b =  window.innerHeight;
            if(mX + 100 > a || mX - 100 < 0) speedX *= -1;
            if(mY + 100 > b || mY - 100 < 0) speedY *= -1;

        }

        const render = ()=>{
            frameCount += 0.25
            context.clearRect(0, 0, canvas.width, canvas.height)
           //context.fillStyle = "rgba(0,0,0, 0.01)";
            //context.fillRect(0,0, canvas.width, canvas.height);
         
            drawA(context, frameCount);
            animationFrameId = window.requestAnimationFrame(render)
        }

        render()

        return ()=>{
            window.cancelAnimationFrame(animationFrameId);
            document.removeEventListener('mousemove',  mouseHandler)
            document.removeEventListener('click',  mouseHandler)
        }

    },[draw])

        

    return canvasRef

}

export default useMouse;