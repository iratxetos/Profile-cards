// IMPORTAR ESTILOS
import "../stylesheets/Preview.scss";

const Preview = (props) => {

    return (
        <div >
            <section className="photo__container">

                <div className="photo__reset--container"
                    onClick={props.handleReset}>
                    {/* <i className="far fa-trash-alt"></i>
                     <p className='photo__reset--text'>Reset</p> */}

                    <ul className="photo__reset--menu">
                        <li className="photo__reset--text">
                            <i className="far fa-trash-alt"></i>
                        </li>
                        <li className="photo__reset--text">Reset</li>
                    </ul>
                </div>
                <div
                    className={`photo__card--container js-photo palette-${props.paletePreview}`}
                >
                    <div className="photo__card--rectangle"
                    ></div>


                    <p className="photo__card--name">{props.dataPreview.name === "" ? "Nombre Completo" : props.dataPreview.name}</p>
                    <p className="photo__card--frontend">{props.dataPreview.job === "" ? "Front-end developer" : props.dataPreview.job}</p>
                    <img
                        className='photo__card--photo' id='photo'
                        src={props.image}
                        alt='user'
                        title='user'
                        style={{ backgroundImage: `url(${props.image})` }}
                    />
                    <div className="photo__card--rrss">
                        <a href={props.dataPreview.phone === "" ? "" : `tel:${props.dataPreview.phone}`} id="telLink" target="_blank" rel="noreferrer">
                            <i className="fas fa-mobile-alt photo__card--rrss-icon"></i>
                        </a>
                        <a href={props.dataPreview.email === "" ? "" : `mailto:${props.dataPreview.email}`} id="emailLink" target="_blank" rel="noreferrer">
                            <i className="far fa-envelope photo__card--rrss-icon"></i>
                        </a>
                        <a href={props.dataPreview.linkedin === " " ? "" : `https://www.linkedin.com/${props.dataPreview.linkedin}`} id="linkedinLink" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in photo__card--rrss-icon"></i>
                        </a>
                        <a href={props.dataPreview.github === " " ? "" : `https://www.github.com/${props.dataPreview.github}`} id="githubLink" target="_blank" rel="noreferrer">
                            <i className="fab fa-github-alt photo__card--rrss-icon"></i>
                        </a>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Preview;