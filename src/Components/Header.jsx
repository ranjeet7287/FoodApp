import logo from "../Assets/logo.jpg"
import { Link } from "react-router-dom";

const Header=(()=>{
    return(
        <div id="header">
            <div id="logo">
                <Link to="/" id="logo">
                    <img  alt="logo" src={logo}/>                
                </Link>
                <h2>Super Food</h2>
            </div>
            <div id="headerlist">
                <ul>
                    <Link to="/search" id="link-h">
                        <li>Search</li>
                    </Link>
                    <Link to="/offer" id="link-h">
                        <li>Offer</li>
                    </Link>
                    <Link to="/help"id="link-h">
                        <li>Help</li>
                    </Link>
                    <Link to="sigin" id="link-h">
                        <li>Sign In</li>
                    </Link>
                    <Link to="cart" id="link-h">
                        <li>Cart</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
})
export default Header;