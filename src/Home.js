import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <img className="home_image"
      src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      alt="Amazon Prime"/>
      <div className='home_row'>

    <Product
    id="1231341"
    title="The Alchemist"
    price={220.00}
    rating={4}
    image="https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg"/>
    <Product
    id="1231342"
    title="Fastrack Slim Watch"
    price={1500.00}
    rating={3}
    image="https://m.media-amazon.com/images/I/61oNgXTH1CL._UY741_.jpg"/>
      </div>
      <div className='home_row'>

    <Product
    id="1231343"
    title="HP Laptops"
    price={88000.00}
    rating={5}
    image="https://m.media-amazon.com/images/I/51DmOWr3rnL._SX522_.jpg"/>
    <Product
    id="1231344"
    title="Sony Playstation 5"
    price={35000.00}
    rating={5}
    image="https://m.media-amazon.com/images/I/51eYdpZVwVL._SY741_.jpg"/>
    <Product
    id="1231345"
    title="AXE Deodrant"
    price={110}
    rating={5}
    image="https://m.media-amazon.com/images/I/51MjZTixcZL._SX522_.jpg"/>
      </div>
      <div className='home_row'>

    <Product
    id="1231341"
    title="Samsung Curved Screen-Custom Made for PS5 Gaming"
    price={120000.00}
    rating={5}
    image="https://m.media-amazon.com/images/I/71Gp8RVxmhL._SL1500_.jpg"/>
    </div>
    </div>
  )
}

export default Home
