import React from 'react'
import { Link, Outlet } from 'react-router'

const Home = () => {
    return (
        <>
            <div className='relative'>
                home
                <br />
                <Link to={`product/5`}>Check</Link>
            </div>
            {/* will either be <Home/> or <Settings/> */}
            <Outlet />
        </>
    )
}

export default Home