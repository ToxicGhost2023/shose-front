import ProductsPage from '@/components/templates/ProductsPage'
import { cookies } from 'next/headers';


function Products() {
      const cookieStore = cookies();
        const token = cookieStore.get("accessToken")?.value;
    return (
        <ProductsPage token={token} />
    )
}

export default Products