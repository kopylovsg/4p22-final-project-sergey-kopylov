import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import Product from "../views/Product/Product";


const ProductPage = () => {
  const { id } = useParams()

  const [productInfo, setProductInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  console.log(productInfo)

  const {
    title,
    image,
    price,
    description,
  } = productInfo

  const fetchProductInfo = () => {
    fetch('/products.json')
      .then((response) => response.json())
      .then((responseData) => {

        const product = responseData.find(item  => String(item.id) === id)

        setProductInfo(product);

      })
  }

  useEffect(() => {
   fetchProductInfo()
  }, [])

  if (isLoading) {
    return <div>

    </div>
  }

  return (

    <Product
      title={title}
      imgage={image}
      price={price}
      description={description}
      />
  )

};

export default ProductPage;