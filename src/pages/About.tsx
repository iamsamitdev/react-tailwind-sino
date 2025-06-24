function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            เกี่ยวกับ SinoFood
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            เราเชื่อว่าอาหารที่ดีคือรากฐานของชีวิตที่มีคุณภาพ
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                เรื่องราวของเรา
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  SinoFood เกิดขึ้นจากความต้องการที่จะมอบอาหารสุขภาพคุณภาพสูงให้กับทุกคน 
                  ในยุคที่ผู้คนมีชีวิตที่เร่งรีบและมักละเลยการดูแลสุขภาพ
                </p>
                <p>
                  ด้วยประสบการณ์กว่า 10 ปีในอุตสาหกรรมอาหาร เราได้รวบรวมทีมงานผู้เชี่ยวชาญ
                  ทั้งเชฟมืออาชีพและนักโภชนาการ เพื่อสร้างสรรค์เมนูอาหารที่อร่อยและมีประโยชน์
                </p>
                <p>
                  เราใช้วัตถุดิบคุณภาพสูง จากเกษตรกรท้องถิ่น และปรุงด้วยวิธีการที่รักษา
                  คุณค่าทางโภชนาการไว้ได้มากที่สุด
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="ทีมงาน SinoFood"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl">🌱</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              พันธกิจและวิสัยทัศน์
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">พันธกิจ</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                มอบอาหารสุขภาพคุณภาพสูงที่เข้าถึงได้ง่าย เพื่อส่งเสริมให้ทุกคนมีสุขภาพที่ดี
                และมีคุณภาพชีวิตที่ดีขึ้น ผ่านการบริการที่เป็นมิตรกับสิ่งแวดล้อม
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🔮</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">วิสัยทัศน์</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                เป็นแบรนด์อาหารสุขภาพอันดับ 1 ในประเทศไทย ที่ทุกคนเลือกใช้เพื่อสุขภาพที่ดี
                และเป็นส่วนหนึ่งในการสร้างสังคมที่มีสุขภาพดี
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ค่านิยมของเรา
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ค่านิยมที่เราถือมั่นและนำมาปฏิบัติในทุกขั้นตอนของการทำงาน
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200">
                <span className="text-4xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">ธรรมชาติ</h3>
              <p className="text-gray-600">ใช้วัตถุดิบธรรมชาติ ปลอดสารเคมี เพื่อสุขภาพที่ดี</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200">
                <span className="text-4xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">คุณภาพ</h3>
              <p className="text-gray-600">มุ่งมั่นในการมอบคุณภาพสูงสุดในทุกผลิตภัณฑ์</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">ใส่ใจ</h3>
              <p className="text-gray-600">ใส่ใจในทุกรายละเอียด เพื่อประสบการณ์ที่ดีที่สุด</p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200">
                <span className="text-4xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">ยั่งยืน</h3>
              <p className="text-gray-600">รักษาสิ่งแวดล้อม เพื่ออนาคตที่ยั่งยืน</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ทีมงานของเรา
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              ทีมผู้เชี่ยวชาญที่มีประสบการณ์และใส่ใจในการมอบอาหารสุขภาพที่ดีที่สุด
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">เชฟกรพล</h3>
              <p className="text-green-600 font-medium mb-3">หัวหน้าเชฟ</p>
              <p className="text-gray-600 text-sm">
                ประสบการณ์ 15 ปี ในการสร้างสรรค์เมนูอาหารสุขภาพที่อร่อยและมีประโยชน์
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">👩‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">ดร.สุนิสา</h3>
              <p className="text-green-600 font-medium mb-3">นักโภชนาการ</p>
              <p className="text-gray-600 text-sm">
                ผู้เชี่ยวชาญด้านโภชนาการ ดูแลให้เมนูทุกอย่างมีคุณค่าทางโภชนาการที่สมบูรณ์
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">คุณมานี</h3>
              <p className="text-green-600 font-medium mb-3">ผู้จัดหาวัตถุดิบ</p>
              <p className="text-gray-600 text-sm">
                คัดสรรวัตถุดิบคุณภาพสูงจากเกษตรกรท้องถิ่น เพื่อความสดใหม่และปลอดภัย
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ความสำเร็จของเรา
            </h2>
            <p className="text-xl text-green-100">
              ตัวเลขที่สะท้อนถึงความไว้วางใจจากลูกค้า
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10k+</div>
              <div className="text-green-100">ลูกค้าพึงพอใจ</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-green-100">เมนูให้เลือก</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-green-100">พื้นที่จัดส่ง</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">99%</div>
              <div className="text-green-100">ความพึงพอใจ</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            พร้อมเริ่มต้นชีวิตสุขภาพดีกับเราแล้วหรือยัง?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            เข้าร่วมกับเราและสัมผัสประสบการณ์อาหารสุขภาพที่แตกต่าง
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
              สั่งอาหารเลย
            </button>
            <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
              ดูเมนูทั้งหมด
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default About