import { useRef, useEffect } from 'react'


const useImageCanvas = (draw) => {
    const canvasRef = useRef(null);
    useEffect(()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let particles = []
        let particlesArray = []

        const image = new Image()
        image.src = "./images/foto-3.jpg";


        image.addEventListener("load", ()=> {
            canvas.width = image.width;
            canvas.height = image.height;

            ctx.drawImage( image, 0, 0, canvas.width, canvas.height );

            const pixels =  ctx.getImageData( 0, 0 , canvas.width, canvas.height );
            ctx.clearRect( 0, 0, canvas.width, canvas.height );
           
            for(let y = 0; y < canvas.height; y++){
                let row = [];
                for(let x = 0; x < canvas.width; x++){
                    const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
                    const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
                    const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
                    const brightness = calculateRelativeBrightness(red, green, blue);
                    row.push( {
                        cellBrightness: brightness,
                       // cellColor:`rgb(${red}, ${green}, ${blue})`
                        cellColor:`rgb(255, 255, 255)`
                    })
                }
               particles.push(row)
            }
            console.log(particles)

            class Particle {
                constructor(){
                    this.x = Math.random() * canvas.width;
                    this.y = 0;
                    this.speed = 0;
                    this.velocity = Math.random() * 3.5;
                    this.size = Math.random() * 2.5 + 0.2;
                    this.position1 = Math.floor(this.y);
                    this.position2 = Math.floor(this.x);
                }

                update(){
                    this.position1 = Math.floor(this.y);
                    this.position2 = Math.floor(this.x);
                    this.speed = particles[this.position1][this.position2].cellBrightness;
                    let movement = (2.5 - this.speed) + this.velocity;

                    this.y += movement;
                    if(this.y >= canvas.height){
                        this.y = 0;
                        this.x = Math.random() * canvas.width;
                    }
                    //this.x += movement;
                    // if(this.x >= canvas.width){
                    //     this.x = 0;
                    //     this.y = Math.random() * canvas.height;
                    // }
                }

                draw(){
                    ctx.beginPath();
                    ctx.fillStyle = 'white';
                    ctx.fillStyle = particles[this.position1][this.position2].cellColor;
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill()
                }
                
            }

            
            for(let i = 0; i < 2000; i++){
                particlesArray.push(new Particle)
            }
            console.log(pixels)
        })
      //  const dpr = window.devicePixelRatio;
        // let frameCount = 0;
        let animationFrameId;
       
        const render = ()=>{
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            draw(ctx, particlesArray);
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

function calculateRelativeBrightness(red, green, blue){
    return Math.sqrt(
        (red * red) * 0.299 +
        (green * green) * 0.587 + 
        (blue * blue) * 0.114
    )/100
}



export default useImageCanvas;

