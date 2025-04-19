import EditFormModule from '@/components/modules/AdminModules/EditFormModule';
import { getProduct, updatedProducts } from '@/utils/fetching';
import { redirect } from 'next/navigation';


async function EditButtonPage({ id }) {
    const product = await getProduct(id);
    if (!product) {
        return <div>محصول یافت نشد!</div>;
    }
    async function handleSave(updatedProduct) {
        "use server";
        try {
            await updatedProducts(id, updatedProduct);
            return { success: true }; // پاسخ به کلاینت
        } catch (error) {
            console.error("خطا در ذخیره محصول:", error);
            throw new Error(error.message || "خطا در ذخیره تغییرات!");
        }
    }

    return (
        <div className="min-h-screen  flex flex-col mt-[50px] items-center justify-center p-4">

            <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                {product.title}
            </h1>

            <EditFormModule product={product} onSave={handleSave} />

        </div>
    )
}

export default EditButtonPage
