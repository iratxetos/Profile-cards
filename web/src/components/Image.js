import "../stylesheets/Form.scss";
import { useRef } from 'react';

const Image = (props) => {

    // Creamos una referencia al input file para poder leer su contenido más tarde
    const fileElement = useRef();

    // Creamos un lector de ficheros
    // FileReader es una funcionalidad nativa de JavaScript, búscala en Internet si te atreves
    const fr = new FileReader();

    // Cuando la usuaria selecciona una imagen se ejecuta esta función
    const handleFile = () => {
        // fileElement.current es literalmente el input file
        // Cogemos su propiedad files que es un array con todas las imagenes seleccionadas por la usuaria
        // Como solo queremos la primera imagen seleccionada cogemos el primer elemento de files
        const selectedFile = fileElement.current.files[0];

        // Si la usuaria ha seleccionado al menos una imagen selectedFile es diferente de undefined
        if (selectedFile) {
            // Por curiosidad mira lo que contiene la constante selectedFile
            console.log(selectedFile);

            // Guardamos el tamaño y el tipo de la imagen en el estado
            //setFileSize(selectedFile.size);
            //setFileType(selectedFile.type);

            // Le decimos al lector de ficheros que lea el fichero seleccionado por la usuaria
            fr.readAsDataURL(selectedFile);
            // Cuando esta acción termine fileReader lanzará el evento 'load'
        }
    };

    // Esta función se ejecuta cuando fileReader lanza el evento 'load'
    const getImage = () => {
        // Cuando la imagen ya está lista en fileReader.result tenemos su contenido
        // Hacemos lifting de este contenido hacia arriba
        props.handleImage(fr.result);
    };

    // Escuchamos el evento load de fileReader y cuando se lance lo manejamos con la función getImage
    fr.addEventListener('load', getImage);

    return (
        <>
            <label className="fill__form--label" htmlFor="photo photo__square">
                Imagen de perfil
            </label>

            <label htmlFor="imgselector" className="fill__form--input photo">
                Añadir imagen
                <input
                    ref={fileElement}
                    type="file"
                    id="imgselector"
                    name="imgselector"
                    className="hide--input js__input fill__form--input photo"
                    required
                    onChange={handleFile}
                />
            </label>

            <div className="fill__form--input photo__square"
                style={{ backgroundImage: `url(${props.image})` }}>
            </div>

        </>
    );
};

export default Image;
