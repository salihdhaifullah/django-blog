import { useRef, useState } from "react";
import { MdBathtub, MdBed, MdPeople } from "react-icons/md";

const apartments = [
  {
    type: 'Deluxe',
    images: [
      '/apartments/deluxe/deluxe-1.jpg',
      '/apartments/deluxe/deluxe-2.jpg',
      '/apartments/deluxe/deluxe-3.jpg',
      '/apartments/deluxe/deluxe-4.jpg',
      '/apartments/deluxe/deluxe-5.jpg',
      '/apartments/deluxe/deluxe-6.jpg',
      '/apartments/deluxe/deluxe-7.jpg',
      '/apartments/deluxe/deluxe-8.jpg',
      '/apartments/deluxe/deluxe-9.jpg',
    ],
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    description: 'Experience luxury in our Deluxe Apartment with stunning views and premium amenities. Perfect for families or groups seeking extra comfort.'
  },
  {
    type: 'Superior',
    images: [
      '/apartments/superior/superior-1.jpg',
      '/apartments/superior/superior-2.jpg',
      '/apartments/superior/superior-3.jpg',
      '/apartments/superior/superior-4.jpg',
      '/apartments/superior/superior-5.jpg',
      '/apartments/superior/superior-6.jpg',
      '/apartments/superior/superior-7.jpg',
      '/apartments/superior/superior-8.jpg',
      '/apartments/superior/superior-9.jpg',
      '/apartments/superior/superior-10.jpg',
      '/apartments/superior/superior-11.jpg',
    ],
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    description: 'Our Superior Apartment offers a cozy and elegant space for couples or solo travelers. Enjoy a comfortable stay with all essential amenities.'
  },
  {
    type: 'Standard',
    images: [
      '/apartments/standard/standard-1.jpg',
      '/apartments/standard/standard-2.jpg',
      '/apartments/standard/standard-3.jpg',
      '/apartments/standard/standard-4.jpg',
      '/apartments/standard/standard-5.jpg',
      '/apartments/standard/standard-6.jpg',
      '/apartments/standard/standard-7.jpg',
    ],
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    description: 'Our Standard Apartment provides a budget-friendly option without sacrificing comfort. Ideal for solo travelers looking for a great stay.'
  }
];


const Apartments = () => {
  return (
    <section className="flex flex-col justify-center p-12 pt-24 w-full items-center gap-8" id="apartments">
        <div className="flex flex-row text-3xl justify-center items-center w-full gap-2 text-center text-yellow-500">
        <MdBed className="text-5xl" />
        <h2>Our Apartments</h2>
      </div>

      <div className="flex flex-wrap flex-row gap-8 justify-between">
        {apartments.map((apt, index) => (
          <ApartmentCard key={index} {...apt} />
        ))}
      </div>
    </section>
  )
}

export default Apartments


const ApartmentCard = (props: typeof apartments[0]) => {
  const container = useRef<HTMLDivElement>(null)
  const width = useRef(0)
  const [activeElement, setActiveElement] = useState(0)

  const handleClick = (index: number) => {
    container.current?.scrollTo({left: index*width.current, behavior: "smooth"})
    setActiveElement(index)
  }

  return (
    <div className="bg-yellow-50 rounded-lg shadow-lg overflow-hidden w-[550px]">

      <div ref={e => e && (width.current = e.offsetWidth)} className="flex w-full h-auto overflow-hidden flex-col gap-4">
        <div ref={container} className="w-full flex flex-row h-full overflow-x-auto hide-scroll-bar" id={`${props.type}_container`}>
          {props.images.map((url, index) => (
            <img src={url} key={url} className="w-full cursor-pointer gallery_img" id={`${props.type}_${index}`}/>
          ))}
        </div>

        <div className="flex flex-row gap-2 px-6 w-full justify-center cursor-pointer">
          {props.images.map((_, index) => (
            <div onClick={() => handleClick(index)} key={index} className={`rounded-full p-1.5 ${index === activeElement ? "bg-yellow-500" : "bg-gray-200"}`}></div>
          ))}
        </div>
      </div>

      <div className="p-6 flex flex-col gap-6 text-center items-center">
        <h3 className="text-2xl text-yellow-500">{props.type} Apartments</h3>

        <div className="flex flex-row justify-evenly w-full text-gray-500">
          <div className="flex items-center gap-2">
            <MdBed className="text-2xl text-blue-600" />
            <span>{props.bedrooms} Bedrooms</span>
          </div>

          <div className="flex items-center gap-2">
            <MdBathtub className="text-2xl text-blue-600" />
            <span>{props.bathrooms} Bathrooms</span>
          </div>

          <div className="flex items-center gap-2">
            <MdPeople className="text-2xl text-blue-600" />
            <span>{props.guests} Guests</span>
          </div>
        </div>

        <p className="text-gray-500">{props.description}</p>
        <a href="#" className="bg-yellow-600 shadow-lg hover:bg-yellow-500 text-white text-center rounded-3xl w-fit px-4 py-2 transition">BOOK NOW</a>
      </div>

    </div>
  );
}
