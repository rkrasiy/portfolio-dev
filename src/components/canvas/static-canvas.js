import {useRef, useEffect} from "react";

//Tutorial
//https://www.youtube.com/watch?v=UoTxOVEecbI 

function StaticCanvas (props){
    const canvasRef = useRef(null)
    const {img} = props;

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        //Our first draw

        //context.fillStyle = '#000000'
        //context.fillRect(0, 0, context.canvas.width, context.canvas.height)
        const img = new Image()
        img.src = img;
        console.log(img)
        img.onload = ()=>{
            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img, 0, 0)
        }
      //  ctx.fill()
    }, [])
    const mouseLeaveHandler = () =>{
        // const canvas = canvasRef.current
        // const ctx = canvas.getContext('2d')
        // const img = new Image()
        // img.src = img;
        // console.log(img)
        // img.onload = ()=>{
        //     canvas.width = img.width;
        //     canvas.height = img.height;

        //     ctx.drawImage(img, 0, 0)
        // }
    }

    const mouseEnterHandler = ()=>{
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imageData)
         
        // changeToWhite(imageData.data);
        invertColors(imageData.data);
        // Update the canvas with the new data
        ctx.putImageData(imageData, 0, 0);
        // image.data = new Uint8ClampedArray(); // WRONG
        //image.data[1] = 0; // CORRECT
    }

    return <canvas ref={canvasRef} />
    // return <canvas ref={canvasRef} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}/>
}

export default StaticCanvas


function invertColors(data) {
    for (var i = 0; i < data.length; i+= 4) {

        data[i] = data[i] ^ 255; // Invert Red
        data[i+1] = data[i+1] ^ 255; // Invert Green
        data[i+2] = data[i+2] ^ 255; // Invert Blue
    }
}

function changeToWhite(data) {
    for (var i = 0; i < data.length; i++) {
        data[i] = 255
    }
}