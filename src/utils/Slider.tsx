import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { IoClose } from "react-icons/io5"

const Slider = () => {
  return (
    <div id="bg-modal" className="fixed gap-8 top-0 left-0 w-full h-full bg-black bg-opacity-70 items-center justify-center hidden z-[100] non-selectable">
      <div className="!h-[80vh] flex flex-col justify-center">
        <IoIosArrowBack id="gallery-prev" className="text-6xl text-gray-200 cursor-pointer" />
      </div>

      <img id="gallery-img" className="w-[70vw] max-h-[80vh] object-contain rounded-lg shadow-lg" />

      <div className="!h-[80vh] flex flex-col justify-center relative">
        <IoClose id="gallery-close" className="text-6xl text-gray-200 cursor-pointer absolute top-0" />
        <IoIosArrowForward id="gallery-next" className="text-6xl text-gray-200 cursor-pointer" />
      </div>
    </div>
  )
}

export default Slider