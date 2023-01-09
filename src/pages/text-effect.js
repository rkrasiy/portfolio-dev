import Canvas from "../components/canvas/canvas";

export default function TextEffect () {
    const text = "Canvas";
    const mouse = {
        x: null,
        y: null,
        radius: 150
    }

    const mouseMoveHandler = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }

    const draw = (ctx, textParticles) => {
        for(let particle of textParticles){
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
            ctx.fillStyle = "#fff";
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.closePath()
            ctx.fill();
        }
    }

    return <div onMouseMove={mouseMoveHandler} className="overflow-hidden1 max-h-screen">
            <Canvas draw={draw}>{text}</Canvas>
        </div>
}