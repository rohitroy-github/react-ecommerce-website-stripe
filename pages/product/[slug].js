// Putting a [name] makes the file dynamic
// File based routing

import React from "react";

import { client, urlFor } from "../../lib/client";

const ProductDetails = (product, products) => {
    const { image, name, details, price } = product; 
  return (
    <div> 
      <div className="product-detail-container"> 
        <div> 
          <div className="image-container"> 
            <img src={urlFor(image && image[0])} />
          </div>
          {/* Image Carousel Code */}
          <div className="small-images-conatiner">
            {image?.map((item, i) => ( 
              <img 
              src={urlFor(item)}
              className=""
              onMouseEnter=""
              />
            ))}
          </div> 
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;
  
    const products = await client.fetch(query);
  
    const paths = products.map((product) => ({
      params: { 
        slug: product.slug.current
      }
    }));
  
    return {
      paths,
      fallback: 'blocking'
    }
  }

// getStaticProps function is used when the data required to render the page is available at runtime ahead of user request

export const getStaticProps = async ({ params: { slug } }) => {
  //To fetch product details from thne product page we are on currently
  const query = `*_type == "product" && slug.current == '${slug}'][0]`; //Fetching a particular product requested
  const productQuery = `*[_type == "product"]`; //Fetching similar products

  const product = await client.fetch(query); 
  const products = await client.fetch(productQuery); 

  return {
    props: { product, products },
  };
};

export default ProductDetails;
