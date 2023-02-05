import './Header.css';
import { Link } from "react-router-dom";

function Header({back}) {
  return (
  <div className='menu'>
  <img src="./WP/logo.jpg" alt= "logo" className='logo'></img>
  <Link to="/Home" className='b'>Home</Link>
  <Link to="/About" className='c'>About</Link>
  <Link to="/Contact" className='d'>Contact</Link>
  </div>
  );
}

export default Header;
