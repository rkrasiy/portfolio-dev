import HueCanvas from "../components/canvas/hueCanvas";
import { useState } from "react";

export default function Home() {
 	const [ openMenu, setOpenMenu] = useState(false)
    const particleArray = [];

    const mouse = {
        x: null,
        y: null,
        radius: 150
    }

	for(let i = 0; i < 1000; i++){
		const size = Math.random() * 10 + 1
		particleArray.push({
			x: Math.random() * window.innerWidth,
    		y: Math.random() * window.innerHeight,
			size: size,
			baseSize: size,
			speedX: Math.random() * 3 - 1.5,
			speedY: Math.random() * 3 - 1.5,
		})
	}

    const mouseMoveHandler = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;

		// for(let i = 0; i < 5; i++){
		// 	particleArray.push({
		// 		x: mouse.x,
		// 		y: mouse.y,
		// 		size: Math.random() * 20 + 1,
		// 		speedX: Math.random() * 3 - 1.5,
		// 		speedY: Math.random() * 3 - 1.5,
		// 	})
		// }
    }

    const touchHandler = (e) => {
        mouse.x = e.touches[0].clientX;
        mouse.y =e.touches[0].clientY;
        mouse.radius = 60;
    }

    const draw = (ctx, hue ) => {
		for(let i = 0; i < particleArray.length; i++){
			// particleArray[i].x += particleArray[i].speedX;
			// particleArray[i].y += particleArray[i].speedY;
			if(particleArray[i].x > window.innerWidth || particleArray[i].x < 0 ) particleArray[i].speedX *= -1;
			if(particleArray[i].y > window.innerHeight || particleArray[i].y < 0 ) particleArray[i].speedY *= -1;

			particleArray[i].x += particleArray[i].speedX;
			particleArray[i].y += particleArray[i].speedY;
			// if(particleArray[i].size > 0.2) particleArray[i].size -= 0.1
			// else particleArray[i].size = particleArray[i].baseSize
			
			ctx.fillStyle = "hsl(" + hue + ", 100%, 50%)";
			ctx.beginPath();
			ctx.arc(particleArray[i].x, particleArray[i].y, particleArray[i].size, 0, Math.PI * 2);
			ctx.fill();

			// if(particleArray[i].size <= 0.3 ){
			// 	particleArray.splice(i, 1);
			// 	i--;
			// }
		}
    }

	const openMenuHanlder = (e) => {
		setOpenMenu(!openMenu)
	}

	return (
		<div className="App" onMouseMove={mouseMoveHandler} onTouchMove={touchHandler} >
			<HueCanvas draw={draw}/>
			<img src="./mask.png" className="fixed top-0 left-0 w-full h-full"/>
			<div className="absolute top-0 left-0 h-full w-full flex flex-row items-center justify-center text-white gap-4 text-lg">
				<p>Ruslan Krasiy</p>
				<p onClick={openMenuHanlder} className="cursor-pointer">Fronend Developer</p>
			</div>
			{
				openMenu && <div className="absolute z-50 top-0 right-0 w-1/2 h-full bg-slate-400"></div>
			}
		</div>
	);
}


