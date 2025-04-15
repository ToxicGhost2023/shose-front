
import ProductDetailsModule from '../modules/ProductspageModule/ProductDetailsModule'

function ProductDetailsPage({ product, id }) {
    return (
        <div>
            <ProductDetailsModule id={id} product={product} />
        </div>
    )
}

export default ProductDetailsPage
