import "./about.styles.scss";
import { Link } from "react-router-dom";

function About() {
  return (
    <section class='about hide' id='1'>
      <div class='about__image-box   left-hide'>
        <img
          src={require("../../../img/photo1.avif")}
          alt=''
          class='about__img'
        />
      </div>
      <div class='about__text-box hide  right-hide'>
        <h2 class='heading-2 mb-ws'>Hei, Vi er</h2>
        <h1 class='heading-1 mb-md'>ExoTech</h1>
        <p class='paragraph  mb-sm'>
          Vi er et lite firma fra Trondheim, og vårt mål er å gi deg din drømme
          nettside. Du får komme med så mye inspill du vil til hvordan du ønsker
          at nettsiden din skal se ut. Nettsidene våre er lagd til å være lett
          navigerte og lett å finne når folk søker etter produktet ditt.
        </p>

        <p class='paragraph  mb-bg'>
          Du kan kontakte oss når som helst med raske responstider. Å ha en
          moderne nettside er en stor faktor i å gi kundene en positiv
          opplevelse når de leter etter noe du tilbyr. Vårt mål er å la deg
          promotere dine tjenester med en praktfull nettside.
        </p>

        <Link to='/contact' class='btn header__btn'>
          Kontakt oss
        </Link>
      </div>
    </section>
  );
}

export default About;
