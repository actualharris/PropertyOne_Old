import { Link } from "react-scroll";
import logo from '../assets/logo.svg';


const Header = () => {
    return (
        <header>
            <img id="property-logo" src={logo} alt="logo svg" />
            <nav className="navigation">
                <ul>
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="/properties">Properties</Link></li> */}
                    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="properties" smooth={true} duration={500}>Properties</Link></li>
                    <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                    <li><Link to="testimonials" smooth={true} duration={500}>Testimonials</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;