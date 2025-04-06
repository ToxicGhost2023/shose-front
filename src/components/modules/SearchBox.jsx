import React from 'react';

function SearchBox() {
    return (
        <div className="p-2 flex flex-row items-center gap-2 max-w-full">
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
                        <path
                            d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"
                        ></path>
                    </svg>
                </div>
                <input
                    placeholder="جستجو..."
                    type="text"
                    className="outline-none text-base sm:text-lg md:text-[20px] bg-transparent w-full text-[var(--text)] font-normal px-4"
                />
            </div>
        </div>
    );
}

export default SearchBox;