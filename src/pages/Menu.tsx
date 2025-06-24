import { useState } from 'react'

function Menu() {
  const [activeCategory, setActiveCategory] = useState('all')

  // Categories
  const categories = [
    { id: 'all', name: 'ทั้งหมด', icon: '🍽️' },
    { id: 'salad', name: 'สลัด', icon: '🥗' },
    { id: 'bowl', name: 'โบว์ล', icon: '🍲' },
    { id: 'smoothie', name: 'สมูทตี้', icon: '🥤' },
    { id: 'soup', name: 'ซุป', icon: '🍜' },
    { id: 'protein', name: 'โปรตีน', icon: '🥩' }
  ]

  // Menu items
  const menuItems = [
    {
      id: 1,
      name: 'สลัดผักโบว์ลคลีน',
      category: 'salad',
      price: 189,
      calories: 280,
      protein: '18g',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'ผักใบเขียวสดใส มิกซ์เบอร์รี่ อัลมอนด์ และน้ำสลัดโยเกิร์ต',
      tags: ['ไขมันต่ำ', 'ไฟเบอร์สูง', 'วีแกน']
    },
    {
      id: 2,
      name: 'ข้าวกล้องผัดกุ้งสะอาด',
      category: 'bowl',
      price: 229,
      calories: 420,
      protein: '25g',
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'ข้าวกล้องหอมหวาน กุ้งสดใหญ่ ผักรวมสีสัน ปรุงรสเบาๆ',
      tags: ['โปรตีนสูง', 'คาร์บดี', 'ไม่ใส่ผงชูรส']
    },
    {
      id: 3,
      name: 'สมูทตี้ผลไม้รวม',
      category: 'smoothie',
      price: 149,
      calories: 180,
      protein: '8g',
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'มะม่วง กล้วย สตรอเบอร์รี่ ผสมโยเกิร์ตกรีก ไม่ใส่น้ำตาล',
      tags: ['ไม่ใส่น้ำตาล', 'วิตามินสูง', 'เพิ่มพลังงาน']
    },
    {
      id: 4,
      name: 'ซุปผักโฮมเมด',
      category: 'soup',
      price: 169,
      calories: 120,
      protein: '6g',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'ซุปผักสดใส มะเขือเทศ แครอท เซเลอรี่ รสชาติกลมกล่อม',
      tags: ['แคลอรี่ต่ำ', 'ไฟเบอร์สูง', 'ดีท็อกซ์']
    },
    {
      id: 5,
      name: 'ไก่ย่างสมุนไพร',
      category: 'protein',
      price: 259,
      calories: 350,
      protein: '35g',
      image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'เนื้อไก่อกไร้หนัง หมักสมุนไพรไทย ย่างไฟอ่อน เสิร์ฟพร้อมผัก',
      tags: ['โปรตีนสูง', 'ไขมันต่ำ', 'ไม่มีคาร์บ']
    },
    {
      id: 6,
      name: 'โบว์ลควินัว',
      category: 'bowl',
      price: 199,
      calories: 320,
      protein: '15g',
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'ควินัวสีขาว อะโวคาโด ถั่วเขียว เมล็ดแมงลัก น้ำสลัดมะนาว',
      tags: ['ซุปเปอร์ฟู้ด', 'ไฟเบอร์สูง', 'กลูเตนฟรี']
    }
  ]

  // Filter menu items
  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            เมนูอาหารสุขภาพ
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            อาหารสุขภาพที่อร่อย มีประโยชน์ และคำนวณคุณค่าทางโภชนาการแล้ว
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-16 z-40 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-600'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-semibold text-green-600">
                      {item.calories} แคล
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Nutrition Info */}
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span>🔥 {item.calories} แคล</span>
                      <span>💪 {item.protein} โปรตีน</span>
                    </div>
                  </div>

                  {/* Price and Add Button */}
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-green-600">
                      ฿{item.price}
                    </div>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg">
                      เพิ่มลงตะกร้า
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nutrition Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              ข้อมูลโภชนาการ
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              เราคำนวณคุณค่าทางโภชนาการในทุกเมนูอย่างละเอียด เพื่อให้คุณเลือกอาหารที่เหมาะสมกับความต้องการ
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🔥</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">แคลอรี่</h3>
              <p className="text-gray-600 text-sm">คำนวณแคลอรี่ที่เหมาะสมกับการควบคุมน้ำหนัก</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💪</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">โปรตีน</h3>
              <p className="text-gray-600 text-sm">โปรตีนคุณภาพสูงสำหรับการสร้างกล้ามเนื้อ</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-2xl">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌾</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">ไฟเบอร์</h3>
              <p className="text-gray-600 text-sm">ไฟเบอร์จากผักและผลไม้เพื่อระบบย่อยอาหาร</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💎</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">วิตามิน</h3>
              <p className="text-gray-600 text-sm">วิตามินและแร่ธาตุครบถ้วนจากธรรมชาติ</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ไม่แน่ใจจะเลือกเมนูไหน?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            ปรึกษานักโภชนาการของเราฟรี เพื่อแผนอาหารที่เหมาะกับคุณ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              ปรึกษานักโภชนาการ
            </button>
            <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-300">
              ดูแพ็คเกจสุขภาพ
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Menu