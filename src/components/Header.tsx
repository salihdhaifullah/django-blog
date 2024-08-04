import Logo from "../utils/Logo";

const Header = () => {
    return (
        <header id="header" className="md:py-4 py-2 lg:px-12 md:px-6 sm:px-6 px-4 flex w-full transition-all fill-white text-white fixed top-0 flex-row justify-between items-center z-50 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)]">
            <a href="#hero">
                <Logo className="lg:h-12 md:h-11 h-10 w-fit" />
            </a>

            <div className="flex-row lg:gap-4 gap-2.5 lg:text-xl text-lg md:flex hidden">
                <Links />
            </div>

            <div className="md:hidden flex items-center">
                <button id="menu-button" className="flex flex-col justify-center items-center transition-all">
                    <span className="w-8 h-[3px] bg-white mb-1.5 transition-transform duration-300 ease-in-out"></span>
                    <span className="w-8 h-[3px] bg-white mb-1.5 transition-opacity duration-300 ease-in-out"></span>
                    <span className="w-8 h-[3px] bg-white transition-transform duration-300 ease-in-out"></span>
                </button>
            </div>

            <div id="nav-bar" className="flex !z-50 flex-col transition-all gap-4 text-xl md:hidden fixed top-14 -right-48 bg-gray-50 w-40 justify-start items-center py-8 h-fit p-2 rounded-md shadow-lg text-yellow-500">
                <Links navBar />
            </div>
        </header>
    )
}

export default Header




const Links = ({navBar}: {navBar?: boolean}) => {
    const afterClass = "after:bg-yellow-500 after:h-[1px] after:flex after:transition-all after:w-0 hover:after:w-full";
    return (
        <>
            <a href="#hero" className={navBar ? 'hover:text-yellow-600' : afterClass}>Home</a>
            <a href="#about" className={navBar ? 'hover:text-yellow-600' : afterClass}>About</a>
            <a href="#facilities" className={navBar ? 'hover:text-yellow-600' : afterClass}>Facilities</a>
            <a href="#apartments" className={navBar ? 'hover:text-yellow-600' : afterClass}>Apartments</a>
            <a href="#gallery" className={navBar ? 'hover:text-yellow-600' : afterClass}>Gallery</a>
            <a href="#reviews" className={navBar ? 'hover:text-yellow-600' : afterClass}>Reviews</a>
            <a href="#contact" className={navBar ? 'hover:text-yellow-600' : afterClass}>Contact</a>
        </>
    );
}
