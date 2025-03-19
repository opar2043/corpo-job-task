import React, { Profiler, useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const Product = () => {
    const [products , setProducts] = useState([]);
    useEffect(()=>{
        fetch('/product.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    },[])
  return (
    <div>
        <div>
            <h2 className='text-xl md:text-4xl font-bold text-center mb-8 md:mb-16'>Our Product Collection</h2>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
            {
                products && products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
            }
        </div>
    </div>
  )
}

export default Product