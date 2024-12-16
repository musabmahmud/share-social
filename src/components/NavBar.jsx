import React from 'react'
import { NavLink } from 'react-router'

const NavBar = () => {
    return (
        <nav className='flex justify-center items-center gap-5 space-x-5'>
            {/* NavLink makes it easy to show active states */}
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? "active" : ""
                } end
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) =>
                    isActive ? "active" : ""
                }
            >
                About
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) =>
                    isActive ? "active" : ""
                }
            >
                Contact
            </NavLink>
        </nav>
    )
}

export default NavBar