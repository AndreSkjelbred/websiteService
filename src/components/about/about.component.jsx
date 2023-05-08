import "./about.styles.scss";
import { Link } from "react-router-dom";

function About() {
  return (
    <section class='about hide' id='1'>
      <div class='about__image-box   left-hide'>
        <img src={require("../../img/photo1.avif")} alt='' class='about__img' />
      </div>
      <div class='about__text-box hide  right-hide'>
        <h2 class='heading-2 mb-ws'>Hello, we are</h2>
        <h1 class='heading-1 mb-md'>ExoTech</h1>
        <p class='paragraph  mb-sm'>
          A small company located in Trondheim, Norway, designed to help you
          reach your goal of a dream website. You can have as much input as you
          want with our top level developers doing their very best to make sure
          your website turns out exactly as you want. Our websites are designed
          to be easy to find and rank highly when people search for your
          service.
        </p>

        <p class='paragraph  mb-bg'>
          You can contact us whenever you want and request changes to your
          website with extremely fast response times. Having a modern website at
          a top level is crucial for clients when they are browsing. Our aim is
          to enable you to promote your services with a fantastic website.
        </p>

        <Link to='/contact' class='btn header__btn'>
          Contact us
        </Link>
      </div>
    </section>
  );
}

export default About;
