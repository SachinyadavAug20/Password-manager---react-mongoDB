const Footer = () => {
    return (
        <footer className="flex bg-transparent hover:border-t-4 sm:hover:border-t-8 border-green-500 rounded-t-xl sm:rounded-t-2xl mt-0">
            <div className="flex w-full justify-center">
                <div className="text-white gap-0.5 bg-blue-500 w-full px-3 py-3 sm:py-4 border-green-500 border-t-2 rounded-t-none relative font-semibold hover:font-bold hover:border-t-0 border-r-2 transition-all duration-100 hover:border-r-4 sm:hover:border-r-8 border-b-gray-600 border-b-2 box-border flex justify-center items-center text-sm sm:text-base md:text-xl text-center">
                    © 2025 <span className="text-green-300 text-[24px]">Passly</span> - <span className="text-green-300">Pass</span>word Friend<span className="text-green-300">ly</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
