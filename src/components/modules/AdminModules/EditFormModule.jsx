"use client"

import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";



function EditFormModule({ product, onSave }) {

    const [loading, setLoading] = useState(false)
    const router = useRouter()
    if (!product) {
        router.back()
    }

    const { register, handleSubmit, setValue, formState: { errors }, watch } = useForm({
        defaultValues: {
            title: product.title || "",
            content: product.content || "",
            category: product.category || "",
            quantity: product.quantity || 0,
            price: product.price || 0,
            finalPrice: product.finalPrice || 0,
            discount: product.discount || 0,
            image: product.image || "",
            options: product.options || [],
            color: product.color ? product.color.join(", ") : "",
            sizes: product.sizes ? product.sizes.join(", ") : "",
            brand: product.brand || "",

        },
    });

    const [imagePreview, setImagePreview] = useState(
        product.image ? `http://localhost:3400${product.image}` : null
    );
    useEffect(() => {
        setImagePreview(product?.image ? `http://localhost:3400${product.image}` : null);
        setValue("image", product.image || "");
        setValue("options", product.options || []);
        setValue("color", product.color ? product.color.join(", ") : "");
        setValue("sizes", product.sizes ? product.sizes.join(", ") : "");
        setValue("brand", product.brand || "");
    }, [product, setValue]);

    const price = watch("price");
    const discount = watch("discount");
    const [finalPrice, setFinalPrice] = useState(0);

    useEffect(() => {
        if (price && discount !== undefined) {
            const calculatedFinalPrice = price - (price * (discount / 100));
            setFinalPrice(calculatedFinalPrice);
        }
    }, [price, discount]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                setImagePreview(base64String);
                setValue("image", base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    const onSubmit = async (data) => {
        setLoading(true);
        try {

            data.sizes = data.sizes
                .split(",")
                .map((size) => Number(size.trim()))
                .filter((size) => !isNaN(size));


            data.color = data.color
                .split(",")
                .map((color) => color.trim())
                .filter((color) => color);

            // محاسبه قیمت نهایی
            data.finalPrice = data.price - (data.price * (data.discount / 100));

            console.log("Processed data:", data, "✅✅✅✅");


            const response = await onSave(data);
            if (response.success) {
                router.push("/panelAdmin/productsList");
            }
        } catch (error) {

            alert(`خطا در ثبت تغییرات: ${error.message || "لطفاً دوباره تلاش کنید"}`);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="neumorphics w-full mt-10 max-w-lg mx-auto p-6 rounded-2xl bg-white shadow-lg dark:bg-zinc-900 dark:text-white">
            <h2 className="text-3xl p-4ode  neumorphics font-bold mb-8 text-center text-gray-400">فرم ثبت محصول</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/*عنوان  */}
                <div>
                    <label className=" block text-sm font-medium mb-1 text-or">عنوان</label>
                    <input
                        type="text"
                        {...register("title", { required: "عنوان الزامی است" })}
                        className="neumorphic w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="عنوان محصول"
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
                </div>
                {/* توضیحات */}
                <div>
                    <label className="block text-sm font-medium mb-1 text-or">توضیحات</label>
                    <textarea
                        {...register("content", { required: "توضیحات الزامی است" })}
                        rows="3"
                        className="neumorphic w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="توضیحات محصول"
                    />
                    {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>}
                </div>
                {/* دسته بندی */}
                <div>
                    <label className="block text-sm font-medium mb-1 text-or">دسته‌بندی</label>
                    <select
                        {...register("category", { required: "دسته‌بندی الزامی است" })}
                        className="neumorphic w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">انتخاب کنید</option>
                        <option value="مردانه">مردانه</option>
                        <option value="زنانه">زنانه</option>
                        <option value="کوهنوردی">کوهنوردی </option>
                    </select>
                    {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                </div>
                {/* برند */}

                <div>
                    <label className=" block text-sm font-medium mb-1 text-or">برند</label>
                    <input
                        type="text"
                        {...register("brand", { required: "عنوان الزامی است" })}
                        className="neumorphic w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="برند محصول"
                    />
                    {errors.brand && <p className="text-red-500 text-sm mt-1">{errors.brand.message}</p>}

                </div>
                {/* اپشن */}
                <div>
                    <label className="block text-sm font-medium mb-1 text-or">نوع کاربرد</label>
                    <div className="flex flex-wrap gap-3">
                        {["رانینگ", "کوه‌نوردی", "فوتبال", "والیبال", "بسکتبال",].map((opt) => (
                            <label key={opt} className="flex items-center space-x-4">
                                <input
                                    type="checkbox"
                                    value={opt}
                                    {...register("options")}
                                    className="form-checkbox text-blue-500  rounded-full"
                                />
                                <span >{opt}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* سایز */}
                <div>
                    <label className=" block text-sm font-medium mb-1 text-or">سایزهای موجود</label>
                    <input
                        type="text"
                        {...register("sizes", {
                            required: "سایز الزامی است",
                            validate: (value) =>
                                value.split(",").map((v) => v.trim()).filter(Boolean).length > 0 ||
                                "حداقل یک سایز وارد کنید"
                        })}
                        className="neumorphic w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="مثلاً: 40, 41, 42"
                    />
                    {errors.sizes && <p className="text-red-500 text-sm mt-1">{errors.sizes.message}</p>}
                </div>

                <div>
                    <label className=" block text-sm font-medium mb-1 text-or">رنگ‌ها</label>
                    <input
                        type="text"
                        {...register("color", {
                            required: "رنگ الزامی است",
                            validate: (value) =>
                                value.split(",").map((v) => v.trim()).filter(Boolean).length > 0 ||
                                "حداقل یک رنگ وارد کنید"
                        })}
                        className="neumorphic w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="مثلاً: مشکی, قرمز, آبی"
                    />
                    {errors.color && <p className="text-red-500 text-sm mt-1">{errors.color.message}</p>}
                </div>

                {/* تعداد */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-or">تعداد</label>
                        <input
                            type="number"
                            {...register("quantity", { required: "تعداد الزامی است", min: 1 })}
                            className="w-full neumorphic p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="تعداد"
                        />
                        {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1 text-or">قیمت</label>
                        <input
                            type="number"
                            {...register("price", { required: "قیمت الزامی است", min: 0 })}
                            className="w-full neumorphic p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="قیمت"
                        />
                        {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
                    </div>
                </div>
                {/* درصد تخفیف */}
                <div>
                    <label className="block text-sm font-medium mb-1 text-or">درصد تخفیف</label>
                    <input
                        type="number"
                        {...register("discount")}
                        className="w-full p-2 neumorphic rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="درصد"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1 text-or">قیمت نهایی</label>
                    <input
                        type="text"
                        value={finalPrice.toLocaleString()} // نمایش قیمت نهایی محاسبه‌شده
                        readOnly
                        className="neumorphic w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="قیمت نهایی"
                    />
                </div>
                {/* اپلود عکس */}
                <div>
                    <label className="block text-sm font-medium mb-2 text-or">تصویر محصول</label>

                    <div
                        className="flex flex-col items-center justify-center w-full border-2 border-dashed rounded-xl p-6 cursor-pointer hover:border-blue-500 transition-all bg-gray-50 dark:bg-zinc-800"
                        onClick={() => document.getElementById("product-image").click()}
                    >
                        {imagePreview ? (
                            <div className="relative">
                                <Image
                                    src={imagePreview}
                                    alt="پیش‌نمایش"
                                    width={200}
                                    height={200}
                                    className="rounded-lg shadow-md"
                                />
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setImagePreview(null);
                                        setValue("image", "", { shouldValidate: true });
                                    }}
                                    className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center hover:bg-red-700"
                                >
                                    ×
                                </button>
                            </div>
                        ) : (
                            <div className="text-center text-gray-500 dark:text-gray-300">
                                <p className="text-sm">برای آپلود تصویر کلیک کنید یا فایل را بکشید و رها کنید</p>
                                <p className="text-xs mt-1">فرمت‌های مجاز: JPG, PNG</p>
                            </div>
                        )}
                    </div>

                    <input
                        id="product-image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden  "
                    />
                    <input type="hidden" {...register("image", { required: "تصویر الزامی است" })} />

                    {errors.image && <p className="text-red-500 text-sm mt-2">{errors.image.message}</p>}
                </div>

                <div className="flex justify-between gap-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-1/2 py-2 rounded-md text-white font-semibold transition-all ${loading
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-or hover:bg-orange-200"
                            }`}
                    >
                        {loading ? "در حال ثبت..." : "ویرایش محصول"}
                    </button>

                    <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="w-1/2 py-2 border border-green-500 text-green-600 rounded-md hover:bg-green-100 flex items-center justify-center gap-2"
                    >

                        <ArrowRightOutlined />
                        بازگشت
                    </button>
                </div>
            </form>

        </div>
    )
}
export default EditFormModule;
