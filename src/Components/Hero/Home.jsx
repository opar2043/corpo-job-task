import React from 'react'
import Hero from './Hero'
import MinUser from './MinUser'
import User from '../User/User'
import Product from '../Product/Product'
import Form from '../Form/Form'

const Home = () => {
  return (
    <div>
        <Hero></Hero>
        {/* <MinUser></MinUser> */}
        <Product></Product>
        <User></User>
        <Form></Form>
    </div>
  )
}

export default Home