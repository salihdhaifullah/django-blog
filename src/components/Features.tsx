import { MdDirectionsBoat, MdLocationOn, MdPool, MdRowing, MdSportsTennis, MdWifi } from "react-icons/md"

const Features = () => {
  return (
    <div className="flex flex-row flex-wrap md:gap-6 gap-3 justify-center">
      <div className="flex items-center md:gap-4 gap-2 shadow-lg rounded-3xl bg-blue-100 md:px-4 px-2 md:py-2 py-1">
        <MdDirectionsBoat className="text-blue-500 text-xl md:text-2xl" />
        <span className="text-gray-500 md:text-base text-sm">Boat Ramp Near by</span>
      </div>

      <div className="flex items-center md:gap-4 gap-2 shadow-lg rounded-3xl bg-blue-100 md:px-4 px-2 md:py-2 py-1">
        <MdWifi className="text-blue-500 text-xl md:text-2xl" />
        <span className="text-gray-500 md:text-base text-sm">Free High Speed Wifi</span>
      </div>

      <div className="flex items-center md:gap-4 gap-2 shadow-lg rounded-3xl bg-blue-100 md:px-4 px-2 md:py-2 py-1">
        <MdPool className="text-blue-500 text-xl md:text-2xl" />
        <span className="text-gray-500 md:text-base text-sm">2 Swimming Pools</span>
      </div>

      <div className="flex items-center md:gap-4 gap-2 shadow-lg rounded-3xl bg-blue-100 md:px-4 px-2 md:py-2 py-1">
        <MdSportsTennis className="text-blue-500 text-xl md:text-2xl" />
        <span className="text-gray-500 md:text-base text-sm">Tennis Court</span>
      </div>

      <div className="flex items-center md:gap-4 gap-2 shadow-lg rounded-3xl bg-blue-100 md:px-4 px-2 md:py-2 py-1">
        <MdLocationOn className="text-blue-500 text-xl md:text-2xl" />
        <span className="text-gray-500 md:text-base text-sm">Waterfront Location</span>
      </div>

      <div className="flex items-center md:gap-4 gap-2 shadow-lg rounded-3xl bg-blue-100 md:px-4 px-2 md:py-2 py-1">
        <MdRowing className="text-blue-500 text-xl md:text-2xl" />
        <span className="text-gray-500 md:text-base text-sm">Watersport Hire</span>
      </div>
    </div>
  )
}

export default Features