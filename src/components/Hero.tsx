const Hero = () => {
  return (
    <div className="w-full max-h-screen h-auto overflow-hidden relative">
      <div className="inset-0 w-full h-full absolute bg-black bg-opacity-50">

      </div>
      <div className="absolute bottom-[30%] z-[9] flex justify-center items-center flex-col w-full gap-8">
        <div className="gap-3 flex justify-center items-center flex-col">
          <h1 className="text-6xl text-yellow-500">Spectrum</h1>
          <h2 className="text-2xl text-white">GOLD COAST'S BEST KEPT SECRET</h2>
        </div>
        <a href="#apartments" className="text-white bg-yellow-600 hover:bg-yellow-500 shadow-lg px-4 py-2.5 text-2xl rounded-[40px] font-bold relative overflow-hidden group">
          BOOK NOW
          <div className="wave group-hover:hidden"></div>
        </a>
      </div>

      <video autoPlay loop muted playsInline src="/hero.mp4" />
    </div>
  )
}

export default Hero