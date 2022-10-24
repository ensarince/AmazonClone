import React,{useEffect,useState} from 'react'
import "./styles/Home.css"
import Product from './Product'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const Home = () => {

  const [productData, setProductData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>setProductData(json))
  }, [])
  
  console.log(productData)

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

              <div className="home__products">
                {productData.map((item,key) => (
                  <Product title={item.title} price={item.price} 
                  image={item.image}  
                  rating={Math.floor(item.rating.rate)} 
                  />
                ))}
              </div>
        </div>
    </div>
  )
}

export default Home