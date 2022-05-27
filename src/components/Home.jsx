import React from 'react'

import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <div className='banner'>
            <div className='title-link'>
                <h1>Your favorite food, delivered while coding</h1>
                <Link to="/pizza">
                    <div id="order-pizza"><p>Pizza?</p></div>
                </Link>
            </div>
        </div>
    )
}

export default Home;