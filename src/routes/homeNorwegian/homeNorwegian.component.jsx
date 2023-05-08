import { Fragment } from "react";
import "../home/home.styles.scss";
import { Helmet } from "react-helmet-async";
import Sidebar from "../../components/Norwegian/sidebarNorwegian/sidebar.component";
import Header from "../../components/Norwegian/headerNorwegian/header.component";
import About from "../../components/Norwegian/aboutNorwegian/about.component";
import Services from "../../components/Norwegian/servicesNorwegian/services.component";
import Portfolio from "../../components/Norwegian/portfolioNorwegian/portfolio.components";
import Footer from "../../components/Norwegian/footerNorwegian/footer.component";

function HomeNorwegian() {
  return (
    <Fragment>
      <Helmet>
        <title>ExoTech &mdash; Get Your New Website Now</title>
        <meta
          name='description'
          content='Do you need a new website? We in ExoTech make sure our clients get modern looking, responsive and the most user friendly websites. Start your journey with a better website now!'
        />
        {/*  <link rel='canonical' href='https://exotechweb.com' /> */}
      </Helmet>

      <div className='app'>
        <Sidebar />

        <Header />

        <About />

        <Services />

        <Portfolio />

        <Footer />
      </div>
    </Fragment>
  );
}

export default HomeNorwegian;
