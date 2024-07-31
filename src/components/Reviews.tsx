import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
    <div id="reviews" className="flex flex-col justify-center items-center relative h-screen lg:px-10 md:px-8 sm:px-6 px-4">
      <div className="flex flex-col z-10 gap-10">
        <div className="justify-center items-center flex text-gray-200 flex-col">
          <h1 className="md:text-6xl text-4xl">Reviews</h1>
        </div>

        <div className="flex flex-row justify-between gap-8 items-center">
          <IoIosArrowBack id="review-go-back" className="text-6xl text-gray-200 cursor-pointer sm:flex hidden" />

          <div id="scroll-container" className="2xl:!w-[calc((2*16px)+(3*350px))] lg:!w-[calc((16px)+(2*350px))] !w-[350px] overflow-x-auto hide-scroll-bar">
            <div id="total-container" className="flex flex-row !w-[calc((6*16px)+(8*350px))] gap-4 items-center">
              {data.map((review, index) => (
                <div key={index} id={`review-${index}`} className="flex flex-col text-gray-200 !w-[350px] h-80 bg-[rgba(0,0,0,0.9)] shadow-md px-12 justify-between items-center rounded-3xl py-8">
                  <h4 className="text-xl italic">- {review.name} -</h4>
                  <h6 className="text-lg text-center">"{review.quote}"</h6>
                </div>
              ))}
            </div>
          </div>

          <IoIosArrowForward id="review-go-forward" className="text-6xl text-gray-200 cursor-pointer sm:flex hidden" />
        </div>
      </div>
    </div>
  )
}

export default Reviews;