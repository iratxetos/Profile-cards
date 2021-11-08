import logoAdalab from "../images/logo-adalab.png";
// IMPORTAR ESTILOS
import "../stylesheets/Footer.scss";

const Footer = (props) => {

    return (
        < div >
            <footer className="footer">
                <h6 className="footer__copyright">
                    ochoPinocho for awesome profile-cards @2021
                </h6>
                <img
                    className="footer__image"
                    src={logoAdalab}
                    alt="logo Adalab"
                    title="Logo de Adalab"
                />
            </footer>
        </div >
    );
};

export default Footer;