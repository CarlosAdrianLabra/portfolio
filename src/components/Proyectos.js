import React from 'react'
import './Proyectos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faPython, faReact, faNodeJs, faGitSquare, faGithub, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import imagen1 from '../assests/abryl1.PNG'
import imagen2 from '../assests/abryl2.PNG'
import imagen3 from '../assests/abryl3.PNG'
import imagen4 from '../assests/abryl4.PNG'
import imagen5 from '../assests/abryl5.PNG'
import imagen6 from '../assests/abryl6.PNG'
import imagen7 from '../assests/abryl7.PNG'
import crypto1 from '../assests/crypto1.PNG'
import crypto2 from '../assests/crypto2.PNG'
import crypto3 from '../assests/crypto3.PNG'
import dulcemente1 from '../assests/dulcemente1.PNG'
import dulcemente2 from '../assests/dulcemente2.PNG'
import dulcemente3 from '../assests/dulcemente3.PNG'
import dulcemente4 from '../assests/dulcemente4.PNG'
import jamming1 from '../assests/jamming1.PNG'
import jamming2 from '../assests/jamming2.PNG'

function Proyectos() {
  return (
    <div>
      <div className='header'>
        <h1>Proyectos</h1>
      </div>
      <br></br>
      <br></br>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 .offset-md-3 align-self-center'>
            <div className='row'>
              <h2>Tienda de ropa y calzado</h2>
              <p>Fue mi primer proyecto y del cual estoy más orgulloso, un ERP 
                (Enterprise Resource Planning) para una tienda de zapatos con tres 
                sucursales, un software con un punto de venta, inventario, una
                 parte de administración para gestionar las actividades empresariales 
                 diarias y reportes diarios sobre las ventas de la empresa.</p>

              <p>El proyecto lo realizamos un grupo de tres personas, utilizando
                 control de versiones git y github, con el framework Django 
                 de Python para el backend y Javascript, Css, Bootstrap para el frontend.</p>

            </div>
            <div className='row'>
            <div className='col-md-12 .offset-md-6'>
            <br/>
            <h4>Tecnologías: </h4>
                <FontAwesomeIcon icon={faHtml5} size="2x" className='iconp'/>
                <FontAwesomeIcon icon={faCss3Alt} size="2x" className='iconp'/>
                <FontAwesomeIcon icon={faJs} size="2x" className='iconp'/>
                <FontAwesomeIcon icon={faPython} size="2x" className='iconp'/>
                <FontAwesomeIcon icon={faGitSquare} size="2x" className='iconp'/>
                <FontAwesomeIcon icon={faGithub} size="2x" className='iconp'/>
                <FontAwesomeIcon icon={faBootstrap} size="2x" className='iconp'/>
              </div>
            </div>

          </div>
          <div className='col-md-6 .offset-md-3 align-self-center'>
            <div id="carouselExampleControls" className="carousel carousel-dark slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={imagen1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={imagen2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={imagen3} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={imagen4} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={imagen5} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={imagen6} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={imagen7} className="d-block w-100" alt="..."/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

        </div>

        <br></br>
        <br></br>

        <div className='row'>
          <div className='col-md-6 .offset-md-3 align-self-center'>
          <div id="carouselExampleControls1" className="carousel carousel-dark slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={crypto1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={crypto2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={crypto3} className="d-block w-100" alt="..."/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls1" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className='col-md-6 .offset-md-3 align-self-center'>
          <div className='row'>
              <h2>Crypto app</h2>
              <p>Una aplicación que utiliza una api publica con postman,
                 para recoger toda la información de las criptomonedas del momento.</p>

              <p>Es una aplicación simple, la cual utilicé para poner en 
                práctica mis habilidades con React, Css y Html.</p>
            </div>
            <div className='row'>
              <div className='col-md-12 .offset-md-6'>
              <br/>
              <h4>Tecnologías: </h4>
                <FontAwesomeIcon icon={faHtml5} size="2x" className='iconp'/>
                <FontAwesomeIcon icon={faCss3Alt} size="2x" className='iconp'/>
                <FontAwesomeIcon icon={faJs} size="2x" className='iconp'/>
                <FontAwesomeIcon icon={faNodeJs} size="2x" className='iconp'/>
                <FontAwesomeIcon icon={faReact} size="2x" className='iconp'/>
                <FontAwesomeIcon icon={faGitSquare} size="2x" className='iconp'/>
                <FontAwesomeIcon icon={faGithub} size="2x" className='iconp'/>
              </div>
              
            </div>

          </div>

        </div>
        
        <br></br>
        <br></br>
        
        <div className='row'>
          <div className='col-md-6 .offset-md-3 align-self-center'>
            <div className='row'>
              <h2>Jammming</h2>
              <p>Ésta aplicación fue mi primer acercamiento a React, 
                fue una aplicación que hice en el curso de Codecademy para aprender frontend.</p>

              <p>Se trata de una aplicación que se conecta con el 
                api de Spotify, que te permite crear una playlist 
                desde la aplicación y en el momento que haces click 
                en el botón de guardar, la playlist se guarda en tu 
                aplicación de Spotify.</p>
            </div>
            <div className='row'>
            <div className='col-md-12 .offset-md-6'>
              <br/>
              <h4>Tecnologías: </h4>
                <FontAwesomeIcon icon={faHtml5} size="2x" className='iconp'/>
                <FontAwesomeIcon icon={faCss3Alt} size="2x" className='iconp'/>
                <FontAwesomeIcon icon={faJs} size="2x" className='iconp'/>
                <FontAwesomeIcon icon={faNodeJs} size="2x" className='iconp'/>
                <FontAwesomeIcon icon={faReact} size="2x" className='iconp'/>
                <FontAwesomeIcon icon={faGitSquare} size="2x" className='iconp'/>
                <FontAwesomeIcon icon={faGithub} size="2x" className='iconp'/>
              </div>
            </div>

          </div>
          <div className='col-md-6 .offset-md-3 align-self-center'>
          <div id="carouselExampleControls2" className="carousel carousel-dark slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={jamming1} class="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={jamming2} class="d-block w-100" alt="..."/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

        </div>
        
        <br></br>
        <br></br>

        <div className='row'>
          <div className='col-md-6 .offset-md-3 align-self-center'>
          <div id="carouselExampleControls3" className="carousel carousel-dark slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={dulcemente1} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={dulcemente2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={dulcemente3} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={dulcemente4} className="d-block w-100" alt="..."/>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls3" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className='col-md-6 .offset-md-3 align-self-center'>
          <div className='row'>
              <h2>Pastelería Dulccemente</h2>
              <p>Una tienda en línea para una emprendedora con un negocio de pasteles,
                 este sitio web tiene una sección para ver los pasteles y personalizarlos,
                 para que la emprendedora pueda hacer el pastel con los colores, tamaño y 
                 sabor que el cliente decida.</p>

              <p>El sitio web lo hice con un compañero y utilizamos el framework Django 
                de Python para el backend, Javascript, Css, Bootstrap para el frontend y 
                Git, Github para el control de versiones.</p>

            </div>
            <div className='row'>
            <div className='col-md-12 .offset-md-6'>
            <br/>
                <h4>Tecnologías: </h4>
                <FontAwesomeIcon icon={faHtml5} size="2x" className='iconp'/>
                <FontAwesomeIcon icon={faCss3Alt} size="2x" className='iconp'/>
                <FontAwesomeIcon icon={faJs} size="2x" className='iconp'/>
                <FontAwesomeIcon icon={faPython} size="2x" className='iconp'/>
                <FontAwesomeIcon icon={faGitSquare} size="2x" className='iconp'/>
                <FontAwesomeIcon icon={faGithub} size="2x" className='iconp'/>
                <FontAwesomeIcon icon={faBootstrap} size="2x" className='iconp'/>
              </div>
            </div>

          </div>
          

        </div>
        
        <br></br>
        <br></br>

        <footer>

          <div className='row justify-content-center'>
            <div className='col-md-6 .offset-md-3 text-center'>
              <h1>Contáctame</h1>
              
              <p>Si te gusta mi perfil o mi trabajo y tienes alguna propuesta 
                no dudes en contactarme, tengo interés en proyectos para seguir 
                creciendo en mi camino como desarrollador.</p>

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

export default Proyectos