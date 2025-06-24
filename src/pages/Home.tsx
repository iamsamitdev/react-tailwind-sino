import  { useEffect, useState } from 'react'

function Home() {

  // สร้างตัวแปรเก็บภาพสไลด์
  const slides = [
    "./images/slides/slides1.webp",
    "./images/slides/slides2.webp",
    "./images/slides/slides3.jpg"
  ]

  // ตัวแปรสำหรับการตั้งค่า Auto Play
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto Play Carousel
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
      console.log(`Current Slide: ${currentSlide + 1}`)
    }, 3000); // เปลี่ยนทุก 3 วินาที

    return () => clearInterval(interval)
  }, [isPlaying, slides.length]);


  // ฟังก์ชันสำหรับเปลี่ยนสไลด์เมื่อคลิกปุ่มถัดไป
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length)
    setIsPlaying(false); // หยุด Auto Play เมื่อมีการคลิก
  }

  // ฟังก์ชันสำหรับเปลี่ยนสไลด์เมื่อคลิกปุ่มก่อนหน้า
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    setIsPlaying(false); // หยุด Auto Play เมื่อมีการคลิก
  }


  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full h-full mb-10 md:h-96"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative h-96 md:h-96 rounded-lg shadow-lg">
          
          {/* Item 1 */}
          { slides.map((slide, index) => (
            <div key={index} className={
              `absolute inset-0 transition-opacity duration-700 ease-in-out 
              ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`
              }>
              <img
                src={slide}
                className="w-full min-h-full object-cover"
                alt="..."
              />
            </div>
          ))}
          
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to={0}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to={1}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to={2}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to={3}
          />
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to={4}
          />
        </div>

        {/* Slider controls */}
        <button
          onClick={prevSlide}
          type="button"
          className="absolute top-1/2 -translate-y-1/3 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          onClick={nextSlide}
          type="button"
          className="absolute top-1/2 -translate-y-1/3 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  )
}

export default Home
