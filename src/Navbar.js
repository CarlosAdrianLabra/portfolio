import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {useState} from 'react';
import Contacto from './components/Contacto';
import Inicio from './components/Inicio';
import Proyectos from './components/Proyectos';
import Error from './components/Error';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
    const [navbar, setNavbar] = useState(false);


    const cambiarFondo = () => {
        if(window.scrollY >= 80){
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', cambiarFondo)


    return(
        <Router>
                <nav className={navbar ? 'active' : ''}>
                    <h1>C.L.</h1>
                    <div className='dropdown' id='items'>
                    <button className='dropdown-btn'><FontAwesomeIcon icon={faBars} size="lg" className='iconp'/></button>
                    <ul className='dropdown-content'>
                        <li><Link to="/Contacto"> Contacto </Link></li>
                        <li><Link to="/Proyectos"> Proyectos </Link></li>
                        <li><Link to="/"> Home </Link></li>
                            
                        
                    </ul>
                    </div>
                </nav>
                <section>
                <Routes>
                    <Route path='/' element={<Inicio />}/>
                    <Route path='/Proyectos' element={<Proyectos />}/>
                    <Route path='/Contacto' element={<Contacto />}/>
                    <Route path='*' element={<Error />}/>
                </Routes>
                </section>
        </Router>
                
        
    );
    
}

export default Navbar;