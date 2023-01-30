import useText from "../../../hooks/useText";

const TextCanvas = props => {
    const { draw, options = {}, ...rest } = props
    const { context, ...moreConfig } = options
    const { children } = rest;
 
    const canvasRef = useText(draw, {context, text: children});
    return <canvas ref={canvasRef} {...rest}/>
}


export default TextCanvas;