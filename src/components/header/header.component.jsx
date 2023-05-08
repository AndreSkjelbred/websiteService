import "./header.styles.scss";
import { Link } from "react-router-dom";

function Header() {
  function navLinkPressHandler(e) {
    const data = e.target.getAttribute("data");

    const selectedElement = document.getElementById(data.toString());

    selectedElement.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div class='header' id='4'>
      <img
        src={require("../../img/logo3.png")}
        alt='logo'
        class='header__logo'
      />
      <h1 class='heading-1 heading-1--gold'>Norway</h1>
      <h3 class='heading-3 heading-3--gold'>
        A small business for small businesses
      </h3>

      <Link to='/contact' class='btn header__btn'>
        Get started now
      </Link>
      <Link
        onClick={navLinkPressHandler}
        data='1'
        class='header__link header__btn'
      >
        Learn more &rarr;
      </Link>
    </div>
  );
}

export default Header;
