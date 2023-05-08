import "../header2/header2.styles.scss"

function Header2(){
    return <div className="header2">
    <div className="header2__text-box"><h2 className="heading-2 mb-ws">Contact us in</h2>
    <h2 className="heading-1 mb-bg">ExoTech</h2>
    <h3 className="heading-3 heading-3--gold">Reach out to us if you are interested</h3>
    </div>
    
    <img src={require("../../img/contact.webp")} alt="" className="header2__img" />
  </div>
}

export default Header2;