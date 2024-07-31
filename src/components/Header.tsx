const Header = () => {
  return (
    <header className="flex fixed top-0 w-full flex-row justify-between items-center py-4 px-12 z-10 bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0)]">
      <a href="#home">
        <img className="h-12" src="/logo.svg" alt="log" />
      </a>
      <Links />
    </header>
  )
}

export default Header




const Links = () => {
  return (
      <div className="flex flex-row gap-4 text-white text-lg">
        <a href="#home" className="after:w-0 hover:after:w-full after:bg-yellow-500 after:h-[1px] after:flex after:transition-all">Home</a>
        <a href="#features" className="after:w-0 hover:after:w-full after:bg-yellow-500 after:h-[1px] after:flex after:transition-all">Features</a>
        <a href="#gallery" className="after:w-0 hover:after:w-full after:bg-yellow-500 after:h-[1px] after:flex after:transition-all">Gallery</a>
        <a href="#apartments" className="after:w-0 hover:after:w-full after:bg-yellow-500 after:h-[1px] after:flex after:transition-all">Apartments</a>
        <a href="#reviews" className="after:w-0 hover:after:w-full after:bg-yellow-500 after:h-[1px] after:flex after:transition-all">Reviews</a>
        <a href="#contact" className="after:w-0 hover:after:w-full after:bg-yellow-500 after:h-[1px] after:flex after:transition-all">Contact</a>
      </div>
  );
}