import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const [btnName, setbtnName] = useState("login")

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About us</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact us</Link>
                    </li>
                    <li>Cart</li>
                    <button onClick={() => {
                        btnName === "login" ? setbtnName("logout") : setbtnName("login")

                    }} className="Login-btn">{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;