import { useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";


const Slider = ({slides}) => {

    const [current, setCurrent] = useState(0);

    const previousSlide = () => {
        if(current === 0) setCurrent(slides.length - 1)
        else setCurrent(current - 1);
    }

    const nextSlide = () => {
        if(current === slides.length - 1) setCurrent(0)
        else setCurrent(current + 1);
    }

  return (
    <div className='overflow-hidden relative'>
        <div 
            className='flex transition ease-out duration-40'
            style={{
                transform: `translateX(-${current * 100}%)`,
            }}
        >
            {
                slides.map((slide) => {
                    return <img src={slide.url} key={slide.name} alt={slide.name} className='w-screen' />
                })
            }
        </div>
        <div className='absolute top-0 h-full w-full flex justify-between items-center text-white px-10 text-2xl'>
            <button onClick={previousSlide}>
                <FaArrowCircleLeft />
            </button>
            <button onClick={nextSlide}>
                <FaArrowCircleRight />
            </button>
        </div>
    </div>
  )

}

export default Slider