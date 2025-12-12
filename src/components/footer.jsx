const Footer = () => {
    return (
        <footer className="sm:flex sticky p-0 bottom-0 w-full bg-transparent hover:border-t-4 sm:hover:border-t-8 border-green-500 rounded-t-xl sm:rounded-t-2xl mt-0">
            <div className="flex w-full p-0 justify-center">
                <div className="text-white p-0 gap-0.5 bg-blue-500 w-full px-2 sm:px-3 py-2 sm:py-3 md:py-4 border-green-500 border-t-2 rounded-t-none relative font-semibold hover:font-bold hover:border-t-0 border-r-2 transition-all duration-100 hover:border-r-4 sm:hover:border-r-8 border-b-gray-600 border-b-2 box-border flex justify-center items-center text-xs sm:text-sm md:text-base lg:text-xl text-center">
                    © 2025 <span className="text-green-300 text-lg sm:text-xl md:text-2xl lg:text-3xl">Passly</span> - <span className="text-green-300">Pass</span>word Friend<span className="text-green-300">ly</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
