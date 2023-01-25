import Canvas from "../components/canvas/canvas";
import {useState} from "react";

export default function TextEffect () {
    const [ userInput, setUserInput ] = useState("Canvas")
    const text = "Canvas";
    const mouse = {
        x: null,
        y: null,
        radius: 150
    }
    
    const inputHandler = (e) => {
        console.log(e.target.value)
        setUserInput(e.target.value)
    }

    const mouseMoveHandler = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.radius = 150
    }

    const touchHandler = (e) => {
        mouse.x = e.touches[0].clientX;
        mouse.y =e.touches[0].clientY;
        mouse.radius = 40;
    }


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
           
            const posI = i == 0 ? 0 : i-1;
            const prevParticle = textParticles[posI] 

            ctx.beginPath();
            ctx.moveTo(particle.x + 7, particle.y + 7);
            ctx.lineWidth = 1
            ctx.lineTo(prevParticle.x + 7, prevParticle.y + 7);   
            ctx.strokeStyle  =  `rgba( 250, 250, 250 , .2)`;
            ctx.stroke(); 

            ctx.beginPath();
            ctx.fillStyle = `rgba( 250, 250, 250 , .73)`;
            //ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.rect(particle.x, particle.y, 14, 14);
            ctx.closePath()
            ctx.fill();
        }
    }

    return (
        <div 
            onMouseMove={mouseMoveHandler} 
            onTouchMove={touchHandler} 
            className="overflow-hidden max-h-screen">
                <input type="text" value={userInput} onInput={inputHandler} className="absolute z-50 left-[50%]"/>
                <Canvas draw={draw}>{userInput}</Canvas>
        </div>
    )
}