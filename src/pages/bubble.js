import BubbleCanvas from "../components/canvas/bubble/bubble-canvas";

export default function Bubble() {
	return (
		<div className="App">
			<BubbleCanvas />
			<img src="./mask2a.png" className="fixed top-0 left-0 w-full h-full"  alt="mask"/>
		</div>
	);
}


