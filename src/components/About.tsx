import { MdBeachAccess, MdLocationOn, MdStar, MdVisibility } from "react-icons/md"

const About = () => {
  return (
    <div className="flex flex-col gap-8 bg-white rounded-lg p-12 w-full">

      <div className="flex flex-col justify-center items-center w-full gap-4">
        <div className="flex flex-row text-3xl font-bold gap-2 text-center text-yellow-500">
          <MdStar className="text-4xl" />
          <h2>Gold Coast's Best Kept Secret</h2>
        </div>

        <p className="italic text-lg text-gray-600 max-w-xl text-center">Discover the charm of Spectrum waterfront holiday apartments, nestled in the serene beauty of Surfers Paradise on Budds Beach.</p>
      </div>

      <div className="flex gap-2 flex-row justify-between items-center w-full">
        <div className="flex w-full justify-start items-center ml-8">
          <div className="flex flex-col gap-8 max-w-xl">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 text-center -ml-8 items-center text-blue-500">
                <MdLocationOn className="text-2xl flex" />
                <h3 className="text-xl font-semibold">Our Location:</h3>
              </div>

              <p className="text-gray-600">Our Surfers Paradise riverfront location is often celebrated as the Gold Coast's Best Kept Secret. Enjoy peaceful and convenient north-facing holiday accommodation with stunning views of the majestic Nerang River.</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 text-center -ml-8 items-center text-blue-500">
                <MdBeachAccess className="text-2xl flex" />
                <h3 className="text-xl font-semibold">A Tranquil Escape:</h3>
              </div>

              <p className="text-gray-600">Experience romance and seclusion on our pristine white sand beach, complete with palm trees and a picturesque picnic area. For those seeking a bit more action, take a leisurely stroll to the main beach and Surfers Paradise's renowned surf-patrolled sands.</p>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2 text-center -ml-8 items-center text-blue-500">
                <MdVisibility className="text-2xl flex" />
                <h3 className="text-xl font-semibold">Endless Entertainment:</h3>
              </div>

              <p className="text-gray-600">From the large balconies of your apartment, you'll have a front-row seat to a variety of captivating sights—from early morning canoe races to the enchanting nighttime reflections on the water. Spectrum is not just a place to stay; it's a destination to experience.</p>
            </div>
          </div>
        </div>

        <img src="/location.jpg" alt="View from Spectrum" className="w-[45%] h-auto rounded-lg" />
      </div>

    </div>
  )
}

export default About