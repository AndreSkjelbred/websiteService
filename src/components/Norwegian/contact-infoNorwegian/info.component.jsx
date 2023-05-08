import "./info.styles.scss";
import { IonIcon } from "@ionic/react";
import { callOutline } from "ionicons/icons";
import { mailOutline } from "ionicons/icons";

function Info() {
  return (
    <div className='info'>
      <h2 className='heading-2 mb-sm'>Hvordan kan vi hjelpe deg?</h2>
      <h4 className='heading-4 mb-bg'>Her er noen måter å kontakte oss med!</h4>

      <div className='info__griddy'>
        <div className='info__box'>
          <IonIcon icon={callOutline} className='info__icon' />
          <p className='info__box-heading'>Ring oss direkte:</p>
          <p className='info__phone-number'>+47 405 20 665</p>
        </div>

        <div className='info__box'>
          <IonIcon icon={mailOutline} className='info__icon' />
          <p className='info__box-heading'>Kontakt oss gjennom epost</p>
          <p className='info__mail'>contact@exotechweb.com</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
