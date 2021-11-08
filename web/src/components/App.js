//IMPORTAT ESTILOS
import "../stylesheets/App.scss";

//IMPORTAR HOOKS
import React, { useState } from "react";

//importar rutas
import { Switch, Route } from 'react-router-dom';

//IMPORTAR IMÁGENES
import defaultImage from '../images/photo.jpg';

//IMPORTAR COMPONENTES
import Header from "./Header";
import Preview from "./Preview";
import Form from "./Form";
import Footer from "./Footer";
import Landing from "./Landing";


//FUNCION PRINCIPAL
function App() {
  // VARIABLE DE ESTADO DE PALETAS
  const [palette, setPalette] = useState('');

  //VARIABLE DE ESTADO DE ELEMENTOS DEL FORM

  //VARIABLE DE ESTADO DE FOTO
  const [image, setImage] = useState(defaultImage);

  // VARIABLE DE ESTADO DE PREVIEW
  const [data, setData] = useState({
    palette: 1,
    name: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    photo: { defaultImage }
  });

  // VARIABLE DE ESTADO DE COLLAPSABLES
  const [collapsableDesign, deployCollapsableDesign] = useState("");
  const [arrowDesign, rotateArrowDesign] = useState("");
  const [collapsableFill, deployCollapsableFill] = useState("hidden");
  const [arrowFill, rotateArrowFill] = useState("");
  const [collapsableShare, deployCollapsableShare] = useState("hidden");
  const [arrowShare, rotateArrowShare] = useState("");
  const [collapsableShareLink, deployCollapsableSharelink] = useState("hidden");

  // ESTADO URL

  // EVENTO CREAR TARJETA

  //EVENTO CARGAR IMAGEN
  const handleImage = (userImage) => {
    setData({ ...data, photo: userImage });
    setImage(userImage);
  };

  //EVENTO COLLAPSABLE SHARE LINK
  const handleCollapsableShareLink = (ev) => {
    deployCollapsableSharelink("");

    ev.preventDefault();
  };

  //EVENTO COLLAPSABLE
  const handleCollapsable = (ev) => {
    const clickSection = ev.currentTarget.id;

    if (clickSection === "design") {
      deployCollapsableDesign("");
      rotateArrowDesign("");
      deployCollapsableFill("hidden");
      rotateArrowFill("form__arrow--rotate");
      deployCollapsableShare("hidden");
      rotateArrowShare("form__arrow--rotate");
    } else if (clickSection === "fill") {
      deployCollapsableFill("");
      rotateArrowFill("");
      deployCollapsableShare("hidden");
      rotateArrowShare("form__arrow--rotate");
      deployCollapsableDesign("hidden");
      rotateArrowDesign("form__arrow--rotate");
    } else if (clickSection === "share") {
      deployCollapsableShare("");
      rotateArrowShare("");
      deployCollapsableDesign("hidden");
      rotateArrowDesign("form__arrow--rotate");
      deployCollapsableFill("hidden");
      rotateArrowFill("form__arrow--rotate");
    }
  };

  // FUNCION MANEJADORA DE PINTAR PREVIEW EN BASE A LAS PALETAS SELECCIONADAS
  const handleChangeColor = (ev) => {
    setPalette(ev.target.value);
    setData({ ...data, palette: parseInt(ev.target.value) })
  };

  // FUNCION MANEJADORA DE REYENAR PREVIEW EN BASE A LOS INPUTS RELLENADOS
  const handleInput = (ev) => {
    const whichInput = ev.currentTarget.id;

    switch (whichInput) {
      case "fullName":
        setData({
          ...data, // Spread operator
          name: ev.currentTarget.value,
        });
        break;
      case "job":
        setData({
          ...data, // Spread operator
          job: ev.currentTarget.value,
        });
        break;
      case "telFill":

        setData({
          ...data, // Spread operator
          phone: ev.currentTarget.value,
        });
        break;
      case "emailFill":
        setData({
          ...data, // Spread operator
          email: ev.currentTarget.value,
        });
        break;
      case "linkedinFill":

        setData({
          ...data, // Spread operator
          linkedin: ev.currentTarget.value,
        });
        break;
      case "githubFill":
        setData({
          ...data, // Spread operator
          github: ev.currentTarget.value,
        });
        break;
      default:
        console.error("opcionNoValida");
    }
  };

  //RESET
  const clearState = () => {
    setData({
      palette: 1,
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: { defaultImage },
    });
    setPalette(1);
  }

  //FUNCION MANEJADORA RESET
  const handleReset = () => {
    clearState();
    setImage(defaultImage);
  }

  //HTML Y PARTE RENDERIZADA
  return (
    
      <div className="page">
        <Switch>
        <Route exact path="/">
        <div className="main">
          <Landing />
          
        </div>
      </Route>
        <Route path="/cards">
      <div className="App">
        <div className="page">
          <Header />

          {/* MAIN*/}
          <main className="card">
            {/* PREVIEW*/}
            <Preview
              dataPreview={data}
              paletePreview={palette}
              handleReset={handleReset}
              image={image}
            />

            {/* FORM*/}
            <Form
              data={data}
              handleCollapsable={handleCollapsable}
              arrowDesign={arrowDesign}
              collapsableDesign={collapsableDesign}
              handleChangeColor={handleChangeColor}
              arrowFill={arrowFill}
              collapsableFill={collapsableFill}
              handleImage={handleImage}
              image={image}
              handleInput={handleInput}
              arrowShare={arrowShare}
              collapsableShare={collapsableShare}
              collapsableShareLink={collapsableShareLink}
              handleCollapsableShareLink={handleCollapsableShareLink}
            />
          </main>
         <Footer />
           </div>
        </div>
        
         </Route>
      
          {/* FOOTER*/}
          
       </Switch>
       
      </div>
    
  );
}

export default App;
