import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Events from "./Components/Events/Events";
import Gallery from "./Components/Gallery/Gallery";
import Statistics from "./Components/Statistics/Statistics";
import ExploreLC from "./Components/ExploreLC/ExploreLC";
import Team from "./Components/Team/Team";
import Connect from "./Components/Connect/Connect";
import Footer from "./Components/Footer/Footer";
import AllEventsPage from "./pages/AllEventsPage";
import GalleryPage from "./pages/GalleryPage";
import Achievements from "./Components/Achievements/Achievements";

// Note: React Router v6 warnings about future flags can be safely ignored
// These warnings are about upcoming changes in v7 and will be addressed when upgrading
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <div className="appWrapper">
                        <Navbar />
                        <Home />
                        <About />
                        <Events />
                        <Achievements />
                        <Gallery />
                        <Statistics />
                        <ExploreLC />
                        <Team />
                        <Connect />
                        <Footer />
                    </div>
                } />
                <Route path="/all-events" element={
                    <>
                        <Navbar />
                        <AllEventsPage />
                        <Footer />
                    </>
                } />
                <Route path="/gallery" element={
                    <>
                        <Navbar />
                        <GalleryPage />
                        <Footer />
                    </>
                } />
            </Routes>
        </Router>
    );
}

export default App;
