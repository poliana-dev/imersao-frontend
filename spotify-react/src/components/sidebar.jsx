import React from "react";

function Sidebar(){
    return(
        <>
            <div className="sidebar">
                <nav className="sidebar__nav">
                    <div>
                        <section className="logo">
                            <a href="">
                                <img src="assets/icons/logo-spotify.png" alt="logo-spotify"/>
                            </a>

                        </section>
                    
                        <section>
                            <ul>
                                <li>
                                    <a href="">
                                        <span className="fa-solid fa-house"></span>
                                        <span>Início</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <span className="fa-solid fa-search"></span>
                                        <span>Buscar</span>
                                    </a>
                                </li>
                            
                            </ul>
                        </section>
                    </div> 

                    
                </nav>

                <div className="library">
                    <section className="library__content">
                        <button className="library__button">
                            <span className="fa-solid fa-book"></span>
                            <span>Sua biblioteca</span>
                        </button>
                        <span className="fa-solid fa-plus"></span>
                    </section>

                    <section className="section-playlist">
                        <div className="section-playlist__content">
                            <span className="text title">Crie sua primeira playlist</span>
                            <span className="text subtitle">É fácil vamos te ajudar</span>
                            <button className="section-playlist__button">
                                <span>Criar playlist</span>
                            </button>
                        </div>
                    </section>

                    <div className="cookies">
                        <a href="">Cookies</a>
                    </div>

                    <div className="languages">
                        <button className="languages__button">
                            <span className="fa fa-globe"></span>
                            <span>Português do Brasil</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;