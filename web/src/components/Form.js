// IMPORTAR ESTILOS
import "../stylesheets/Form.scss";
import Share from "./share";
import Image from "./Image";

const Form = (props) => {


  return (
    <div>
      <form className="form" action="" onSubmit={ev => ev.preventDefault()}>
        {/* FORMULARIO - DISEÑO*/}
        <legend className="design__legend">
          <div
            className="form__parameters"
            id="design"
            onClick={props.handleCollapsable}
          >
            <h2 className="form__title">
              <i className="far fa-object-ungroup form__icon"></i>Diseña
            </h2>
            <i
              className={`fas fa-chevron-down design__arrow form__arrow js__collapsable ${props.arrowDesign}`}
            ></i>
          </div>

          <fieldset
            className={`design__check js__fieldset ${props.collapsableDesign}`}
          >
            <label className="design__check--colors" htmlFor="color">
              colores
            </label>

            <section className="design__check--section">
              <input
                // defaultChecked={true}
                onChange={props.handleChangeColor}
                className="palette"
                type="radio"
                id="palette1"
                name="color"
                value="1"
                checked={props.data.palette === 1}

              />

              <section className="design__check--section__box">
                <div className="box box__1"></div>
                <div className="box box__2"></div>
                <div className="box box__3"></div>
              </section>
            </section>

            <section className="design__check--section">
              <input
                onChange={props.handleChangeColor}
                className="palette"
                type="radio"
                id="palette2"
                name="color"
                value="2"
                checked={props.data.palette === 2}

              />

              <section className="design__check--section__box">
                <div className="box box__4"></div>
                <div className="box box__5"></div>
                <div className="box box__6"></div>
              </section>
            </section>
            <section className="design__check--section">
              <input
                onChange={props.handleChangeColor}
                className="palette"
                type="radio"
                id="palette3"
                name="color"
                value="3"
                checked={props.data.palette === 3}
              />

              <section className="design__check--section__box">
                <div className="box box__7"></div>
                <div className="box box__8"></div>
                <div className="box box__9"></div>
              </section>
            </section>

            <hr />
          </fieldset>
          <hr className="form__line" />
        </legend>

        {/* FORMULARIO - RELLENA*/}
        <legend className="fill">
          <div
            className="form__parameters"
            id="fill"
            onClick={props.handleCollapsable}
          >
            <h2 className="form__title">
              <i className="far fa-keyboard form__icon"></i>Rellena
            </h2>
            <i
              className={`fas fa-chevron-down fill__arrow form__arrow js__collapsable ${props.arrowFill}`}
            ></i>
          </div>

          <fieldset
            className={`fill__form js__fieldset ${props.collapsableFill}`}
          >
            <label className="fill__form--label" htmlFor="name">
              {" "}
              Nombre Completo
            </label>
            <input
              className="fill__form--input name"
              id="fullName"
              type="text"
              placeholder=" Ej: Sally Jill"
              onChange={props.handleInput}
              value={props.data.name}
              required
            />

            <label className="fill__form--label" htmlFor="job">
              {" "}
              Puesto
            </label>
            <input
              className="fill__form--input job"
              id="job"
              type="text"
              placeholder=" Ej: Front-end unicorn"
              onChange={props.handleInput}
              value={props.data.job}
              required
            />

            <Image handleImage={props.handleImage} image={props.image} />
            <label className="fill__form--label" htmlFor="email">
              {" "}
              Email
            </label>
            <input
              className="fill__form--input email"
              id="emailFill"
              type="email"
              placeholder=" Ej: sally-hill@gmail.com"
              onChange={props.handleInput}
              value={props.data.email}
              required
            />

            <label className="fill__form--label" htmlFor="phone">
              {" "}
              Teléfono
            </label>
            <input
              className="fill__form--input tel"
              id="telFill"
              type="tel"
              placeholder=" Ej: 555-55-55-55"
              onChange={props.handleInput}
              value={props.data.phone}
              required
            />

            <label className="fill__form--label" htmlFor="linkedin">
              {" "}
              Linkedin
            </label>
            <input
              className="fill__form--input linkedin"
              id="linkedinFill"
              type="text"
              placeholder=" Ej: sally.hill"
              onChange={props.handleInput}
              value={props.data.linkedin}
              required
            />

            <label className="fill__form--label" htmlFor="github">
              {" "}
              Github
            </label>
            <input
              className="fill__form--input github"
              id="githubFill"
              type="text"
              placeholder=" Ej: sally-hill"
              onChange={props.handleInput}
              value={props.data.github}
              required
            />
          </fieldset>
          <hr className="form__line" />
        </legend>

        {/* FORMULARIO - COMPARTE*/}

        <Share data={props.data} />
      </form>
    </div>
  );
};

export default Form;
