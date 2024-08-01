import { MdSend } from "react-icons/md"

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col gap-8 justify-between items-center lg:px-10 md:px-8 sm:px-6 w-full px-12 py-24">

      <div className="flex flex-row text-3xl justify-center items-center w-full gap-2 text-center text-yellow-500">
        <MdSend className="text-5xl" />
        <h2>Contact Us</h2>
      </div>


      <div className="flex xl:flex-row xl:w-fit w-full flex-col-reverse gap-5 md:p-10 sm:p-8 p-6 bg-yellow-50 shadow-xl rounded-3xl">
        <form id="contact-form" className="xl:w-[500px] w-full h-[375px] flex flex-col justify-between items-center">
          <input required type="text" id="name" className="w-full p-2 bg-yellow-100 rounded-md focus:outline-blue-200 outline-none placeholder-gray-500" placeholder="Name" />
          <input required type="email" id="email" className="w-full p-2 bg-yellow-100 rounded-md focus:outline-blue-200 outline-none placeholder-gray-500" placeholder="Email" />
          <textarea required id="message" className="resize-none h-40 w-full p-2 bg-yellow-100 rounded-md focus:outline-blue-200 outline-none placeholder-gray-500" placeholder="Message" />

          <button type="submit" id="submit-contact-form" className="bg-yellow-600 hover:bg-yellow-500 rounded-3xl text-lg shadow-lg px-4 py-2 w-fit hover:outline-2 outline-0 outline transition-all text-white flex">
            SUBMIT
          </button>
        </form>

        <iframe className="xl:w-[500px] w-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d17381.091470848412!2d153.4211271625722!3d-27.99618627840191!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91056e6a3b925f%3A0xba1de51ea849ed09!2sSpectrum%20Holiday%20Apartments!5e0!3m2!1sen!2sus!4v1722442328900!5m2!1sen!2sus"  width="500" height="375" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </div>  
    )
}

export default Contact