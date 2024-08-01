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
    <div id="reviews" className="flex flex-col justify-center items-center relative p-12 w-full pt-24">
      <div className="flex flex-col z-[5] gap-8">

      <div className="flex flex-row text-3xl justify-center items-center w-full gap-2 text-center text-yellow-500">
        <MdReviews className="text-5xl" />
        <h2>Reviews</h2>
      </div>

        <div className="flex flex-row justify-between gap-8 items-center">
          <IoIosArrowBack id="review-go-back" className="text-5xl p-1 rounded-full text-center shadow-xl justify-center items-center text-blue-500 bg-yellow-50 cursor-pointer sm:flex hidden" />

          <div id="scroll-container" className="2xl:!w-[calc((2*16px)+(3*350px))] lg:!w-[calc((16px)+(2*350px))] !w-[350px] py-10 overflow-x-auto hide-scroll-bar">
            <div id="total-container" className="flex flex-row !w-[calc((6*16px)+(8*350px))] gap-12 items-center">
              {data.map((review, index) => (
                <div key={index} id={`review-${index}`} className="flex flex-col !w-[400px] h-[350px] bg-yellow-50 shadow-xl px-6 justify-start gap-4 items-center rounded-3xl py-8">
                  <h4 className="text-xl italic text-yellow-600 font-semibold">- {review.name} -</h4>
                  <h6 className="text-lg text-center italic text-gray-500 ">"{review.quote}"</h6>
                </div>
              ))}
            </div>
          </div>

          <IoIosArrowForward id="review-go-forward" className="text-5xl p-1 rounded-full text-center shadow-xl justify-center items-center text-blue-500 bg-yellow-50 cursor-pointer sm:flex hidden" />
        </div>
      </div>
    </div>
  )
}

export default Reviews;