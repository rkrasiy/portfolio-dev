import Landing from "./components/landing";
import Navbar from "./components/navbar";
import Section from "./components/section";
import Footer from "./footer";

function App() {
const sections = [
    {title: "About"},
    {title: "Portfolio"},
    {title: "Contact"},
]
    return (
        <div className="App">
            <Landing />
            <Navbar />
            {
                sections.map( sec => (
                    <Section key={sec.title} title={sec.title} />
                ))
            }
           <Footer />
        </div>
    );
}

export default App;
