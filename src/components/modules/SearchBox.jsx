"use client";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchProducts } from "@/store/slice/productsReducer";

function SearchBox() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { products, status, error } = useSelector((state) => state.products);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);


    useEffect(() => {
        if (products.length > 0) {
            if (searchQuery) {
                setFilteredProducts(
                    products.filter(
                        (product) =>
                            product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.category.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                );
            } else {
                setFilteredProducts(products);
            }
        }
    }, [searchQuery, products]);

    const handleInputFocus = () => {
        setIsDropdownOpen(true);
    };


    const handleInputBlur = () => {
        setTimeout(() => setIsDropdownOpen(false), 200);
    };


    const handleProductClick = (id) => {
        setIsDropdownOpen(false);
        setSearchQuery("");
        router.push(`/products/${id}`);
    };


    const handleSearch = () => {
        if (filteredProducts.length > 0) {
            handleProductClick(filteredProducts[0]._id);
        }
    };


    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="p-2 flex flex-col items-center gap-2 max-w-full relative">
            <div
                className="neumorphic w-full sm:w-[250px] md:w-[300px] h-[50px] border-none rounded-full flex items-center overflow-hidden
        group focus-within:shadow-[inset_3px_3px_6px_var(--neu-shadow1),inset_-3px_-3px_6px_var(--neu-shadow2)] 
        transition-all duration-300"
            >
                <div className="flex items-center justify-center mr-[15px] px-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="22"
                        height="22"
                        className="fill-[var(--text)] group-focus-within:fill-[#F77F00]"
                    >
                        <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"></path>
                    </svg>
                </div>
                <input
                    placeholder="جستجو..."
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onKeyDown={handleKeyDown}
                    className="outline-none text-base sm:text-lg md:text-[20px] bg-transparent w-full text-[var(--text)] font-normal px-4 dark:text-red-700"
                />
                <button
                    onClick={handleSearch}
                    className="px-3 text-sm bg-[#F77F00] text-white hover:scale- rounded-l-full h-full"
                >
                    جستجو
                </button>
            </div>

            {isDropdownOpen && filteredProducts.length > 0 && (
                <div className="mt-2 w-full z-20 max-h-80 overflow-y-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg absolute z-10 top-14">
                    <ul>
                        {filteredProducts.map((product) => (
                            <li
                                key={product._id}
                                className="p-3  border-b cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                onClick={() => handleProductClick(product._id)}
                            >
                                <h3 className="font-bold text-sm">{product.title}</h3>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                    {product.category}
                                </p>
                                {product.brand && (
                                    <p className="text-xs text-gray-600 dark:text-gray-400">
                                        {product.brand}
                                    </p>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {isDropdownOpen && searchQuery && filteredProducts.length === 0 && (
                <p className="text-center text-gray-500 mt-2">محصولی پیدا نشد.</p>
            )}
        </div>
    );
}

export default SearchBox;