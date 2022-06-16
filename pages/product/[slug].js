// Putting a [name] makes the file dynamic
// File based routing

import React from "react";

import { client, urlFor } from "../../lib/client";

const ProductDetails = (product, products) => {
    const { image, name, details, price } = products; 

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[0])} />
          </div>
          <div className="small-images-container"> 
            {image?map((item, i) => ( 
                <img 
                src="{urlFor(item)}"
                className=""
                onMouseEnter=""
                />
            ))
          </div>}
        </div>
      </div>
    </div>
  );
};

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

export const getStaticProps = async ({ params: { slug } }) => {
  //To fetch product details from thne product page we are on currently
  const query = `*_type == "product" && slug.current == '${slug}'][0]`;
  const productQuery = `1*[_type == "product"]`;

  const product = await client.fetch(query); //Fetching particualr product requested
  const products = await client.fetch(productQuery); //Fetching similar products

  return {
    props: { product, products },
  };
};

export default ProductDetails;
