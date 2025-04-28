import { Triangle } from 'react-loader-spinner'

function Loader() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="relative flex items-center">
                <Triangle
                    visible={true}
                    height="180"
                    width="180"
                    color="#FFA500"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        </div>
    );
}

export default Loader;