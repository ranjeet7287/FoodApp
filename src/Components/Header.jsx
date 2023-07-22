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
                    <Link to="/search">
                        <li>Search</li>
                    </Link>
                    <Link to="/offer">
                        <li>Offer</li>
                    </Link>
                    <Link to="/help">
                        <li>Help</li>
                    </Link>
                    <Link to="sigin">
                        <li>Sign In</li>
                    </Link>
                    <Link to="cart">
                        <li>Cart</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
})
export default Header;