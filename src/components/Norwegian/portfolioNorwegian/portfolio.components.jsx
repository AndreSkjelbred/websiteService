import "./portfolio.styles.scss";

function Portfolio() {
  return (
    <section class='portfolio' id='3'>
      <div class='portfolio__text-box'>
        <h2 class='heading-2 mb-sm'>Portefølje</h2>
        <p class='portfolio__description mb-md'>Klikk for å åpne hele siden</p>
      </div>
      <div class='portfolio__websites hide'>
        <div class='portfolio__website-1 left-hide first-rank'>
          <a
            href='https://trondheimpsykolog.no/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={require("../../../img/website-4.png")}
              alt=''
              class='portfolio__img'
            />
          </a>
          <div className='portfolio__website-description'>
            <h4 className='heading-4 mb-ws'>Psykolog Trondheim</h4>
            <p className='portfolio__paragraph'>
              Vi lagde denne nettsiden for en privat psykolog. Denne nettsiden
              har tjenester som f.eks lar kunden fylle inn et skjema for å sende
              en epost til eieren. Palettet brukt på nettsiden er bygd klientens
              logo og personlig preferanse. Den inneholder også SEO arbeid som
              gjør at rangerer høyere på Google og får et høyere antall søkere.
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
              src={require("../../../img/website-9.png")}
              alt=''
              class='portfolio__img'
            />
          </a>
          <div className='portfolio__website-description'>
            <h4 className='heading-4 mb-ws'>DreShoppy</h4>
            <p className='portfolio__paragraph'>
              Dette er en online butikk prototype. Butikken inneholder
              muligheter for å logge seg inn og ut i tilegg til autentisering.
              Den lar også brukere legge til produkter i handlekurven sin, samt
              besøke en oversiktlig side av handlekurven sin.
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
              src={require("../../../img/website-2.png")}
              alt=''
              class='portfolio__img'
            />
          </a>

          <div className='portfolio__website-description'>
            <h4 className='heading-4 mb-ws'>Hotel Booking</h4>
            <p className='portfolio__paragraph'>
              Denne prototypen har vi lagd for å vise frem design ferdighetene
              våre. Nettsiden er ikke funksjonell ettersom det kun er en
              prototype
            </p>
          </div>
        </div>

        <div class='portfolio__website-1 right-hide second-rank'>
          <a
            href='https://realestateprototype.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <img
              src={require("../../../img/website-11.png")}
              alt=''
              class='portfolio__img'
            />
          </a>
          <div className='portfolio__website-description'>
            <h4 className='heading-4 mb-ws'>Real Estate</h4>
            <p className='portfolio__paragraph'>
              Dette er en eiendom nettside. Den framviser ulike hjem og har et
              moderne design. Menybaren er simpel og gjør det lett å navigere
              siden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
