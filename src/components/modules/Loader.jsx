import { Spin } from "antd";

function Loader() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative flex items-center">
                <span className="text-8xl mr-[50px]">👟</span>
                <Spin
                    size="large"
                    className="absolute text-12xl animate-spin text-gray-900 transition-colors duration-1000 ease-in-out"
                    style={{ color: `hsl(240, 50%, 50%)` }}
                />
            </div>
        </div>
    );
}

export default Loader;