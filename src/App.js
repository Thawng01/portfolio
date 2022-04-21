import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
    return (
        <div className="app">
            <Header />
            <div className="page-container">
                <Home />
                <Work />
                <About />
                <Contact />
            </div>
        </div>
    );
}

export default App;
