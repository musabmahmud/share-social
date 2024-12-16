import React from 'react'
import { Outlet } from 'react-router'

const Home = () => {
    return (
        <>
            <div className='relative'>
                home
            </div>
            {/* will either be <Home/> or <Settings/> */}
            <Outlet />
        </>
    )
}

export default Home