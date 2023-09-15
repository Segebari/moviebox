const Home = () => {
    return (
        <section className="home">

                <div className="hometexts-wrap">
                    <h1> John Wick 3: <br /> Parabellum</h1>

                    <div className="home-rating-wrap flex">
                        <div className="rating-wrap">

                            <img src="/assets/img/imbd-icon.svg" alt="" />
                            <p className="rating-no">
                            86.0/100
                            </p>

                        </div>

                        <div className="rating-wrap">

                            <img src="/assets/img/r-tomatoes.svg" alt="" />
                            <p className="rating-no">
                             97%
                            </p>

                        </div>
                        
                    </div>

                    <div className="home-movie-descrip">
                        John Wick is on the run after killing a member <br /> of the international assassins' guild, and with <br /> a $14 million price tag on his head, he is the <br /> target of hit men and women everywhere.
                    </div>

                    <div className="home-trailer-btn flex">
                        <img src="/assets/img/play-btn.svg" alt="" />
                        <p className="trailer-btn-text">
                            WATCH TRAILER
                        </p>
                    </div>
                </div>


        </section>
    )
}

export default Home;
