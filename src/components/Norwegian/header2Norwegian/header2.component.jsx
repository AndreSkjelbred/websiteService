import "./header2.styles.scss";

function Header2() {
  return (
    <div className='header2'>
      <div className='header2__text-box'>
        <h2 className='heading-2 mb-ws'>Kontakt oss i</h2>
        <h2 className='heading-1 mb-bg'>ExoTech</h2>
        <h3 className='heading-3 heading-3--gold'>
          Send melding, ring eller epost om du er interessert
        </h3>
      </div>

      <img
        src={require("../../../img/contact.webp")}
        alt=''
        className='header2__img'
      />
    </div>
  );
}

export default Header2;
