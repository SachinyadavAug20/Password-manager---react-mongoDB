
const Navbar = () => {
    return (
        <nav className="flex flex-col sm:flex-row gap-0 bg-transparent hover:border-b-8 border-green-500  rounded-b-2xl">
            <div className="flex w-full">
                <div className="w-full sm:w-fit text-nowrap flex justify-center border-2 hover:border-b-0 hover:border-l-4 sm:hover:border-l-8 transition-all duration-100 cursor-pointer border-r-0 border-b-2 border-green-500 LOGO ml-0 rounded-bl-2xl px-3 sm:px-5 py-1 sm:py-2 font-semibold text-lg sm:text-xl md:text-3xl bg-blue-500 border-t-gray-600 text-white">
                    <a href="/">
                        <span className="text-green-400 text-lg sm:text-xl md:text-4xl"> &lt;</span>
                        Pass
                        <span className="text-green-400 text-lg sm:text-xl md:text-3xl">ly</span>
                        <span className="text-green-400 text-lg sm:text-xl md:text-4xl"> /&gt;</span>
                    </a>
                </div>
                <ul className="text-white bg-blue-500 w-full px-3 py-2 sm:py-4 border-green-500 border-b-2 rounded-bl-none relative font-semibold hover:font-bold hover:border-b-0 border-r-2 transition-all duration-100 hover:border-r-8 border-t-gray-600  border-t-2 box-border mr-0 rounded-b-2xl flex flex-col sm:flex-row gap-4 sm:gap-12 text-lg sm:text-xl list-none">
                    <div className="sm:flex gap-12 hidden">
                        <a href="/"><li>Home</li></a>
                        <a href="/"><li>About</li></a>
                        <a href="/"><li>Contact</li></a>
                    </div>
                        <div className="text-white justify-center items-center bg-green-900 hover:animate-shake transition-all duration-50 flex gap-2 px-3 py-0 border-green-500 sm:absolute right-0 top-0 mt-2 border-4 rounded-full mx-2">
                        <div>
                            Github
                        </div>
                        <a href="https://github.com/SachinyadavAug20/Password-manager---react-mongoDB" target="_blank" className="absolute w-full h-full"></a>
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fgithub%2Fgithub_PNG85.png&f=1&nofb=1&ipt=21ca30b80687e4faacfb98f9ae17774e64eef2ca549f2817a2698ef16902e58a" alt="githublogo" className="w-6 sm:w-8 p-0 m-0" />
                    </div>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar
