import Deletepage from '@/components/templates/Admin/Deletepage';
import { getProduct } from '@/utils/fetching';
import React from 'react'

async function DeleteProduct({params }) {
    const { id } = params
    const product = await getProduct(id);
    const updatedProduct = {
        ...product,
        image: product.image.startsWith('http')
            ? product.image
            : `http://localhost:3400${product.image}`,
    };
    return (
      <Deletepage id={id} product={updatedProduct} />
    )
}

export default DeleteProduct
