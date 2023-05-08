import { Fragment } from "react";
import "../contact/contact.styles.scss";
import { Helmet } from "react-helmet-async";
import Sidebar from "../../components/Norwegian/sidebarNorwegian/sidebar.component";
import Header2 from "../../components/Norwegian/header2Norwegian/header2.component";
import Info from "../../components/Norwegian/contact-infoNorwegian/info.component";
import Footer from "../../components/Norwegian/footerNorwegian/footer.component";

function ContactNorwegian() {
  return (
    <fragment>
      <Helmet>
        <title>ExoTech &mdash; Kontakt oss nå</title>
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

export default ContactNorwegian;
