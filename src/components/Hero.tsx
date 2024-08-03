const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      <video
        preload="none"
        poster="hero-thumbnail.jpg"
        autoPlay
        loop
        muted
        playsInline
        src="/hero.mp4"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="absolute bottom-[30%] z-10 flex flex-col text-center items-center justify-center w-full gap-8 px-4">
        <div className="flex flex-col items-center gap-3">
          <h1 className="md:text-6xl text-5xl text-yellow-500">Spectrum</h1>
          <h2 className="md:text-2xl text-xl text-white">GOLD COAST'S BEST KEPT SECRET</h2>
        </div>
        <a
          href="#apartments"
          className="relative overflow-hidden group md:px-4 px-2 md:py-2.5 py-1.5 md:text-2xl text-xl font-bold text-white bg-yellow-600 rounded-full shadow-lg hover:bg-yellow-500"
        >
          BOOK NOW
          <div className="wave group-hover:hidden"></div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
