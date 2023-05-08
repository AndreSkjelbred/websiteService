import { Link } from "react-router-dom";
import "./portfolio.styles.scss";

function Portfolio() {
  return (
    <section class='portfolio' id='3'>
      <div class='portfolio__text-box'>
        <h2 class='heading-2 mb-sm'>Portfolio</h2>
        <p class='portfolio__description mb-md'>Click to open full site</p>
      </div>
      <div class='portfolio__websites hide'>
        <div class='portfolio__website-1 left-hide first-rank'>
          <a
            href='https://trondheimpsykolog.no/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={require("../../img/website-4.png")}
              alt=''
              class='portfolio__img'
            />
          </a>
          <div className='portfolio__website-description'>
            <h4 className='heading-4 mb-ws'>Psykolog Trondheim</h4>
            <p className='portfolio__paragraph'>
              We made this website for a private therapy company. This website
              contains a feature allowing the user to send an email by filling
              out a form. The website palette is designed around the clients
              logo and personal preference. It also includes SEO work resulting
              in a boost of google searches and google site ranking.
            </p>
          </div>
        </div>
        <div class='portfolio__website-1 right-hide first-rank'>
          <a
            href='https://dreshop.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={require("../../img/website-9.png")}
              alt=''
              class='portfolio__img'
            />
          </a>
          <div className='portfolio__website-description'>
            <h4 className='heading-4 mb-ws'>DreShoppy</h4>
            <p className='portfolio__paragraph'>
              This is an ecommerce store prototype. The store includes features
              such as login, logout and authorisation. It also allows the user
              to add items to the cart and proceed to the checkout page.{" "}
            </p>
          </div>
        </div>
        <div class='portfolio__website-1 left-hide second-rank'>
          <a
            href='https://hotelbookingprototype.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={require("../../img/website-2.png")}
              alt=''
              class='portfolio__img'
            />
          </a>

          <div className='portfolio__website-description'>
            <h4 className='heading-4 mb-ws'>Hotel Booking</h4>
            <p className='portfolio__paragraph'>
              This is a hotel booking app created to showcase our design skills.
              The website is not functional as it is a prototype.{" "}
            </p>
          </div>
        </div>

        <div class='portfolio__website-1 right-hide second-rank'>
          <a
            href='https://realestateprototype.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            {" "}
            <img
              src={require("../../img/website-11.png")}
              alt=''
              class='portfolio__img'
            />
          </a>
          <div className='portfolio__website-description'>
            <h4 className='heading-4 mb-ws'>Real Estate</h4>
            <p className='portfolio__paragraph'>
              This website is a prototype for real estate. It showcases
              different homes and contains an aesthetically pleasing design. The
              menu bar is nicely designed and makes navigation through the
              webpage easy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
