
const urls = [
  "public/gallery/activities-1.jpg",
  "public/gallery/activities-2.jpg",
  "public/gallery/activities-3.jpg",
  "public/gallery/activities-4.jpg",
  "public/gallery/activities-5.jpg",
  "public/gallery/activities-6.jpg",
  "public/gallery/activities-7.jpg",
  "public/gallery/activities-8.jpg",
  "public/gallery/activities-9.jpg",
  "public/gallery/activities-10.jpg",
  "public/gallery/activities-11.jpg",
  "public/gallery/activities-12.jpg",
  "public/gallery/activities-13.jpg",
  "public/gallery/activities-14.jpg",
  "public/gallery/activities-15.jpg",
  "public/gallery/activities-16.jpg",
  "public/gallery/activities-17.jpg",
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