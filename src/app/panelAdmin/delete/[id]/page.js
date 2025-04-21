import Deletepage from '@/components/templates/Admin/Deletepage';

import React from 'react'

async function DeleteProduct({ params }) {
  const { id } = params

  // const updatedProduct = {
  //     ...product,
  //     image: product.image.startsWith('http')
  //         ? product.image
  //         : `http://localhost:3400${product.image}`,
  // };
  // product={updatedProduct}
  return (
    <Deletepage id={id} />
  )
}

export default DeleteProduct
