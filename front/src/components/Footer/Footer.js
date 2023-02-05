import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footerback'>
    <div className="rrss" >
<a href='https://www.instagram.com/urwithlove/'><FontAwesomeIcon icon={faInstagram} /></a> {"  "}
<FontAwesomeIcon icon={faFacebook} /> {"  "}
<FontAwesomeIcon icon={faLinkedin} /> {"  "}
      </div>
      <p id='rights'> Urwlove Limited 1998-2023.All Rights Reserved.</p>
      </div>
  )
}

export default Footer;
