import React from 'react'; 

import Link from 'next/link'; //Using <Link> tags 

import { urlFor } from '../lib/client'; //Generating product URL's 

//Passing the fetched data from Sanity as a prop to HeroBanner function
const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'> 
      <p className="beats-solo"> 
      {heroBanner.smallText}
      </p>
      <h3>{heroBanner.midText}</h3>
      <h1>{heroBanner.largeText1}</h1>
      <img src={urlFor(heroBanner.image)} alt='headphones' className='hero-banner-image' />
      <div> 
        {/* <Link /> tags in Next.js are exactly sumilar to the <a/> tags in React.js */}
        <Link href={`/product/${heroBanner.product}`}>  
        <button type='button'>{heroBanner.buttonText}</button>
        </Link>
        <div className="desc"> 
        <h5> 
          Description
        </h5>
        <p>{heroBanner.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner;