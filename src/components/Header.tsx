import Logo from "../utils/Logo";

const Header = () => {
  return (
    <header id="header" className="flex w-full transition-all fill-white text-white fixed top-0 flex-row justify-between items-center py-4 px-12 z-10 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)]">
      <a href="#home">
        <Logo className="h-12 w-fit" />
      </a>
      <Links />
    </header>
  )
}

export default Header




const Links = () => {
  return (
      <div className="flex flex-row gap-4 text-xl">
        <a href="#hero" className="after:w-0 hover:after:w-full after:bg-yellow-500 after:h-[1px] after:flex after:transition-all">Home</a>
        <a href="#about" className="after:w-0 hover:after:w-full after:bg-yellow-500 after:h-[1px] after:flex after:transition-all">About</a>
        <a href="#facilities" className="after:w-0 hover:after:w-full after:bg-yellow-500 after:h-[1px] after:flex after:transition-all">Facilities</a>
        <a href="#apartments" className="after:w-0 hover:after:w-full after:bg-yellow-500 after:h-[1px] after:flex after:transition-all">Apartments</a>
        <a href="#gallery" className="after:w-0 hover:after:w-full after:bg-yellow-500 after:h-[1px] after:flex after:transition-all">Gallery</a>
        <a href="#reviews" className="after:w-0 hover:after:w-full after:bg-yellow-500 after:h-[1px] after:flex after:transition-all">Reviews</a>
        <a href="#contact" className="after:w-0 hover:after:w-full after:bg-yellow-500 after:h-[1px] after:flex after:transition-all">Contact</a>
      </div>
  );
}