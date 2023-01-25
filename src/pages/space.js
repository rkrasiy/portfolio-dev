import Canvas from "../components/canvas/canvas";
import  { useEffect } from "react";

export default function Space () {
    //const [particles, setParticles] = useState([])
    const particles = [];
    const text = "Ruslan";


    for(let i = 0; i < 1000; i++){
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            const particle = {
                x: x,
                y: y,
                size: 3,
                baseX: x,
                baseY: y,
                density: (Math.random() * 30) + 1
            }
            particles.push(particle)
        }

    // useEffect(()=>{
    //     for(let i = 0; i < 1000; i++){
    //         const x = Math.random() * window.innerWidth;
    //         const y = Math.random() * window.innerHeight;
    //         const particle = {
    //             x: x,
    //             y: y,
    //             size: 3,
    //             baseX: x,
    //             baseY: y,
    //             density: (Math.random() * 30) + 1
    //         }
    //         particles.push(particle)
    //     }

    // })

    const mouse = {
        x: null,
        y: null,
        radius: 150
    }

    const mouseMoveHandler = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.radius = 150
    }

    const touchHandler = (e) => {
        mouse.x = e.touches[0].clientX;
        mouse.y =e.touches[0].clientY;
        mouse.radius = 60;
    }

    const draw = (ctx ) => {
        for(let i = 0; i < particles.length; i++){
            const particle = particles[i]
         
            const tr = particle.y / Math.cos(30);
            const y = particle.y - tr;
            const dy = (particle.y + y) / 2;
            if(mouse.x && mouse.y){
              //  console.log("Enter")
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
                        particle.x -= dx/5;
                    }
                    if(particle.y !== particle.baseY){
                        const dy = particle.y - particle.baseY;
                        particle.y -= dy/5;
                    }
                }
            }
  
            const prevPos = i == 0 ? 0 :  i - 1;

            const prevParticle = particles[prevPos];

            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineWidth = 1
            ctx.lineTo(prevParticle.x,  prevParticle.y);   
            ctx.strokeStyle  = `rgba(255, 255, 255, .25)`;
            ctx.stroke(); 


            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    return (
        <div 
            onMouseMove={mouseMoveHandler} 
            onTouchMove={touchHandler} 
            className="overflow-hidden max-h-screen">
            <Canvas draw={draw}/>
        </div>
    )
}