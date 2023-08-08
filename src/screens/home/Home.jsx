import React from 'react'
import Layout from '../../layout/Layout'
import './home.css'
import ProductCard from '../../components/product/ProductCard'
import { useNavigate } from 'react-router-dom'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'
import { items } from '../../data/data'

const Home = () => {
  const navigate = useNavigate()
  return (
    <Layout title='Home'>
      <div className='container cm'>
        <div className='page-heading d-flex justify-content-between'>
          <h2>Most Popular Items</h2>
          <button onClick={() => navigate('/item')} type='button'>View All</button>
        </div>

        <div className='item-container'>
          {
            items.map((item, i) => (
              <ProductCard key={i} item={item} />
            ))
          }
        </div>

        <hr className='my-5' />

        <div className='page-heading d-flex justify-content-between'>
          <h2>Most Popular Items</h2>
          <button onClick={() => navigate('/restaurants')} type='button'>View All</button>
        </div>

        <div className='item-container'>
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
          <RestaurantCard />
        </div>

      </div>
    </Layout>
  )
}

export default Home