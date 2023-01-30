import { useRef, useEffect } from 'react'

const useText = () => {
    const canvasRef = useRef(null);

    useEffect(()=>{
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const mouse = {
            x: null,
            y: null,
            radius: 120
        }

        const dpr = 1;
        var cw = window.innerWidth;
        var ch = window.innerHeight;
        canvas.width = cw * dpr;
        canvas.height = ch * dpr;

        let animationFrameId;
        let textParticles = [];

        context.fillStyle = "white";
  
        const fH = 1.15;
        const left = 3;
        
        context.font = `800 ${fH}vw sans-serif`;
        context.fillText( "RUSLAN", left, 25);

        context.font = `800 ${fH + 0.07}vw sans-serif`;
        context.fillText( "KRASIY", left, 45);

        let textCoordinates = context.getImageData(0, 0, canvas.width, canvas.height);
       
        let dist = 18;

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

        const draw = (ctx, textParticles) => {
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
                ctx.fillStyle = `rgba( 250, 250, 250 , .73)`;
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.closePath()
                ctx.fill();
            }
        }

        const render = ()=>{
            context.clearRect(0, 0, canvas.width, canvas.height)
            draw(context, textParticles);
            animationFrameId = window.requestAnimationFrame(render)
        }

        render()

        return ()=>{
            window.cancelAnimationFrame(animationFrameId)
        }

    })

    return canvasRef
}

export default useText;