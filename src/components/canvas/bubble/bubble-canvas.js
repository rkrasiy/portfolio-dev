import useBubble from "../../../hooks/useBubble";

const BubbleCanvas = props => {
    const canvasRef = useBubble();
    return <canvas ref={canvasRef} />
}


export default BubbleCanvas;