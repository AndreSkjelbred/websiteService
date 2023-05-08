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
            Om oss
          </Link>
        </li>
        <li className='nav__item'>
          <Link
            data='3'
            to='/'
            onClick={navLinkPressHandler}
            className='nav__link'
          >
            Portefølje
          </Link>
        </li>
        <li className='nav__item'>
          <Link to='/' className='nav__link'>
            Hjem
          </Link>
        </li>
        <li className='nav__item'>
          <Link to='/contact' className='nav__link'>
            Kontakt oss
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
        &copy; Copyright 2023 av ExoTechWeb. Alle rettigheter er reservert.
      </p>
    </footer>
  );
}

export default Footer;
