
import ProductDetailsPage from "@/components/templates/ProductDetailsPage";
import { getProduct } from "@/utils/fetching";


async function Product({ params }) {
    const { id } = params
    const product = await getProduct(id);
    const updatedProduct = {
        ...product,
        image: product.image.startsWith('http')
            ? product.image
            : `http://localhost:3400${product.image}`,
    };
    return (
        <div>
            <ProductDetailsPage id={id} product={updatedProduct} />

        </div>
    )
}

export default Product
