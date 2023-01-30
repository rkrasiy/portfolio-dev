import useMouse from "../../../hooks/useMouse";

const MouseCanvas = props => {
    const { draw, options = {}, ...rest } = props
    const { context, ...moreConfig } = options
    const { children } = rest;
 
    const canvasRef = useMouse(draw, {context, text: children});
    return <canvas ref={canvasRef} {...rest}/>
}


export default MouseCanvas;