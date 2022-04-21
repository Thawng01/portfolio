import "./home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="home-info-container">
                <h1 className="home-name">Hi, I'm Thawng</h1>
                <h3 className="home-position">Fullstack developer</h3>
                <p className="home-goal">
                    My goal is to satisfy you with my skills
                </p>

                <button className="home-contact-btn">Contact me</button>
            </div>
        </div>
    );
};

export default Home;
