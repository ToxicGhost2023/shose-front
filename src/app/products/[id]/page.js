
import ProductDetailsPage from "@/components/templates/ProductDetailsPage";



async function Product({ params }) {
    const { id } = params


    return (
        <div>
            <ProductDetailsPage id={id} />

        </div>
    )
}

export default Product
