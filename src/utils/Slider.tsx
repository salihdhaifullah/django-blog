import { ReactElement } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { IoClose } from "react-icons/io5"

const Slider = () => {
  return (
    <div id="bg-modal" className="fixed hidden top-0 left-0 w-full h-full justify-center items-center bg-black bg-opacity-85 z-[100] none-selectable">
      <div className="relative overflow-hidden w-full h-full flex flex-col justify-center items-center">

        <div className="flex z-50 absolute lg:right-4 md:right-3 sm:right-2 right-1  top-4">
          <IconContainer id="gallery-close">
            <IoClose />
          </IconContainer>
        </div>

        <div className="flex z-50 absolute lg:left-4 md:left-3 sm:left-2 left-1 top-[50%] translate-y-[50%]">
          <IconContainer id="gallery-prev">
            <IoIosArrowBack />
          </IconContainer>
        </div>

        <div className="flex z-50 absolute lg:right-4 md:right-3 sm:right-2 right-1 top-[50%] translate-y-[50%]">
          <IconContainer id="gallery-next">
            <IoIosArrowForward />
          </IconContainer>
        </div>

        <div className="w-full h-full relative">
          <div className="w-[300%] h-full flex flex-row absolute" id="carousel">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;



const IconContainer = ({ children, id }: { children: ReactElement, id: string }) => {
  return (
    <div id={id} className="lg:text-4xl md:text-3xl text-2xl lg:p-1 md:p-[3px] p-[2px] text-yellow-600 cursor-pointer w-fit flex bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full text-center shadow-lg">
      {children}
    </div>
  )
}