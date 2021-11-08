import "../stylesheets/Share.scss";
import { useState } from "react";

const Share = (props) => {
  const [clicked, setClicked] = useState("NO");
  const [success, setSuccess] = useState("ERROR");
  const [error, setError] = useState('');


  const handleShareCard = () => {

    fetch("http://localhost:4001/card", {
      method: "POST",
      body: JSON.stringify(props.data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())

      .then((dataResponse) => {
        // Interpretar la respuesta de crear tarjeta

        setClicked("YES");


        if (dataResponse.success === true) {
          // Servidor responde que es bueno y nos da la url

          setError('');
          setSuccess(dataResponse.cardURL);
        } else {

          setSuccess(null);
          const fields = [];

          if (props.data.phone === '') {
            fields.push('Ups❕ 😓, debes rellenar completo tu móvil')
          }
          if (props.data.name === '') {
            fields.push('Ups❕ 😓, debes rellenar tu nombre')
          }
          if (props.data.job === '') {
            fields.push('Ups❕ 😓, debes rellenar tu profesión')
          }
          if (props.data.photo === '') {
            fields.push('Ups❕ 😓, debes rellenar tu foto')
          }
          if (props.data.email === '') {
            fields.push('Ups❕ 😓, debes rellenar tu email')
          }

          if (props.data.linkedin === '') {
            fields.push('Ups❕ 😓, debes rellenar tu linkedin')
          }

          if (props.data.github === '') {
            fields.push('Ups❕ 😓, debes rellenar tu github')
          }

          if (fields.length === 1) {
            setError(fields[0]);
          } else {
            setError('Ups❕ 😓, revisa todos los campos');
          }

        }
      });
  };

  return (
    <>
      <legend className="share">
        <div
          className="form__parameters"
          id="share"
          onClick={props.handleCollapsable}
        >
          <h2 className="form__title">
            <i className="fas fa-share-alt form__icon"></i>Comparte
          </h2>
          <i
            className={`fas fa-chevron-down share__arrow form__arrow js__collapsable ${props.arrowShare}`}
          ></i>
        </div>

        <fieldset
          className={` dropdown js__fieldset ${props.collapsableShare}`}
        >
          <button
            className="dropdown__button--create"
            onClick={handleShareCard}
          >
            <i className="far fa-address-card"></i> Crear tarjeta
          </button>
          <div
            className={`share__section--done  ${clicked === "NO" ? "hidden" : ""
              }`}
          >
            {success !== null ? (
              /* HTML DE QUE HA IDO BIEN */
              <>
                <h2 className="share__section--done__text js_undone">
                  La tarjeta ha sido creada:
                </h2>
                <a
                  className="share__section--done__link js_url"
                  href={success}
                  target="_blank" rel="noreferrer"
                >
                  {success}
                </a>

                <button className="share__section--done__button js_undone2">
                  <a
                    className="share__section--done__button--link js_twitter_link"
                    href={`https://twitter.com/intent/tweet?url=${success} `}
                    target="_blank" rel='noreferrer'

                  >
                    <i className="icon3 fab fa-twitter"></i> &nbsp; Compartir en
                    twitter
                  </a>
                </button>
              </>
            ) : (
              /* HTML DE QUE HA HABIDO UN ERROR */
              <>
                <h2 className="share__section--done__text js_undone">
                  No se ha podido crear la tarjeta
                </h2>
                <p>{error}</p>
              </>
            )}
          </div>
        </fieldset>
        <hr className="form__line" />
      </legend>
    </>
  );
};

export default Share;
