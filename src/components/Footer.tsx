import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaPinterestP } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import Logo from "../utils/Logo";


const Footer = () => {
  return (
    <footer className="flex flex-col w-full bg-[url('/footer.jpg')]  bg-no-repeat object-cover h-screen bg-center items-start justify-end mt-10">
      <div className="md:py-8 py-4 lg:px-10 md:px-8 sm:px-6 px-4 flex flex-col gap-8 bg-yellow-100 p-4 w-full">

        <div className="flex justify-center items-center">
          <Logo className="!h-12 w-fit flex fill-yellow-500" />
        </div>

        <div className="flex justify-center items-center">

          <div className="flex flex-row justify-between items-start md:gap-12 gap-6 text-gray-500 w-full">

            <div className="flex flex-col gap-4 items-center h-full text-center">
              <h4 className="md:text-2xl text-xl text-yellow-500">Address</h4>
              <p className="md:text-lg text-base">
                3 River Drive, Surfers Paradise,
                <br />
                Queensland 4217 Australia,
                <br />
                Waterfront Holiday Accommodation
                <br />
                in Surfers Paradise, Gold Coast.
              </p>
            </div>

            <div className="flex flex-col gap-4 items-center h-full text-center">
              <h4 className="md:text-2xl text-xl text-yellow-500">Social</h4>
              <div className="md:gap-4 gap-2 justify-center items-center flex flex-wrap w-60">
                <a className="md:p-3 md:text-3xl text-2xl p-2 text-blue-500 rounded-full bg-yellow-50 shadow-xl" href="FACEBOOK_LINK">
                  <FaFacebookF />
                </a>

                <a className="md:p-3 md:text-3xl text-2xl p-2 text-blue-500 rounded-full bg-yellow-50 shadow-xl" href="INSTAGRAM_LINK">
                  <FaInstagram />
                </a>

                <a className="md:p-3 md:text-3xl text-2xl p-2 text-blue-500 rounded-full bg-yellow-50 shadow-xl" href="XTWITTER_LINK">
                  <FaXTwitter />
                </a>

                <a className="md:p-3 md:text-3xl text-2xl p-2 text-blue-500 rounded-full bg-yellow-50 shadow-xl" href="PINTEREST_LINK">
                  <FaPinterestP />
                </a>

                <a className="md:p-3 md:text-3xl text-2xl p-2 text-blue-500 rounded-full bg-yellow-50 shadow-xl" href="TIKTOK_LINK">
                  <FaTiktok />
                </a>

                <a className="md:p-3 md:text-3xl text-2xl p-2 text-blue-500 rounded-full bg-yellow-50 shadow-xl" href="LINKEDININ_LINK">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4 items-center h-full text-center">
              <h4 className="md:text-2xl text-xl text-yellow-500">Contact info</h4>
              <p className="md:text-lg text-base">
                <a href="tel:+61755702400" className="hover:underline text-blue-500">+61 7 5570 2400</a>
                <br />
                <a href="mailto:info@spectrumholidayapartments.com" className="hover:underline text-blue-500">info@spectrumholidayapartments.com</a>
              </p>
            </div>

          </div>
        </div>



        <div className="flex gap-2 flex-col text-gray-500">
          <hr className="h-[2px] w-full bg-gray-500" />
          <h3 className="md:text-xl text-lg text-center">Copyright 2024 ©, Developed by <a href="https://github.com/salihdhaifullah" className="hover:underline text-blue-500">Salih Dhaifullah</a>, Powered by <a href="https://quicksite.guru/" className="hover:underline text-blue-500">quicksite.guru</a></h3>
        </div>

      </div>
    </footer>
  )
}


export default Footer
