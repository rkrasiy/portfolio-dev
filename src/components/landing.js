import Button from "./button"

export default function Landing(){
    return (
        <div className="w-full h-screen relative flex flex-row items-center justify-center bg-gray-900">
            <div className="text-center">
                <div className="text-white text-5xl select-none mb-8">
                    <p>
                        Hello, I'm <span className="text-cyan-300">Ruslan Krasiy</span>.
                    </p>
                    <p>
                        I'm a front-end web developer.
                    </p>
                </div>
                <Button basic inverted className="text-2xl">
                    View my work
                </Button>

            </div>
            
        </div>
    )
}