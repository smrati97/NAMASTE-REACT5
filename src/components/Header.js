import { IMG_URL } from "../Config";

const Title = () =>{
    return (
    <a href="/">
    <img className="logo" src={IMG_URL} alt="logo"/>
    </a>
    )}

const Header = () => {
        return (
        
        <div className="header">
            <Title/>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
        )
}

export default Header;