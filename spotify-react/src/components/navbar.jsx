import React from "react";
import smallRight from "../../../assets/icons/small-right.png";
import smallLeft from "../../../assets/icons/small-left.png";
import searchIcon from "../../../assets/icons/search.png";
import '../../../style/css/reset.css'
import '../../../style/css/vars.css'
import '../../../style/css/navbar-index.css'

function Navbar() {
  return (
    <>
      <nav className="header__navigation">
        <div className="navigation">
          <button className="arrow-left">
            <img src={smallLeft} alt="Seta esquerda" />
          </button>
          <button className="arrow-right">
            <img src={smallRight} alt="Seta direita" />
          </button>

          <div className="header__search">
            <img src={searchIcon} alt="Ícone de busca" />
            <input id="search-input" type="text" maxLength="800" placeholder="O que você quer ouvir?" />
          </div>

          <div className="header__login">
            <button className="subscribe">Inscreva-se</button>
            <button className="login">Entrar</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
