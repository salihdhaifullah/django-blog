const Hero = () => {
  return (
    <div id="hero" className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/hero.mp4"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="absolute bottom-[30%] z-10 flex flex-col items-center justify-center w-full gap-8 px-4">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-6xl text-yellow-500">Spectrum</h1>
          <h2 className="text-2xl text-white">GOLD COAST'S BEST KEPT SECRET</h2>
        </div>
        <a
          href="#apartments"
          className="relative overflow-hidden group px-4 py-2.5 text-2xl font-bold text-white bg-yellow-600 rounded-full shadow-lg hover:bg-yellow-500"
        >
          BOOK NOW
          <div className="wave group-hover:hidden"></div>
        </a>
      </div>
    </div>
  );
}

export default Hero;
