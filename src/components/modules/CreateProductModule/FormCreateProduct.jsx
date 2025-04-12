"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Image from "next/image";
import { applyDiscount } from "@/utils/discountUtils";
import { ArrowRightOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { createProduct } from "@/utils/fetching";

const FormCreateProduct = () => {
    const { register, handleSubmit, watch, setValue, formState: { errors }, reset } = useForm();
    const [imagePreview, setImagePreview] = useState(null);
    const [finalPrice, setFinalPrice] = useState(null);
    const [loading, setLoading] = useState(false);

    const price = watch("price");
    const discount = watch("discount");

    // اعمال تخفیف
    useEffect(() => {
        if (price && discount !== undefined) {
            try {
                const result = applyDiscount(Number(price), Number(discount || 0));
                setFinalPrice(result);
            } catch (e) {
                setFinalPrice(null);
            }
        } else {
            setFinalPrice(null);
        }
    }, [price, discount]);

    // فرستادن درخواست
    const onSubmit = async (data) => {
        const productData = {
            ...data,
            finalPrice: finalPrice || data.price,
        };

        setLoading(true);
        try {
            const { result, ok } = await createProduct(productData)

            if (ok) {
                Swal.fire({
                    icon: "success",
                    title: "ثبت موفق",
                    text: "محصول با موفقیت ثبت شد!",
                    timer: 2000,
                    showConfirmButton: false,
                });
                reset();
                setImagePreview(null);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "خطا",
                    text: result.message || "مشکلی پیش آمد!",
                });
            }
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "خطای سرور",
                text: "مشکلی در ارسال اطلاعات پیش آمد",
            });
        } finally {
            setLoading(false);
        }
    };
    // تبدیل فایل به بیس 64
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = reader.result;
                setImagePreview(base64);
                setValue("image", base64, { shouldValidate: true });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="neumorphics w-full mt-10 max-w-lg mx-auto p-6 rounded-2xl bg-white shadow-lg dark:bg-zinc-900 dark:text-white">
            <h2 className="text-3xl p-4 neumorphics font-bold mb-8 text-center text-gray-400">فرم ثبت محصول</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

                <div>
                    <label className="block text-sm font-medium mb-1 text-or">دسته‌بندی</label>
                    <select
                        {...register("category", { required: "دسته‌بندی الزامی است" })}
                        className="neumorphic w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">انتخاب کنید</option>
                        <option value="men">مردانه</option>
                        <option value="women">زنانه</option>
                    </select>
                    {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                </div>

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

                <div>
                    <label className="block text-sm font-medium mb-1 text-or">درصد تخفیف</label>
                    <input
                        type="number"
                        {...register("discount")}
                        className="w-full p-2 neumorphic rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="درصد"
                    />
                </div>

                {finalPrice && (
                    <div className="text-center text-green-600 font-bold text-lg">
                        قیمت نهایی: {finalPrice.toLocaleString()} تومان
                    </div>
                )}

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
                        {loading ? "در حال ثبت..." : "ثبت محصول"}
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
    );
};

export default FormCreateProduct;
