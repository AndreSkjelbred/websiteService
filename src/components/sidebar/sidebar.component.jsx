import "./sidebar.styles.scss";
import { IonIcon } from "@ionic/react";
import { logoFacebook } from "ionicons/icons";
import { logoInstagram } from "ionicons/icons";
import { logoTwitter } from "ionicons/icons";
import { logoDiscord } from "ionicons/icons";
import { logoSnapchat } from "ionicons/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeLang } from "../../store/redux/language";
import { useState } from "react";

function Sidebar() {
  function navLinkPressHandler(e) {
    console.log(window.location.href);
    if (!window.location.href === "/") window.location.href = "/";

    const data = e.target.getAttribute("data");

    const selectedElement = document.getElementById(data.toString());

    selectedElement.scrollIntoView({ behavior: "smooth" });
  }

  const dispatch = useDispatch();
  function setNorwegian() {
    dispatch(changeLang("no"));
  }

  const [mouseHover, setMouseHover] = useState(false);

  function showLang() {
    setMouseHover(true);
  }
  function hideLang() {
    setMouseHover(false);
  }

  return (
    <div class='sidebar'>
      <div class='sidebar__content'>
        <div class='sidebar__heading'>
          <Link to='/'>
            <img
              src={require("../../img/logoside.png")}
              alt=''
              className='sidebar__logo'
            />
          </Link>
        </div>

        <div className='sidebar__language'>
          <div
            className='sidebar__default-lang  sidebar__selectedEng'
            onMouseEnter={showLang}
            onMouseLeave={hideLang}
          >
            English
          </div>
          <ul
            className={`sidebar__flag-list ${!mouseHover && "hidden"}`}
            onMouseEnter={showLang}
            onMouseLeave={hideLang}
          >
            <li className='sidebar__flag-item'>
              <div className='sidebar__language-switcher '>
                <img
                  className='flag-img'
                  alt='changetoenglish'
                  src={require("../../img/ukround.png")}
                />
                <p>English</p>
              </div>
            </li>
            <li className='sidebar__flag-item' onClick={setNorwegian}>
              <div className='sidebar__language-switcher '>
                <img
                  className='flag-img'
                  alt='changetoenglish'
                  src={require("../../img/norwayround.png")}
                />
                <p>Norsk</p>
              </div>
            </li>
          </ul>
        </div>

        <ul class='sidebar__nav'>
          <li class='sidebar__nav--item' onClick={navLinkPressHandler}>
            <Link to='/' class='sidebar__nav--link' data='1'>
              About us
            </Link>
          </li>
          <li class='sidebar__nav--item' onClick={navLinkPressHandler}>
            <Link to='/' data='2' class='sidebar__nav--link'>
              Services
            </Link>
          </li>
          <li class='sidebar__nav--item' onClick={navLinkPressHandler}>
            <Link to='/' class='sidebar__nav--link' data='3'>
              Portfolio
            </Link>
          </li>
          <li class='sidebar__nav--item'>
            <Link to='/contact' class='sidebar__nav--link'>
              Contact
            </Link>
          </li>
        </ul>
        <div class='sidebar__socials'>
          <IonIcon className='sidebar__icon' icon={logoFacebook} />
          <IonIcon className='sidebar__icon' icon={logoInstagram} />
          <IonIcon className='sidebar__icon' icon={logoTwitter} />
          <IonIcon className='sidebar__icon' icon={logoDiscord} />
          <IonIcon className='sidebar__icon' icon={logoSnapchat} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
