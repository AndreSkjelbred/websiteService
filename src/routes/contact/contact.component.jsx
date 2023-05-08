import { Fragment } from "react";
import "./contact.styles.scss";
import { Helmet } from "react-helmet-async";
import Sidebar from "../../components/sidebar/sidebar.component";
import Header2 from "../../components/header2/header2.component";
import Info from "../../components/contact-info/info.component";
import Footer from "../../components/footer/footer.component";

function Contact() {
  return (
    <fragment>
      <Helmet>
        <title>ExoTech &mdash; Contact Us Now</title>
        <meta
          name='description'
          content='Get in touch with us at ExoTech! Our contact page provides all the information you need to reach out to our team. You can reach out to us by finding our phone number or our email address. We are always happy to help with any questions or concerns you may have. Contact us today!'
        />
        {/* <link rel='canonical' href='/https://exotechweb.com' /> */}
      </Helmet>

      <div className='contact'>
        <Sidebar />

        <Header2 />

        <Info />

        <Footer />
      </div>
    </fragment>
  );
}

export default Contact;
