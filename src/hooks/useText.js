import { useRef, useEffect } from 'react'

const useText = () => {
    const canvasRef = useRef(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const mouse = {
            x: null,
            y: null,
            radius: 40
        }

        const dpr = 1;
        var cw = window.innerWidth;
        var ch = window.innerHeight;
        canvas.width = cw * dpr;
        canvas.height = ch * dpr;

        let animationFrameId;
        
        let textParticles = [];

        context.fillStyle = "white";
   
        const fontSize = 22;
        const center = ch / 2;

        context.font = `600 ${fontSize}px sans-serif`;
        context.fillText( "RUSLAN", 0, center - (16 / 1.8));

        context.font = `600 ${fontSize}px sans-serif`;
        context.fillText( "KRASIY", 0, center + (16 * 1.8));

        let textCoordinates = context.getImageData(0, 0, canvas.width, canvas.height);
        let secondWord = false;
        
        for(let y = 0; y <  textCoordinates.height; y++){
                        
            if(y - center >= 0) secondWord = true;    

            for(let x = 0; x < textCoordinates.width; x++){
  
                const index = (y * 4 * textCoordinates.width) + (x * 4) + 3;
                if(textCoordinates.data[index] > 128){
                   
                    // const posX = 50 + (x * ds);
                   // const posY = y + ((y - (center + 180)) * ds);   
                    const initX = x;
                    const initY = y;


                    const posX = x * 9;
                    const posY = y  ;   
  
                    textParticles.push( {
                        realX: initX,
                        realY: initY,
                        x: posX,
                        y: posY,
                        baseX: posX,
                        baseY: posY,
                        density: (Math.random() * 40) + 15,
                    })
         
           
                   
                }
            }
        }
 console.log(textParticles)
        const mouseMoveHandler = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }

        // const touchHandler = (e) => {
        //     mouse.x = e.touches[0].clientX;
        //     mouse.y =e.touches[0].clientY;
        //     mouse.radius = 40;
        // }

        document.addEventListener('mousemove', mouseMoveHandler);

        const draw = (ctx, textParticles, hue) => {
            for(let i = 0; i < textParticles.length; i++){
                const particle = textParticles[i]     

                if(mouse.x){
                    let dx = mouse.x - particle.x;
                    let dy = mouse.y - particle.y;
                    let distance = Math.sqrt( dx * dx + dy * dy);
                    let forceDirectionX = dx / distance;
                    let forceDirectionY = dy / distance;


                    let maxDistance = mouse.radius;
                    let force = (maxDistance - distance) / maxDistance;
                    let directionX = forceDirectionX * force * particle.density;
                    let directionY = forceDirectionY * force * particle.density;

                    if(distance < mouse.radius) {
                        particle.x -= directionX;
                        particle.y -= directionY;
                    }else{
                        if(particle.x !== particle.baseX){
                            const dx = particle.x - particle.baseX;
                            particle.x -= dx/10;
                        }
                        if(particle.y !== particle.baseY){
                            const dy = particle.y - particle.baseY;
                            particle.y -= dy/10;
                        }
                    }
                }
            
                ctx.beginPath();
                ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;
                ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
                ctx.closePath()
                ctx.fill();
            }
        }
        let hue = 0;
        const render = ()=>{
            hue += 0.25
            context.clearRect(0, 0, canvas.width, canvas.height)
            draw(context, textParticles, hue);
            animationFrameId = window.requestAnimationFrame(render)
        }

        render()

        return ()=>{
            window.cancelAnimationFrame(animationFrameId);
            document.removeEventListener('mousemove',  mouseMoveHandler)
        }

    })

    return canvasRef
}

export default useText;