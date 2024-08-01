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
  "/gallery/activities-15.jpg",
  "/gallery/activities-16.jpg"
]

const Gallery = () => {
  return (
    <div className="flex w-full flex-col p-12 pt-24 justify-center items-center gap-8" id="gallery">
      <div className="flex flex-row text-3xl justify-center items-center w-full gap-2 text-center text-yellow-500">
        <MdLocalActivity className="text-5xl" />
        <h2>Our Gallery</h2>
      </div>

      <div className="flex flex-row flex-wrap gap-2 w-full justify-center" id="gallery_container">
        {urls.map((url, index) => (
          <img width={300} className="h-auto gallery_img  shadow-md rounded-md  cursor-pointer" src={url} key={url} id={`gallery_${index}`} />
        ))}
      </div>
    </div>
  )
}

export default Gallery