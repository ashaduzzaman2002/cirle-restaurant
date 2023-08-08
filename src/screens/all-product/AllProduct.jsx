import React from 'react'
import Layout from '../../layout/Layout'
import ProductCard from '../../components/product/ProductCard'

const AllProduct = () => {
  return (
    <Layout>
        <div className='container cm'>
        <div className='page-heading d-flex justify-content-between'>
          <h2>All Popular Items</h2>
        </div>

        <div className='item-container'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </Layout>
  )
}

export default AllProduct