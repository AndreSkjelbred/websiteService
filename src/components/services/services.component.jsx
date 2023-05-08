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
      <h2 class='heading-2 mb-bg'>What you recieve with us</h2>

      <div class='services__grid hide'>
        <div class='feature left-hide'>
          <IonIcon className='feature__icon' icon={phonePortraitOutline} />
          <h4 class='heading-4'>Responsive websites</h4>
          <p class='paragraph feature__paragraph'>
            Every website needs to be accessible and look just as good
            regardless if your clients are surfing on a mobile device or a
            computer. Our websites are responsive and will adapt to best suit
            the device it is accessed on. Regardless of the device your client
            is using, we can guarantee that the experience will remain at a top
            level.
          </p>
        </div>
        <div class='feature top-hide '>
          <IonIcon className='feature__icon' icon={timeOutline} />
          <h4 class='heading-4'>New website in a few days</h4>
          <p class='paragraph feature__paragraph'>
            With a support team that is constantly on notice for potential
            queries we are able to respond to your request within an hour. Our
            fast response times allow our developers to get started on your
            website straight away. The developers are spending countless hours
            every day to make sure you get your website fast.
          </p>
        </div>
        <div class='feature right-hide '>
          <IonIcon className='feature__icon' icon={chatbubblesOutline} />
          <h4 class='heading-4'>Open communication</h4>
          <p class='paragraph feature__paragraph'>
            You will have access to many ways of communication and we have a
            support team ready to answer and get in touch with the developer.
            Your requests are important to us and to make sure you get exactly
            the website you want you can request changes to your website
            whenever you want.
          </p>
        </div>
        <div class='feature left-hide '>
          <IonIcon className='feature__icon' icon={desktopOutline} />
          <h4 class='heading-4'>We use JavaScript, HTML, CSS & Python</h4>
          <p class='paragraph feature__paragraph'>
            Our main languages and frameworks are Javascript, React, CSS,
            NodeJS, Flask and Python. The frontend work on the websites is
            mainly done using Javascript, React and CSS. <br /> However, if your
            website requires storage in databases or any type of backend work we
            use Python and NodeJS to accomplish that.
          </p>
        </div>
        <div class='feature bottom-hide '>
          <IonIcon className='feature__icon' icon={earthOutline} />
          <h4 class='heading-4'>We deliver everywhere</h4>
          <p class='paragraph feature__paragraph'>
            Even though we are based in Norway, we have a lot of clients coming
            from all over the world and that is no issue. Regardless of where
            you want to host your website we will do it for you!
          </p>
        </div>
        <div class='feature right-hide '>
          <IonIcon className='feature__icon' icon={lockClosedOutline} />
          <h4 class='heading-4'>Secure payments</h4>
          <p class='paragraph feature__paragraph'>
            If your website contains purchasable services, we use safe and cheap
            methods to solve it for you. We may use different methods like
            Stripe, Vipps or PayPal just to name a few.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
