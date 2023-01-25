import Canvas from "../components/canvas/canvas";
import  { useEffect } from "react";

export default function Space2 () {
    //const [particles, setParticles] = useState([])
    const particles = [];
    const text = "Ruslan";
    const center = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    }

    //Any point (x,y) on the path of the circle is x=r∗sin(θ),y=r∗cos(θ)
    //thus: (x,y)=(12∗sin(115),12∗cos(115))
    //So your point will roughly be (10.876,−5.071) (assuming the top right quadrant is x+, y+)

   

    particles.length = 0
    for(let i = 0; i < 10; i++){
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        // const x = 300,
        //     y = 300;
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
    console.log("init")
    console.log(particles)
   

    // useEffect(()=>{
    //     particles.length = 0
    //     //for(let i = 0; i < 1; i++){
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
    //    // }
    //     console.log("init")
    //     console.log(particles)
    // })


    const mouse = {
        x: null,
        y: null,
        radius: 40
    }

    const mouseMoveHandler = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }


    const draw = (ctx ) => {
        let count = 0;
       // console.log(ctx)
        // for(let particle of particles){
        for(let i = 0; i < particles.length; i++){
            const particle = particles[i]
            count += 36;
            const tr = particle.y / Math.tan(30);
            const x = particle.x - tr;
            const dx = (particle.x + x) / 2;

            let rMin= mouse.x - mouse.radius;
            let rMax = mouse.x + mouse.radius;

            let opacity = ".03";
            if (dx > rMin && dx < rMax) {
               opacity = ".25"
            }
            

            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineWidth = 2
            ctx.lineTo(x, 0);   
            ctx.strokeStyle  = `rgba(255, 255, 255, ${opacity})`;
            ctx.stroke(); 

            ctx.beginPath();
            ctx.fillStyle = `hsl(${count} , 100%, 50%)`;
            ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2);
            ctx.fill();
         

            let a = window.innerWidth / 2 - particle.x;
            let b = window.innerHeight / 2 - particle.y;
            let c = Math.floor(Math.hypot(a, b));
            let sin = b / c

            // let newPos = {
            //     x: Math.floor(hp * Math.cos(1 * Math.PI / 180) + particle.x),
            //     y: Math.floor(hp * Math.sin(1 * Math.PI / 180) + particle.y)
            // }

            // if(newPos.x + 1 > )
            
            // let nX = hp * Math.sin(46) / Math.sin(90)
            // let nY = hp * Math.sin(44) / Math.sin(90)

            // newPos.x = center.x + nX;
            // newPos.y = center.y + nY;

            // particles[i].x = newPos.x
            // particles[i].y = newPos.y
            let angleB = Math.asin(sin) * 180/Math.PI;
            let angleA = 90 - angleB

            let nX = Math.floor(c * angleB + particle.x) ;
            let nY = Math.floor(c * angleB + particle.y) ;
            let x1 = nX - center.x;
            let y1 = nY - center.y;
            // particles[i].x = particle.x + x1
            // particles[i].y = particle.y + y1
           // console.log(angleB, angleA, c, a ,b ,  sin)

            //ctx.rotate( (2 * Math.PI) / 60000 );


        }
        // const time = new Date();
        
        // ctx.rotate(
        //     ((2 * Math.PI) / 6) * time.getSeconds() +
        //     ((2 * Math.PI) / 6000) * time.getMilliseconds()
        // );

    }

    return (
        <div onMouseMove={mouseMoveHandler} className="overflow-hidden max-h-screen">
            <Canvas draw={draw}/>
        </div>
    )
}