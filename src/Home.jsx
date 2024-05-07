import React from 'react'
import './Home.css'

import Nav from './Header'
import BMI from './Bmi'
// import Footer from './Footer'


function Home() {
    return (
        <div className='gym'>
            <div className='gym-main'>
                <Nav />
                <p className='gym-tag'>START YOUR FITNESS <br/> JOURNEY <i className='gym-suntag'>TODAY</i> </p>
            </div>

            <div className='gym-bmi'>

                <BMI/>

            </div>

            {/* <Footer/> */}


        </div>
    )
}

export default Home
