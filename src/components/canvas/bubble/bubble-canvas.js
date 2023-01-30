import useBubble from "../../../hooks/useBubble";

const BubbleCanvas = props => {
    const { draw, options = {}, ...rest } = props
    const { context, ...moreConfig } = options
    const { children } = rest;
 
    const canvasRef = useBubble(draw, {context, text: children});
    return <canvas ref={canvasRef} {...rest}/>
}


export default BubbleCanvas;