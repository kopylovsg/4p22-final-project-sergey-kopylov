import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import Product from "../views/Product/Product";

const ProductPage = () => {
  const { id } = useParams()

  const [productInfo, setProductInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const {

    title,
    imgSrc,
    price,
    description,
  } = productInfo

  const fetchProductInfo = () => {
    fetch(`4p22-final-project-sergey-kopylov/products.json`)
      .then((response) => response.json())
      .then((responseData) => {

        console.debug('responseData:', responseData)

        // const product = responseData.find(({ id }) => String(id) === id)

        // setProductInfo(product);

      })
  }

  useEffect(() => {
   fetchProductInfo()
  }, [])

  if (isLoading) {
    return <div>Загрузка....</div>
  }

  return


    // <Product
    //   id={id}
    //   title={title}
    //   imgSrc={imgSrc}
    //   price={`${price}  &#8381;`}
    //   description={description}
    //   />


};

export default ProductPage;