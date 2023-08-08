import React from 'react'
import Layout from '../../layout/Layout'
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard'

const AllRestaurant = () => {
  return (
    <Layout>
        <div className='container cm'>
        <div className='page-heading d-flex justify-content-between'>
          <h2>All Popular Items</h2>
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

export default AllRestaurant