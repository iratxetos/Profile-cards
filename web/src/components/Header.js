import tarjetasMolonasSvg from "../images/tarjetas-molonas.svg";
import { Link } from "react-router-dom";
// IMPORTAR ESTILOS
import "../stylesheets/Header.scss";

const Header = (props) => {

    return (
        <  >
            <header className="form__header" >
                <div>
                    <Link to="/">
                
                    <img
                        className="form__header--image"
                        src={tarjetasMolonasSvg}
                        alt="Awesome cards"
                    />
                </Link>
                </div>
                
            </header>
        </ >
    );
};

export default Header;