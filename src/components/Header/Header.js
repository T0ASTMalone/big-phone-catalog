import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header>
            <p>
              Big Phone Catalog
            </p>
            <Link to="/checkout">Cart</Link>
        </header>
    )
}

export default Header
