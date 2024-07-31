
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
  "/gallery/activities-16.jpg",
  "/gallery/activities-17.jpg",
]

const Gallery = () => {
  return (
    <div className="flex w-full flex-col p-4 justify-center items-center">
        <h2 className="text-2xl font-semibold text-blue-600 mb-8 text-center">Gallery</h2>
        <div className="flex flex-row flex-wrap gap-2 w-full justify-center">
            {urls.map(url => (
                <img width={300} className="h-auto" src={url} key={url} />
            ))}
        </div>
    </div>
  )
}

export default Gallery