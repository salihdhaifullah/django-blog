import { MdLocalActivity } from "react-icons/md"

const urls = [
  "/gallery/activities-1.jpg",
  "/gallery/activities-2.jpg",
  "/gallery/activities-3.jpg",
  "/gallery/activities-4.jpg",
  "/gallery/activities-5.jpg",
  "/gallery/activities-6.jpg",
  "/gallery/activities-7.jpg",
  "/gallery/activities-8.jpg",
  "/gallery/activities-9.jpg",
  "/gallery/activities-10.jpg",
  "/gallery/activities-11.jpg",
  "/gallery/activities-12.jpg",
  "/gallery/activities-13.jpg",
  "/gallery/activities-14.jpg",
  "/gallery/activities-15.jpg"
]

const Gallery = () => {
  return (
    <section className="flex w-full flex-col justify-center items-center gap-8" id="gallery">
      <div className="flex flex-row justify-center items-center w-full md:gap-2 gap-1 text-center text-yellow-500 md:text-4xl text-3xl">
        <MdLocalActivity />
        <h2>Our Gallery</h2>
      </div>

      <div className="flex flex-row flex-wrap w-full gap-2 justify-center items-center" id="gallery_container">
        {urls.map((url, index) => (
          <img width={350} className="h-auto gallery_img shadow-md rounded-md cursor-pointer" src={url} key={url} id={`gallery_${index}`} />
        ))}
      </div>
    </section>
  )
}

export default Gallery