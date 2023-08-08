import React from 'react'
import './restaurantCard.css'

const RestaurantCard = () => {
    return (
        <div className='card'>
            <div className='image'>
                <img src="/images/restaurant1.jpg" alt="item" />
            </div>

            <div className='card-text'>
                <h1>La Pino’z Pizza</h1>
                <h4>Italian, Pizzas, Fast Food, Mexican, Desserts, Beverages</h4>
            </div>
        </div>
    )
}

export default RestaurantCard