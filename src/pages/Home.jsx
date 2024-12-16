import React from 'react'
import { Link, Outlet } from 'react-router'
import SEO from '../components/SEO'

const Home = () => {
    return (
        <>
            <SEO
                title="Home Page"
                description="Home Description"
                image="https://pub-c053b04a208d402dac06392a3df4fd32.r2.dev/image/8171_1733980951.webp"
            />
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