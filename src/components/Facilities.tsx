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
    <section className="flex w-full flex-col justify-center items-center gap-8" id="facilities">
      <div className="flex flex-row justify-center items-center w-full md:gap-2 gap-1 text-center text-yellow-500">
        <MdEmojiPeople className="md:text-4xl text-3xl" />
        <h2 className="md:text-3xl text-2xl">Our Facilities</h2>
      </div>

      <Features />

      <div className="flex flex-row flex-wrap w-full gap-2 justify-center items-center" id="facilities_container">
        {urls.map((url, index) => (
          <img width={350} src={url} key={url} id={`facilities_${index}`} className="cursor-pointer shadow-md rounded-md gallery_img" />
        ))}
      </div>
    </section>
  )
}

export default Facilities