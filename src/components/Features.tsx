import { MdDirectionsBoat, MdLocationOn, MdPool, MdRowing, MdSportsTennis, MdWifi } from "react-icons/md"

const Features = () => {
  return (
    <div className="flex flex-row gap-6 p-6 justify-center">
      <div className="flex items-center gap-4 shadow-lg rounded-3xl bg-blue-100 px-4 py-2">
        <MdDirectionsBoat className="text-blue-500 text-2xl" />
        <span className="text-gray-500">Boat Ramp Near by</span>
      </div>

      <div className="flex items-center gap-4 shadow-lg rounded-3xl bg-blue-100 px-4 py-2">
        <MdWifi className="text-blue-500 text-2xl" />
        <span className="text-gray-500">Free High Speed Wifi</span>
      </div>

      <div className="flex items-center gap-4 shadow-lg rounded-3xl bg-blue-100 px-4 py-2">
        <MdPool className="text-blue-500 text-2xl" />
        <span className="text-gray-500">2 Swimming Pools</span>
      </div>

      <div className="flex items-center gap-4 shadow-lg rounded-3xl bg-blue-100 px-4 py-2">
        <MdSportsTennis className="text-blue-500 text-2xl" />
        <span className="text-gray-500">Tennis Court</span>
      </div>

      <div className="flex items-center gap-4 shadow-lg rounded-3xl bg-blue-100 px-4 py-2">
        <MdLocationOn className="text-blue-500 text-2xl" />
        <span className="text-gray-500">Waterfront Location</span>
      </div>

      <div className="flex items-center gap-4 shadow-lg rounded-3xl bg-blue-100 px-4 py-2">
        <MdRowing className="text-blue-500 text-2xl" />
        <span className="text-gray-500">Watersport Hire</span>
      </div>
    </div>
  )
}

export default Features