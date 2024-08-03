import { MdBeachAccess, MdLocationOn, MdStar, MdVisibility } from "react-icons/md"

const About = () => {
  return (
    <section className="flex flex-col gap-8 rounded-lg w-full" id="about">

      <div className="flex flex-col justify-center items-center w-full gap-4">
        <div className="flex flex-row md:gap-2 gap-1 justify-center text-center text-yellow-500">
          <MdStar className="md:text-4xl text-3xl" />
          <h2 className="md:text-3xl text-2xl">About Us</h2>
        </div>

        <p className="italic md:text-lg text-base text-gray-500 max-w-xl text-center">Discover the charm of Spectrum waterfront holiday apartments, nestled in the serene beauty of Surfers Paradise on Budds Beach.</p>
      </div>

      <div className="flex xl:flex-row flex-col xl:gap-10 gap-16 justify-evenly items-center w-full">

        <img src="/location.jpg" alt="View from Spectrum" className="md:h-[440px] md:w-[659px] max-h-[440px] w-full h-auto object-contain object-center rounded-lg" />

        <div className="flex xl:h-[440px] xl:w-[659px] w-full justify-center items-center">
          <div className="flex flex-col xl:gap-6 w-full h-full xl:justify-between gap-12 justify-center items-center">
            <div className="flex flex-col gap-1 max-w-[659px]">
              <div className="flex flex-row gap-2 text-center items-center justify-center text-blue-400">
                <MdLocationOn className="md:text-2xl text-xl flex" />
                <h3 className="md:text-xl text-lg">Our Location</h3>
              </div>

              <p className="text-gray-500 text-center md:text-base text-sm">Our Surfers Paradise riverfront location is often celebrated as the Gold Coast's Best Kept Secret. Enjoy peaceful and convenient north-facing holiday accommodation with stunning views of the majestic Nerang River.</p>
            </div>

            <div className="flex flex-col gap-1 max-w-[659px]">
              <div className="flex flex-row gap-2 text-center items-center justify-center text-blue-400">
                <MdBeachAccess className="md:text-2xl text-xl flex" />
                <h3 className="md:text-xl text-lg">A Tranquil Escape</h3>
              </div>

              <p className="text-gray-500 text-center md:text-base text-sm">Experience romance and seclusion on our pristine white sand beach, complete with palm trees and a picturesque picnic area. For those seeking a bit more action, take a leisurely stroll to the main beach and Surfers Paradise's renowned surf-patrolled sands.</p>
            </div>

            <div className="flex flex-col gap-1 max-w-[659px]">
              <div className="flex flex-row gap-2 text-center items-center justify-center text-blue-400">
                <MdVisibility className="md:text-2xl text-xl flex" />
                <h3 className="md:text-xl text-lg">Endless Entertainment</h3>
              </div>

              <p className="text-gray-500 text-center md:text-base text-sm">From the large balconies of your apartment, you'll have a front-row seat to a variety of captivating sights—from early morning canoe races to the enchanting nighttime reflections on the water. Spectrum is not just a place to stay; it's a destination to experience.</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default About