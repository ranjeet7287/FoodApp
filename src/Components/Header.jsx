import logo from "../Assets/logo.jpg"

const Header=(()=>{
    return(
        <div id="header">
            <div id="logo">
                <img alt="logo" src={logo}/>
                <h2>Super Food</h2>
            </div>
            <div id="headerlist">
                <ul>
                    <li>Search</li>
                    <li>Offer</li>
                    <li>Help</li>
                    <li>Sign In</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
})
export default Header;