import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdReviews } from "react-icons/md";

const data = [
  {
    quote: "Very nice clean and modern apartment, Beautiful views, very quiet at night. Close to everything, Bathroom very clean and modern. Kitchen equipped with everything you might need. Overall recommend staying there. Reception very friendly and helpful also. Never found the pool, but forgot to ask.",
    name: "Michelle T"
  },

  {
    quote: "A fabulous place to stay. Close to shops and beaches. Lovely to sit on the balconies and watch the boats on the canal. A great sized apartment with a useful kitchen and good sized bathrooms. The view from the main bedroom is amazing. We will definitely be back.",
    name: "Kirsty B"
  },

  {
    quote: "Had a two week stay in May whilst my house was being renovated. Fabulous spot, great views and nothing was too much trouble for the staff. Comfortable beds, peaceful views and very quiet surrounds. Just a short walk to Surfers Central. Recommend highly",
    name: "Mark L"
  },

  {
    quote: "Staff were very helpful as we were allowed an early check in. Very lovely, well maintained and clean. Quiet but still close to Surfers. Other guests at hotel were also very friendly. Our unit with views of Nerang River was very enjoyable and had everything we needed. Would definately return again.",
    name: "Thom S"
  },

  {
    quote: "apt 403 was absolutely beautiful , really nice decor and comfortable bed,nice building with great amenities,and stunning river and city views will return for sure. Thankyou for the room change it was much appreciated",
    name: "Ken L"
  },

  {
    quote: "Very nice clean and modern apartment, Beautiful views, very quiet at night. Close to everything, Bathroom very clean and modern. Kitchen equipped with everything you might need. Overall recommend staying there. Reception very friendly and helpful also. Never found the pool, but forgot to ask.",
    name: "Michelle T"
  },

  {
    quote: "A fabulous place to stay. Close to shops and beaches. Lovely to sit on the balconies and watch the boats on the canal. A great sized apartment with a useful kitchen and good sized bathrooms. The view from the main bedroom is amazing. We will definitely be back.",
    name: "Kirsty B"
  }
]

const Reviews = () => {
  return (
    <section id="reviews" className="flex flex-col justify-center items-center relative w-full">
      <div className="flex flex-col z-[5] xl:gap-8 gap-2">

        <div className="flex flex-row justify-center items-center w-full md:gap-2 gap-1 text-center text-yellow-500">
          <MdReviews className="md:text-4xl text-3xl" />
          <h2 className="md:text-3xl text-2xl">Reviews</h2>
        </div>

        <div className="flex flex-row justify-between gap-8 items-center">
          <div id="review-go-back" className="lg:text-4xl text-3xl lg:p-1 p-[3px] rounded-full text-center shadow-xl justify-center items-center text-blue-500 bg-yellow-50 cursor-pointer sm:flex hidden">
            <IoIosArrowBack />
          </div>

          <div id="scroll-container" className="py-10 2xl:w-[1284px] lg:w-[856px] sm:w-[428px] w-[298px] overflow-x-auto hide-scroll-bar">
            <div id="total-container" className="flex w-fit flex-row items-center">
              {data.map((review, index) => (
                <div key={index} id={`review-${index}`} className="flex !mx-6 flex-col sm:w-[380px] sm:h-[350px] w-[250px] h-[350px] bg-yellow-50 shadow-xl sm:px-6 sm:py-8 sm:gap-4 px-3 py-4 gap-2 justify-start items-center rounded-3xl">
                  <h4 className="sm:text-xl text-lg italic text-yellow-600 font-semibold">- {review.name} -</h4>
                  <h6 className="sm:text-lg text-base text-center italic text-gray-500 ">"{review.quote}"</h6>
                </div>
              ))}
            </div>
          </div>

          <div id="review-go-forward" className="lg:text-4xl text-3xl lg:p-1 p-[3px] rounded-full text-center shadow-xl justify-center items-center text-blue-500 bg-yellow-50 cursor-pointer sm:flex hidden">
            <IoIosArrowForward />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Reviews;