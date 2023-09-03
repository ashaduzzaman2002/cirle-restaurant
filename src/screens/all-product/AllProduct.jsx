import React, { useContext } from 'react'
import Layout from '../../layout/Layout'
import ProductCard from '../../components/product/ProductCard'
import { AppContext } from '../../context/AppContext'

const AllProduct = () => {
  const {items} = useContext(AppContext)

  console.log(items)
  return (
    <Layout>
        <div className='container cm'>
        <div className='page-heading d-flex justify-content-between'>
          <h2>All Popular Items</h2>
        </div>

        <div className='item-container'>
        {items.map((item, i) => (
            <ProductCard key={i} item={item} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default AllProduct