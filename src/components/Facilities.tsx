import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { IoClose } from "react-icons/io5"
import { MdEmojiPeople } from "react-icons/md"

const urls = [
  "/facilities/facilities-1.jpg",
  "/facilities/facilities-2.jpg",
  "/facilities/facilities-3.jpg",
  "/facilities/facilities-4.jpg",
  "/facilities/facilities-5.jpg",
  "/facilities/facilities-6.jpg",
  "/facilities/facilities-7.jpg",
  "/facilities/facilities-8.jpg",
  "/facilities/facilities-9.jpg",
  "/facilities/facilities-10.jpg",
  "/facilities/facilities-11.jpg",
  "/facilities/facilities-12.jpg",
]

const Facilities = () => {
  return (
    <div className="flex w-full flex-col p-4 justify-center items-center gap-8">
      <div className="flex flex-row text-3xl font-bold justify-center items-center w-full gap-2 text-center text-yellow-500">
        <MdEmojiPeople className="text-5xl" />
        <h2>Our Facilities</h2>
      </div>

      <div className="flex flex-row flex-wrap gap-2 w-full justify-center" id="gallery-items-container">
        {urls.map((url, index) => (
          <img width={300} src={url} key={url} id={`GALLERY_${index}`} className="cursor-pointer" />
        ))}
      </div>

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
    </div>
  )
}

export default Facilities