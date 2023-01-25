import useHuePencilCanvas from "./useHuePencilCanvas";


const HueCanvas = props => {
    const { draw, options = {}, ...rest } = props
    const { context, ...moreConfig } = options
    const { children } = rest;
 
    const canvasRef = useHuePencilCanvas(draw, {context, text: children});
    return <canvas ref={canvasRef} {...rest}/>
}


export default HueCanvas;