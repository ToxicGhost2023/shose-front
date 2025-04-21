"use client"

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import EditFormModule from '@/components/modules/AdminModules/EditFormModule';
import { fetchSingleProduct, updateProduct } from '@/store/slice/productsReducer';

function EditButtonPage({ id }) {
    const dispatch = useDispatch();
    const { singleProduct, singleProductStatus } = useSelector((state) => state.products);

    useEffect(() => {
        if (id) {
            dispatch(fetchSingleProduct(id));
        }
    }, [dispatch, id]);

    const handleSave = async (updatedData) => {
        const resultAction = await dispatch(updateProduct({ id, updatedProduct: updatedData })).unwrap();
        if (updateProduct.fulfilled.match(resultAction)) {
            return { success: true };
        } else {
            throw new Error("خطا در بروزرسانی محصول");
        }
    };


    if (singleProductStatus === 'loading') {
        return <div>در حال بارگذاری...</div>;
    }

    if (!singleProduct) {
        return <div>محصولی یافت نشد</div>;
    }

    return (
        <div className="min-h-screen flex flex-col mt-[50px] items-center justify-center p-4">
            <EditFormModule product={singleProduct} onSave={handleSave} />
        </div>
    );
}

export default EditButtonPage;
