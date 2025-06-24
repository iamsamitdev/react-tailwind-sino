import  { useEffect, useState } from 'react'

function Home() {

  // สร้างตัวแปรเก็บภาพสไลด์และข้อความ CTA
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "อาหารสุขภาพ เพื่อชีวิตที่ดีกว่า",
      subtitle: "ค้นพบความอร่อยและคุณค่าทางโภชนาการในทุกคำ",
      cta: "สั่งอาหารเลย"
    },
    {
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80",
      title: "สลัดสดใหม่ ทุกวัน",
      subtitle: "ผักใบเขียวสดใส พร้อมโปรตีนคุณภาพสูง",
      cta: "ดูเมนูสลัด"
    },
    {
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
      title: "จัดส่งถึงบ้าน",
      subtitle: "อาหารสุขภาพส่งตรงถึงมือคุณ ภายใน 30 นาที",
      cta: "สั่งเดลิเวอรี่"
    }
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
        className="relative w-full h-full md:h-[90vh]"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative h-[90vh] md:h-[90vh] rounded-lg shadow-lg overflow-hidden">
          
          {/* Slides */}
          { slides.map((slide, index) => (
            <div key={index} className={
              `absolute inset-0 transition-opacity duration-700 ease-in-out 
              ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`
              }>
              <img
                src={slide.image}
                className="w-full h-full object-cover"
                alt={slide.title}
              />
              {/* CTA Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl relative z-10">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-2xl mb-8 drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl cursor-pointer">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
          
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide 
                  ? 'bg-white' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-current={index === currentSlide}
              aria-label={`Slide ${index + 1}`}
              onClick={() => {
                setCurrentSlide(index)
                setIsPlaying(false)
              }}
            />
          ))}
        </div>

        {/* Slider controls */}
        <button
          onClick={prevSlide}
          type="button"
          className="absolute top-1/2 -translate-y-1/2 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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
          className="absolute top-1/2 -translate-y-1/2 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            อาหารสุขภาพ เพื่อชีวิตที่ดีกว่า
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            ค้นพบความอร่อยและความสุขภาพในทุกคำ ด้วยเมนูอาหารที่คัดสรรมาเป็นพิเศษ 
            เพื่อให้คุณได้รับสารอาหารครบถ้วนและรสชาติที่ไม่ลืม
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🥗</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">สดใหม่ทุกวัน</h3>
              <p className="text-gray-600">วัตถุดิบคุณภาพสูง คัดสรรมาใหม่ทุกวัน เพื่อความสดใหม่และรสชาติที่ดีที่สุด</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">เพื่อสุขภาพ</h3>
              <p className="text-gray-600">เมนูที่ออกแบบโดยนักโภชนาการ เพื่อให้ได้รับสารอาหารครบถ้วนและสมดุล</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">พลังงานเต็ม</h3>
              <p className="text-gray-600">อาหารที่ให้พลังงานยาวนาน ช่วยให้คุณมีแรงใจในการทำงานและใช้ชีวิต</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Menu Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              เมนูยอดนิยม
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              เมนูอาหารสุขภาพที่ลูกค้าชื่นชอบและสั่งมากที่สุด
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "สลัดผักโบว์ล", price: "฿189", image: "🥙", desc: "ผักสดหลากสี พร้อมโปรตีนคุณภาพ" },
              { name: "ข้าวกล้องผัดกุ้ง", price: "฿229", image: "🍤", desc: "ข้าวกล้องหอมหวาน กุ้งสดใหญ่" },
              { name: "สมูทตี้ผลไม้", price: "฿149", image: "🥤", desc: "ผลไม้ตามฤดูกาล ไม่ใส่น้ำตาล" },
              { name: "ซุปผักโฮมเมด", price: "฿169", image: "🍲", desc: "ซุปผักสดใส รสชาติกลมกล่อม" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300 cursor-pointer">
                <div className="text-center">
                  <div className="text-4xl mb-3">{item.image}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{item.desc}</p>
                  <div className="text-xl font-bold text-green-600">{item.price}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
              ดูเมนูทั้งหมด
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                ทำไมต้องเลือก SinoFood?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">คำนวณแคลอรี่ให้</h3>
                    <p className="text-gray-600">ทุกเมนูมีการคำนวณแคลอรี่และสารอาหารอย่างชัดเจน</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">จัดส่งรวดเร็ว</h3>
                    <p className="text-gray-600">จัดส่งภายใน 30 นาที รับประกันความสดใหม่</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">ปรับเมนูได้</h3>
                    <p className="text-gray-600">สามารถปรับระดับความเผ็ด หวาน เค็ม ตามต้องการ</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">ราคาเป็นมิตร</h3>
                    <p className="text-gray-600">อาหารสุขภาพคุณภาพสูง ในราคาที่ทุกคนเข้าถึงได้</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:text-center">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-6xl mb-4">🌱</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">เริ่มต้นชีวิตใหม่</h3>
                <p className="text-gray-600 mb-6">
                  เปลี่ยนนิสัยการกิน เปลี่ยนชีวิตให้ดีขึ้น ด้วยอาหารสุขภาพที่อร่อยและมีประโยชน์
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">500+</div>
                    <div className="text-sm text-gray-600">เมนูให้เลือก</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">10k+</div>
                    <div className="text-sm text-gray-600">ลูกค้าพึงพอใจ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            พร้อมเริ่มต้นแล้วหรือยัง?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            สั่งอาหารสุขภาพจาก SinoFood วันนี้ และสัมผัสความแตกต่าง
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              สั่งอาหารเลย
            </button>
            <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-300">
              ดูเมนูทั้งหมด
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home