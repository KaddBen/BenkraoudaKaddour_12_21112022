import React from "react";
import logo from "../../assets/logo.png"
import './Header.css'
const Header = () => {
    return(
<h1 className="header">

<img src={logo} alt="logo"></img>
       
<span>Acceuil</span>
<span>Profil</span>
<span>Réglages</span>
<span>Communauté</span>
</h1>
    )
}
export default Header;