import React, { useState } from 'react'
import './productCard.css'
import { Clock, Minus, Plus, Star } from '../../assets/svg/SVG'

const ProductCard = ({item}) => {
    const [cartItem, setCartItem] = useState(0)

    const incrementHandler = () => {
        setCartItem(cartItem + 1)
    }

    const decrementHandler = () => {
        if(cartItem > 0) {
            setCartItem(cartItem - 1)
        }
    }
    return (
        <div className='card'>
            <div className='image'>
                <img src={item.image} alt="item" />
                <div className='time'>
                    <Clock />
                    <span>{item.time}</span>
                </div>
            </div>

            <div className='card-text'>
                <h1>{item.title}</h1>
                <h4>{item.desc}</h4>

                <div className='d-flex gap-2 card-rating'>
                    <p className='m-0'>{item.rating}</p>
                    <div className='d-flex align-items-center gap-1'>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                    </div>
                </div>

                <h3>₹250</h3>

                <div className='d-flex justify-content-between card-add-to-cart'>
                    <button style={{backgroundColor: cartItem > 0? '#BE2AED': '#F4F4F4', color: cartItem > 0? '#fff': '#A3A3A3'}}>Add To Cart</button>

                    <div className='d-flex card-inc-dec justify-content-between align-items-center'>
                        <div onClick={decrementHandler}><Minus /></div>
                        <p className='mb-0'>{cartItem}</p>
                        <div onClick={incrementHandler}><Plus /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}





export default ProductCard