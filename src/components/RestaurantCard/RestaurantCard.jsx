import React from 'react'
import './restaurantCard.css'

const RestaurantCard = ({item}) => {
    return (
        <div className='card'>
            <div className='image'>
                <img src={"/images/restaurant1.jpg"} alt="item" />
            </div>

            <div className='card-text'>
                <h1>{item.name}</h1>
                <h4>Italian, Pizzas, Fast Food, Mexican, Desserts, Beverages</h4>
            </div>
        </div>
    )
}

export default RestaurantCard