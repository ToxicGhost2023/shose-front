"use client";

import ProductsListAdminModule from '@/components/modules/AdminModules/ProductsListAdminModule'
import { fetchProducts } from '@/store/slice/productsReducer';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ProductsListAdminPage() {
    const dispatch = useDispatch();
    const { products, status, error } = useSelector((state) => state.products);

    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    const updatedProducts = useMemo(() => {
        return filteredProducts.map(product => ({
            ...product,
            image: product.image.startsWith('data:image') || product.image.startsWith('http')
                ? product.image
                : `http://localhost:3400${product.image}`,

        }));
    }, [filteredProducts]);

    if (status === 'loading') return <p>در حال بارگذاری محصولات...</p>;
    if (status === 'failed') return <p>خطا: {error}</p>;

    return (
        <div>
            <ProductsListAdminModule
                products={updatedProducts}
                setFilteredProducts={setFilteredProducts}
            />
        </div>
    );
}

export default ProductsListAdminPage;
