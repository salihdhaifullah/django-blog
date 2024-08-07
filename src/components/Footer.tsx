import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaPinterestP } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import Logo from "../utils/Logo";


const Footer = () => {
  return (
    <footer className="flex flex-col w-full bg-[url('/footer.jpg')]  bg-no-repeat object-cover md:h-screen h-[1200px] bg-center items-start justify-end mt-10">
      <div className="md:pt-8 pt-4 pb-2 lg:px-10 md:px-8 sm:px-6 px-4 flex flex-col gap-8 bg-gray-50 w-full shadow-lg">

        <div className="flex justify-center items-center">
          <div className="flex md:!h-12 !h-8 w-fit fill-yellow-500 logo-container">
            <Logo />
          </div>
        </div>

        <div className="flex justify-center items-center">

          <div className="flex flex-row flex-wrap justify-center gap-12 text-gray-500 w-full">

            <div className="flex flex-col gap-4 items-center justify-start h-full text-center min-w-[200px]">
              <h4 className="md:text-2xl text-xl text-yellow-500">Address</h4>
              <p className="text-base">
                3 River Drive, Surfers Paradise,
                <br />
                Queensland 4217 Australia,
                <br />
                Waterfront Holiday Accommodation
                <br />
                in Surfers Paradise, Gold Coast.
              </p>
            </div>

            <div className="flex flex-col gap-4 items-center justify-start h-full text-center min-w-[200px]">
              <h4 className="md:text-2xl text-xl text-yellow-500">Social</h4>
              <div className="md:gap-4 gap-2 justify-center items-center flex flex-wrap w-60">
                <a className="p-2 text-2xl text-yellow-500 rounded-full bg-white shadow-xl" href="FACEBOOK_LINK">
                  <FaFacebookF />
                </a>

                <a className="p-2 text-2xl text-yellow-500 rounded-full bg-white shadow-xl" href="INSTAGRAM_LINK">
                  <FaInstagram />
                </a>

                <a className="p-2 text-2xl text-yellow-500 rounded-full bg-white shadow-xl" href="XTWITTER_LINK">
                  <FaXTwitter />
                </a>

                <a className="p-2 text-2xl text-yellow-500 rounded-full bg-white shadow-xl" href="PINTEREST_LINK">
                  <FaPinterestP />
                </a>

                <a className="p-2 text-2xl text-yellow-500 rounded-full bg-white shadow-xl" href="TIKTOK_LINK">
                  <FaTiktok />
                </a>

                <a className="p-2 text-2xl text-yellow-500 rounded-full bg-white shadow-xl" href="LINKEDININ_LINK">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4 items-center justify-start h-full text-center min-w-[200px]">
              <h4 className="md:text-2xl text-xl text-yellow-500">Contact info</h4>
              <p className="text-base">
                <a href="tel:+61755702400" className="hover:underline text-gray-500">+61 7 5570 2400</a>
                <br />
                <a href="mailto:info@spectrumholidayapartments.com" className="hover:underline text-gray-500">info@spectrumholidayapartments.com</a>
              </p>
            </div>

          </div>
        </div>



        <div className="flex gap-2 flex-col justify-center items-center text-gray-500">
          <hr className="h-[1px] w-full" />
          <h3 className="text-sm text-center">Copyright 2024 ©, Developed by <a href="https://github.com/salihdhaifullah" className="hover:underline">Salih Dhaifullah</a>, Powered by <a href="https://quicksite.guru/" className="hover:underline">quicksite.guru</a></h3>
        </div>

      </div>
    </footer>
  )
}


export default Footer
