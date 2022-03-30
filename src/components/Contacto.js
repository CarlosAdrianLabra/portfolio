import React from 'react'
import './Contacto.css'

function Contacto() {
  return (
    <div>
      <div className='header'>
        <h1>Contacto</h1>
      </div>

      <br></br>
      <br></br>

      <div className='container'>

        <div className='row'>

          <div className='col-md-6 .offset-md-3'>
          
            <h1>Ponte en contacto</h1><br></br>
            <strong><font color="#aa784d">EMAIL /</font></strong> <strong><font color="#9ba0a3">carlosadrianlabragranados@gmail.com<br/></font>
            <font color="#aa784d">CELULAR /</font></strong> <strong><font color="#9ba0a3">55-25-08-03-93</font></strong><br/><br></br>
            <p>Si te gusta mi perfil o mi trabajo y tienes alguna propuesta no dudes en contactarme, tengo interés en proyectos para seguir creciendo en mi camino de desarrollador.</p>
            
            <p>Sin embargo, si tiene otra solicitud o pregunta, no dude en utilizar el formulario.</p>
          </div>

          <div className='col-md-6 .offset-md-3'>
            <form>
              <label for="exampleFormControlInput1" class="form-label">Nombre:</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Nombre"></input>
              <br></br>
              <label for="exampleFormControlInput1" class="form-label">Email:</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email@ejemplo.com"></input>
              <br></br>
              <label for="exampleFormControlTextarea1" class="form-label">Comentario:</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              <br></br>
              <button className='boton-submit'>Enviar</button>
            </form>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Contacto