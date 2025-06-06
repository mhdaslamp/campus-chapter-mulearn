import Home from "../Components/Home/Home";
import Statistics from "../Components/Statistics/Statistics";
import ExploreLC from "../Components/ExploreLC/ExploreLC";

const HomePage = () => {
    return (
        <div className="home-page">
            <Home />
            <Statistics />
            <ExploreLC />
        </div>
    );
};

export default HomePage; 