const Header = () => {
  return (
    <header className="flex fixed-0 w-full flex-row justify-between items-center">
      <div>
        <img src="../../public/spectrum-logo-white.svg" alt="log" />
      </div>

      <Links />
    </header>
  )
}

export default Header




const Links = () => {
  return (
      <div>
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#gallery">Gallery</a>
        <a href="#apartments">Apartments</a>
        <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
      </div>
  );
}