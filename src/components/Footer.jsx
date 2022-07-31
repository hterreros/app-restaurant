import React from 'react'

const Footer = () => {
  return (
    <div className="col-md-4 d-flex align-items-center">
      <a
        href="/"
        className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
      >
        <svg className="bi" width={30} height={24}>
          <use xlinkHref="#bootstrap" />
        </svg>
      </a>
      <span className="text-muted">© 2022 - Sabores &amp; Culinarios</span>
      <a href="#">
        <img src="images/facebook.png" className="iconos" />
      </a>
      <a href="#">
        <img src="images/instagram.PNG" className="iconos" />
      </a>
      <a href="#">
        <img src="images/whatsapp.PNG" className="iconos" />
      </a>
      {/* <img src="images/logo.png" className="abajo" /> */}
    </div>
  );
}

export default Footer