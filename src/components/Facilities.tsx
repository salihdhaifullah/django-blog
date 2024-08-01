import { MdEmojiPeople } from "react-icons/md"
import Features from "./Features"

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
    <div className="flex w-full flex-col p-12 pt-24 justify-center items-center gap-8" id="facilities">
      <div className="flex flex-row text-3xl justify-center items-center w-full gap-2 text-center text-yellow-500">
        <MdEmojiPeople className="text-5xl" />
        <h2>Our Facilities</h2>
      </div>

      <Features />

      <div className="flex flex-row flex-wrap w-full gap-2 justify-center items-center" id="facilities_container">
        {urls.map((url, index) => (
          <img width={300} src={url} key={url} id={`facilities_${index}`} className="cursor-pointer shadow-md rounded-md gallery_img" />
        ))}
      </div>
    </div>
  )
}

export default Facilities