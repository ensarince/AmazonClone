import React from 'react'
import "./styles/Home.css"
import Product from './Product'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const Home = () => {

  const slideImages = [
    {
      url: 'https://m.media-amazon.com/images/I/81M46TyxC1L._SX3000_.jpg',
    },
    {
      url: 'https://www.intelligencenode.com/blog/wp-content/uploads/2019/06/Prime-day.jpg',
    },
    {
      url: 'https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/firetv_inline_composition_blended._TTW_.jpg',
    },
  ];

  return (
    <div className="home">
        <div className="home__container">

            <div className="image__slider">
            <Slide>
            {slideImages.map((slideImage, index)=> (
                <div className="each-slide" key={index}>
                  <div className='slider__image' style={{'backgroundImage': `url(${slideImage.url})`,'height': '100%'}}>
                  </div>
                </div>
              ))} 
            </Slide>
          </div>
          
              <div className="home__row">
                <Product title={"The lean startup"} price={29.99} 
                image="https://images-eu.ssl-images-amazon.com/images/G/03/YourRewardsPage/XCM_Manual_1465493_2562828_4990546_379x304_1X_en_DE._SY304_CB609978595_.jpg"  
                rating={5} 
                />
                <Product title={"Beal einfach seil"} price={129.99} 
                image="https://m.media-amazon.com/images/I/81wEo5I+0SL._AC_UL320_.jpg"  
                rating={3} 
                />
              </div>

              <div className="home__row">
                <Product title={"Ocun Klettern gurt"} price={69.99} 
                image="https://m.media-amazon.com/images/I/517ced5dFNL._AC_UL320_.jpg"  
                rating={4} 
                />
                <Product title={"Petzl Corax"} price={49.99} 
                image="https://m.media-amazon.com/images/I/81AJ-+cZ4TL._AC_UL320_.jpg"  
                rating={2} 
                />
                <Product title={"Harley Davidson Boots"} price={199.99} 
                image="https://m.media-amazon.com/images/I/61Sr9CRyOPL._AC_UL320_.jpg"  
                rating={4} 
                />
              </div>
              
              <div className="home__row">
                <Product title={"Lenovo ThinkPad T460 Intel Core i5 Full HD (14 Zoll 256GB SSD Festplatte 8GB Speicher)"} price={329.99} 
                image="https://m.media-amazon.com/images/I/714OOpZl4WL._AC_UY218_.jpg"  
                rating={5} 
                />
              </div>
        </div>
    </div>
  )
}

export default Home