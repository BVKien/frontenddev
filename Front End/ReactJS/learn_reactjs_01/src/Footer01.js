import React from 'react'

const Footer01 = () => {
    const today = new Date();
    return (
        <footer>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    )
}

export default Footer01