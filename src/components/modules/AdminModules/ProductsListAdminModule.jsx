"use client"
import Image from 'next/image'
import ProductSearchBox from '../ProductspageModule/ProductSearchBox'
import Link from 'next/link'

function ProductsListAdminModule({ products, setFilteredProducts }) {

    return (
        <div className="p-6">
            <div>
                <ProductSearchBox products={products} setFilteredProducts={setFilteredProducts} />

            </div>
            <h1 className="text-3xl dark:text-white  font-bold text-gray-800 mb-6 text-center">لیست محصولات</h1>

            <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="neumorphic p-4  rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-[430px]"
                    >
                        <div>
                            <Image
                                width={400}
                                height={400}
                                src={product.image}
                                alt={product.title}
                                className="w-full h-48 object-cover rounded-xl mb-4"
                            />
                            <h2 className="text-lg font-semibold text-gray-900 mb-1 dark:text-white">{product.title}</h2>
                            <p className="text-sm text-gray-600 mb-2 line-clamp-2 dark:text-white">{product.content}</p>
                            <p className="text-lg font-medium text-green-700">
                                قیمت: {product.price.toLocaleString('fa-IR')} تومان
                            </p>

                        </div>

                        <div className="mt-4 flex justify-between gap-2">
                            <Link
                                href={`/panelAdmin/edit/${product._id}`}
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded-lg transition duration-200"
                            >
                                ویرایش
                            </Link>
                            <Link
                                href={`/panelAdmin/delete/${product._id}`}
                                className="w-full bg-red-500 hover:bg-red-600 text-white text-sm py-2 px-4 rounded-lg transition duration-200"
                            >
                                حذف
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductsListAdminModule
