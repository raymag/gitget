import React from 'react'
import PropTypes from 'prop-types'

import {  FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import {  faGithub  } from '@fortawesome/free-brands-svg-icons'

const Navbar = ({icon, title}) => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <FontAwesomeIcon icon={icon} /> {title}
            </h1>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: faGithub
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired
}

export default Navbar
