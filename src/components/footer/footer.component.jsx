import "./footer.styles.scss";
import { Link } from "react-router-dom";

function Footer() {
  function navLinkPressHandler(e) {
    console.log(window.location.href);
    if (!window.location.href === "/") window.location.href = "/";

    const data = e.target.getAttribute("data");

    const selectedElement = document.getElementById(data.toString());

    selectedElement.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <footer className='footer'>
      <ul className='nav'>
        <li className='nav__item'>
          <Link
            data='1'
            to='/'
            onClick={navLinkPressHandler}
            className='nav__link'
          >
            About Us
          </Link>
        </li>
        <li className='nav__item'>
          <Link
            data='3'
            to='/'
            onClick={navLinkPressHandler}
            className='nav__link'
          >
            Portfolio
          </Link>
        </li>
        <li className='nav__item'>
          <Link to='/' className='nav__link'>
            Home
          </Link>
        </li>
        <li className='nav__item'>
          <Link to='/contact' className='nav__link'>
            Contact Us
          </Link>
        </li>
        <li className='nav__item'>
          <Link
            to='/'
            data='2'
            onClick={navLinkPressHandler}
            className='nav__link'
          >
            Services
          </Link>
        </li>
      </ul>
      <p className='copyright'>
        &copy; Copyright 2023 by ExoTech. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
