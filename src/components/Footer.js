import React from 'react'
import "./styles/Footer.css"


const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className='footer'>
      

    <button onClick={scrollToTop} className='button__backToTop'>
      Back to top
    </button>
  
      <div className="footer__details">
        <div className="footer__details__col">
          <h4><strong>Get to Know Us</strong></h4>
          <a href="#"><h5>Careers</h5></a>
          <a href="#"><h5>Press Releases</h5></a>
          <a href="#"><h5>About Us</h5></a>
          <a href="#"><h5>Blog</h5></a>
          <a href="#"><h5>Sustainability</h5></a>
          <a href="#"><h5>Imprint</h5></a>
          <a href="#"><h5>Amazon Services</h5></a>
        </div>
        <div className="footer__details__col">
          <h4><strong>Get to Know Us</strong></h4>
          <a href="#"><h5>Careers</h5></a>
          <a href="#"><h5>Press Releases</h5></a>
          <a href="#"><h5>About Us</h5></a>
          <a href="#"><h5>Blog</h5></a>
          <a href="#"><h5>Sustainability</h5></a>
          <a href="#"><h5>Imprint</h5></a>
          <a href="#"><h5>Amazon Services</h5></a>
        </div>
        <div className="footer__details__col">
          <h4><strong>Get to Know Us</strong></h4>
          <a href="#"><h5>Careers</h5></a>
          <a href="#"><h5>Press Releases</h5></a>
          <a href="#"><h5>About Us</h5></a>
          <a href="#"><h5>Blog</h5></a>
          <a href="#"><h5>Sustainability</h5></a>
          <a href="#"><h5>Imprint</h5></a>
          <a href="#"><h5>Amazon Services</h5></a>
        </div>
        <div className="footer__details__col">
          <h4><strong>Get to Know Us</strong></h4>
          <a href="#"><h5>Careers</h5></a>
          <a href="#"><h5>Press Releases</h5></a>
          <a href="#"><h5>About Us</h5></a>
          <a href="#"><h5>Blog</h5></a>
          <a href="#"><h5>Sustainability</h5></a>
          <a href="#"><h5>Imprint</h5></a>
          <a href="#"><h5>Amazon Services</h5></a>
        </div>
      </div>

      <div className="footer__language">
        <img className='footer__language__image' src='https://m.media-amazon.com/images/G/03/gc/designs/livepreview/blue_hero_logo_noto_email_v2016_de-main._CB467020238_.png' />


      </div>

      <div className="footer__sections">

      <div className="footer__sections__row">
          <a href='#'>
            <p>
              <h6>Amazon Advertising</h6>
              <span>Find and Attract customers</span>
            </p>
          </a>
          <a href='#'>
            <p>
              <h6>Amazon Music</h6>
              <span>Stream millions of songs</span>
            </p>
          </a>
          <a href='#'>
            <p>
              <h6>AbeBooks</h6>
              <span>Books, art & collectables</span>
            </p>
          </a>
          <a href='#'>
            <p>
              <h6>Amazon Web Services</h6>
              <span>Scalable Cloud Computing Services</span>
            </p>
          </a>
          <a href='#'>
            <p>
              <h6>Audible</h6>
              <span>Download AudioBooks</span>
            </p>
          </a>
          <a href='#'>
            <p>
              <h6>Book Depository</h6>
              <span>Books With Free Delivery Worldwide</span>
            </p>
          </a>
        </div>

        <div className="footer__sections__row">
          <a href='#'>
            <p>
              <h6>IMDb</h6>
              <span>Movies, TV & Celebrities</span>
            </p>
          </a>
          <a href='#'>
            <p>
              <h6>Kindle Direct Publishing</h6>
              <span>Indie Digital & Print Publishing</span>
            </p>
          </a>
          <a href='#'>
            <p>
              <h6>Shopbop</h6>
              <span>Find and Attract customers</span>
            </p>
          </a>
          <a href='#'>
            <p>
              <h6>Amazon Advertising</h6>
              <span>Find and Attract customers</span>
            </p>
          </a>
          <a href='#'>
            <p>
              <h6>Amazon Advertising</h6>
              <span>Find and Attract customers</span>
            </p>
          </a>
          <a href='#'>
            <p>
              <h6>Amazon Advertising</h6>
              <span>Find and Attract customers</span>
            </p>
          </a>
        </div>


      </div>

      <div className="footer__terms">
        <div className="footer__terms__row">
          <a href="#"><h6>Conditions of Use & Sale</h6></a>
          <a href="#"><h6>Privacy Notice</h6></a>
          <a href="#"><h6>Imprint</h6></a>
          <a href="#"><h6>Cookies Notice</h6></a>
          <a href="#"><h6>Interest Based Ads Notice</h6></a>
        </div>
        <div className="footer__terms__row">
          <small>© 1998-?, Ensar Ince, Amazon Clone</small>
        </div>
      </div>

    </div>
  )
}

export default Footer