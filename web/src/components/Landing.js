import "../stylesheets/App.scss";
import { Link } from "react-router-dom";

const Landing = () => {

    return (
      <>
        <section className="main__section1 section1">
        <div className="section1__img"></div>
       </section>
       <section className="main__section2 section2">
        <h1 className="section2__title">Crea tu tarjeta de visita</h1>
        <p className="section2__text">
          Crea mejores contactos profesionales de forma fácil y cómoda
        </p>
       </section>
       <section className="main__section3 section3">
        <ul className="section3__list list">
          <li className="list__item item1">
            <i className="list__img far fa-object-ungroup"></i>
            <span>Diseña</span>
          </li>
       
          <li className="list__item item2">
            <i className="list__img far fa-keyboard"></i> <span>Rellena</span>
          </li>
       
          <li className="list__item item3">
            <i className="list__img fas fa-share-alt"></i> <span>Comparte</span>
          </li>
        </ul>
       </section>
       <Link to="/cards">
       <section className="main__section4 section4">
        <a className="section4__nav" href="./form.html">
          <button className="section4__button">comenzar</button>
        </a>
       </section>
       </Link>
      </>
        
    );
};

export default Landing;











