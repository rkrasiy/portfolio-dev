import useImageCanvas from "./useImageCanvas";


const ImageCanvas = props => {
//console.log("Asdas")
    // const _postdraw = () => {
    //     index++;
    //     ctx.restore();
    // }
    // const _predraw = (context, canvas)=>{
    //     context.save();
    //     resizeCanvasToDisplaySize(context, canvas);
    //     const {width, height } = context.canvas;
    //     context.clearRect(0,0, width, height);
    // }

    const { draw, options = {}, ...rest } = props
    const { context, ...moreConfig } = options
    const { children } = rest;
 
    const canvasRef = useImageCanvas(draw, {context, text: children});
    return <canvas ref={canvasRef} {...rest}/>
}


export default ImageCanvas;