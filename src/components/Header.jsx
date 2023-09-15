const Header = () => {
    return (
        <header>
            <nav className="nav">
                <div className="flex logo-wrap">
                    <img src="/assets/img/tv.svg" alt="logo"/>

                    <h3>MovieBox</h3>
                </div>

                <div className="search-wrap flex">

                    <input className="search" type="search" name="" id="" placeholder="what do you want to watch?" />

                    <img src="/assets/img/search.svg" alt="search icon" className="search-icon"/>

                </div>



                <div className="nav-btns-wrap">

                    <button className="btn sign-in">Sign in</button>
                    <div className="menu-bars">

                        <div className="menu-wrap">
                            <div className="menu-bar"></div>
                             <div className="menu-bar"></div>
                        </div>
                        
                    </div>

                </div>

                
                    
            </nav>
        </header>
    )
}

export default Header;
