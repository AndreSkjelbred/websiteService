import "./info.styles.scss"
import { IonIcon } from "@ionic/react";
import {callOutline} from "ionicons/icons";
import {mailOutline} from "ionicons/icons";

function Info(){
    return <div className="info">
    <h2 className="heading-2 mb-sm">How can we help you?</h2>
    <h4 className="heading-4 mb-bg">Here are a few ways to get in touch with us!</h4>

    <div className="info__griddy">
    <div className="info__box">
    <IonIcon icon={callOutline} className="info__icon"/>
    <p className="info__box-heading">Call us directly at:</p>
    <p className="info__phone-number">+47 405 20 665</p>
    </div>

    <div className="info__box">
    <IonIcon icon={mailOutline} className="info__icon"/>
    <p className="info__box-heading">Contact us through mail</p>
    <p className="info__mail">contact@exotechweb.com</p>
    </div>
    </div>
    </div>
}

export default Info;