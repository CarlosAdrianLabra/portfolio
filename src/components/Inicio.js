import React from 'react'
import './Inicio.css'
import imagen2 from '../assests/Relleno3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faPython, faReact, faNodeJs, faGitSquare, faGithub, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faTerminal } from '@fortawesome/free-solid-svg-icons'

function Inicio() {
  return (
    <div>
      <div className='foto'>
        <h1 className='nombre'>Carlos Adrián Labra Granados</h1>
        <h2 className='profecion'>Web Developer</h2>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className='container'>
        <div className='row'>
        <h1>¡Hola!</h1>
        </div>
        <div className='row'>
          <div className='col-md-6 .offset-md-3'>

            <p>Soy un desarrollador que va empezando su camino profesional, localizado en la ciudad de México,
               con pasión por desarrollar proyectos nuevos y aprender todos los días.</p>

            <br></br>

            <p>Solucionador de problemas, persona organizada y con gran atención a los detalles, tengo un gusto
               muy grande por los videojuegos, anime y el voleibol, he desarrollado proyectos pequeños y medianos 
               para emprendedores y empresas pequeñas.</p>

            <br></br>

            <p>Tengo interés por el frontend, backend y trabajar en proyectos ambiciosos con personas positivas.</p>

          </div>
          <div className='col-md-6 .offset-md-3 text-center frase-inicio'>

            <strong>"Puedes centrarte en las barreras</strong>

            <br></br>

            <strong> o bien en escalar el muro</strong>

            <br></br>

            <strong>y redefinir el problema."</strong>

          </div>
        </div>
        <br></br>
        <div className='row'>
        <img className='foto2' src={imagen2} alt="Imagen de codigo"/>
        </div>
        <br></br>
        <div className='row'>
          <div className='col-md-6 .offset-md-3'>

            <h1>Habilidades y experiencia</h1>

            <p>Tengo una licenciatura en Ing. En sistemas computacionales, cuento con experiencia en el 
              desarrollo backend y frontend, he trabajado con empresas pequeñas y medianas para desarrollar hubs, 
              puntos de venta y tiendas en línea, usando tecnologías como <strong>Django</strong>, 
              <strong> Python</strong>, <strong> Bootstrap</strong> y control de versiones con <strong>git</strong> y <strong>github</strong>.</p>

            <br></br>

            <p>También me gusta desarrollar proyectos por mi cuenta para practicar, como una aplicación del precio 
              de criptomonedas o incluso ésta página de portafolio, que fue construida con <strong>React</strong>, 
              <strong> Html</strong>, <strong> Css</strong> y <strong>Javascript</strong>.</p>

          </div>
          <div className='col-md-6 .offset-md-3 text-center'>
          <FontAwesomeIcon icon={faHtml5} size="4x" className='icon'/>
          <FontAwesomeIcon icon={faCss3Alt} size="4x" className='icon'/>
          <FontAwesomeIcon icon={faJs} size="4x" className='icon'/>
          <FontAwesomeIcon icon={faPython} size="4x" className='icon'/>
          <FontAwesomeIcon icon={faReact} size="4x" className='icon'/>
          <FontAwesomeIcon icon={faNodeJs} size="4x" className='icon'/>
          <FontAwesomeIcon icon={faGitSquare} size="4x" className='icon'/>
          <FontAwesomeIcon icon={faGithub} size="4x" className='icon'/>
          <FontAwesomeIcon icon={faTerminal} size="4x" className='icon'/>
          <FontAwesomeIcon icon={faBootstrap} size="4x" className='icon'/>
          </div>

        </div>

        <br></br>
        <br></br>

        <footer>

          <div className='row justify-content-center'>
            <div className='col-md-6 .offset-md-3 text-center'>
              <h1>Contáctame </h1>
  
              <p>Si te gusta mi perfil o mi trabajo y tienes alguna propuesta no dudes en contactarme, tengo interés en proyectos para seguir creciendo en mi camino como desarrollador.</p>
              <br></br>
              <a href='/Contacto' className='boton-contactame'>Contacto</a>
            </div>
          </div>

        </footer>

        <br></br>
        <br></br>
        
      </div>
  
    </div>
  )
}

export default Inicio