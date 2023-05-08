import "./services.styles.scss";
import { IonIcon } from "@ionic/react";
import { phonePortraitOutline } from "ionicons/icons";
import { timeOutline } from "ionicons/icons";
import { chatbubblesOutline } from "ionicons/icons";
import { desktopOutline } from "ionicons/icons";
import { earthOutline } from "ionicons/icons";
import { lockClosedOutline } from "ionicons/icons";

function Services() {
  return (
    <section class='services' id='2'>
      <h2 class='heading-2 mb-bg'>Hva du mottar hos oss</h2>

      <div class='services__grid hide'>
        <div class='feature left-hide'>
          <IonIcon className='feature__icon' icon={phonePortraitOutline} />
          <h4 class='heading-4'>Responsiv nettside</h4>
          <p class='paragraph feature__paragraph'>
            Alle nettsider må fungere like bra og se like bra ut uavhengig om
            kunden surfer på mobil eller pc. Våre nettsider er responsive og
            tilpasser seg for å se best mulig ut på gitt enhet. Uavhengig av
            hvilken enhet kunden din bruker, kommer nettsiden din til å se like
            proff ut uansett.
          </p>
        </div>
        <div class='feature top-hide '>
          <IonIcon className='feature__icon' icon={timeOutline} />
          <h4 class='heading-4'>Ny nettside innen kort tid </h4>
          <p class='paragraph feature__paragraph'>
            Med kundesupport som alltid er klart for å svare på dine
            forespørsler får du svar innen kort tid. Våre raske resoponstider
            lar utviklerne muligheten til å sette i gang med din nettside med en
            gang. Utviklerne jobber hardt hver dag for å sørge for at du får
            nettsiden din så fort som mulig.
          </p>
        </div>
        <div class='feature right-hide '>
          <IonIcon className='feature__icon' icon={chatbubblesOutline} />
          <h4 class='heading-4'>Åpen kommunikasjon</h4>
          <p class='paragraph feature__paragraph'>
            Du vil få tilgang til mange kontaktmetoder inkludert direkte kontakt
            med hovedutvikleren for nettsiden din. Forespørslene dine er viktig
            for oss. For å sørge for at du får presist den nettsiden du vil ha
            kan du spørre om endringer til nettsiden din når som helst.
          </p>
        </div>
        <div class='feature left-hide '>
          <IonIcon className='feature__icon' icon={desktopOutline} />
          <h4 class='heading-4'>Vi bruker javascript, python, react og sass</h4>
          <p class='paragraph feature__paragraph'>
            Våre hovedspråk og frameworks er JavaScript, React, Sass, NodeJS,
            Flask, Python og NextJS. Frontend arbeidet er hovedsaklig gjort med
            JavaScript, React og Sass <br /> Hvis nettsiden din krever bruk av
            databaser eller annen backend arbeid bruker vi Python, NodeJS og
            NextJS til det.
          </p>
        </div>
        <div class='feature bottom-hide '>
          <IonIcon className='feature__icon' icon={earthOutline} />
          <h4 class='heading-4'>Vi leverer overalt</h4>
          <p class='paragraph feature__paragraph'>
            Selv om vi er bosatt i Norge, har vi klienter som kommer fra mange
            plasser rundt omkring i verden og det er null problem. Hvis firmaet
            ditt ønsker en engelsk nettside kan vi ordne det for deg!
          </p>
        </div>
        <div class='feature right-hide '>
          <IonIcon className='feature__icon' icon={lockClosedOutline} />
          <h4 class='heading-4'>Sikre betalingsmetoder</h4>
          <p class='paragraph feature__paragraph'>
            Hvis nettsiden din krever betalingsmetoder for produkter så bruker
            vi trygge metoder for å ordne det for deg. Vi kan bruke ulike
            metoder som Vipps, PayPal og Klarna for å nevne noen få.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
