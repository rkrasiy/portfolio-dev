export default function Navbar(){
    return (
        <nav className="sticky top-0 left-0 bg-slate-600">
            <div className="container mx-auto p-2">
                <ul className="flex items-center gap-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}