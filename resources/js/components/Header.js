import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
        <div className='container'>
            {/* Hacemos uso del Componente Link de React Router, gracias a ello la página no refresca */}
            <Link className='navbar-brand' to='/'>Tasksman</Link>
        </div>
    </nav>
)

export default Header
