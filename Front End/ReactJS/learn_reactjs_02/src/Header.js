import React from 'react'
import { FaLaptop, FaTableAlt, FaMobileAlt } from 'react-icons/fa'

const Header = ({ title, width }) => {
    return (
        <header>
            <h1>{title}</h1>
            {width < 768 ? <FaMobileAlt /> : width < 992 ? <FaMobileAlt /> : <FaLaptop />}
        </header>
    )
}

export default Header