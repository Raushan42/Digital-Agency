import React from 'react'
import '../../styles/hero.css'

import heroDarkImage from '../../images/hero-img.png'

const Hero = () => {
  return <section className='hero__section'>
    <div className='container'>
        <div className='hero__wrapper'>
            <div className='hero__content'>
                <div>
                    <h2>We're Creating Perfect</h2>
                    <h2>Digital Products To</h2>
                    <h2 className='highlight'>Promote Your Brand</h2>
                </div>
                <p className='description'>
                    Emphasizes the agency’s dedication to making clients' digital growth its top priority, showcasing a results-driven and client-focused approach.
                </p>

                <div className='hero__btns'>
                    <button className='primary__btn'>Get Started Now</button>
                    <button className='secondary__btn'>Discover More</button>
                </div>
            </div>

            <div className='hero__img'>
                <img src={heroDarkImage} alt='hero-img'/>
            </div>
        </div>
    </div>
  </section>
}

export default Hero