import React, { useState } from 'react'

const Nutrition = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [bmi, setBmi] = useState({ weight: '', height: '', result: 0, status: '' })
  const [calories, setCalories] = useState({ age: '', gender: 'male', activity: 'moderate', result: 0 })

  const nutritionCategories = [
    { id: 'all', name: 'ทั้งหมด', color: 'bg-green-500' },
    { id: 'vitamins', name: 'วิตามิน', color: 'bg-orange-500' },
    { id: 'minerals', name: 'แร่ธาตุ', color: 'bg-blue-500' },
    { id: 'protein', name: 'โปรตีน', color: 'bg-red-500' },
    { id: 'carbs', name: 'คาร์โบไฮเดรต', color: 'bg-yellow-500' },
    { id: 'fats', name: 'ไขมัน', color: 'bg-purple-500' }
  ]

  const nutritionInfo = [
    {
      id: 1,
      category: 'vitamins',
      name: 'วิตามิน A',
      benefits: ['บำรุงสายตา', 'เสริมสร้างภูมิคุ้มกัน', 'บำรุงผิวพรรณ'],
      sources: ['แครอท', 'ผักใบเขียว', 'มะละกอ', 'ฟักทอง'],
      dailyNeed: '700-900 mcg',
      icon: '👁️'
    },
    {
      id: 2,
      category: 'vitamins',
      name: 'วิตามิน C',
      benefits: ['ต้านอนุมูลอิสระ', 'เสริมภูมิคุ้มกัน', 'ช่วยดูดซึมธาตุเหล็ก'],
      sources: ['ส้ม', 'มะนาว', 'กีวี', 'ผักกาดขาว'],
      dailyNeed: '75-90 mg',
      icon: '🍊'
    },
    {
      id: 3,
      category: 'minerals',
      name: 'แคลเซียม',
      benefits: ['แข็งแรงกระดูก', 'แข็งแรงฟัน', 'การทำงานของกล้ามเนื้อ'],
      sources: ['นม', 'เต้าหู้', 'ผักใบเขียว', 'ปลาเล็กปลาน้อย'],
      dailyNeed: '1000-1200 mg',
      icon: '🦴'
    },
    {
      id: 4,
      category: 'minerals',
      name: 'ธาตุเหล็ก',
      benefits: ['สร้างเม็ดเลือดแดง', 'ป้องกันโรคโลหิตจาง', 'เพิ่มพลังงาน'],
      sources: ['เนื้อแดง', 'ตับ', 'ผักใบเขียว', 'ถั่วแดง'],
      dailyNeed: '8-18 mg',
      icon: '🩸'
    },
    {
      id: 5,
      category: 'protein',
      name: 'โปรตีนสมบูรณ์',
      benefits: ['สร้างกล้ามเนื้อ', 'ซ่อมแซมเซลล์', 'สร้างฮอร์โมน'],
      sources: ['ไข่', 'ปลา', 'เนื้อไก่', 'ถั่วเหลือง'],
      dailyNeed: '0.8-1.2 g/kg',
      icon: '💪'
    },
    {
      id: 6,
      category: 'carbs',
      name: 'คาร์โบไฮเดรตเชิงซ้อน',
      benefits: ['ให้พลังงานยาวนาน', 'ควบคุมน้ำตาล', 'อิ่มท้องนาน'],
      sources: ['ข้าวกล้อง', 'ข้าวโอ๊ต', 'ขนมปังโฮลวีท', 'มันหวี'],
      dailyNeed: '45-65% ของแคลอรี่',
      icon: '🌾'
    }
  ]

  const healthTips = [
    {
      title: 'ดื่มน้ำให้เพียงพอ',
      description: 'ดื่มน้ำอย่างน้อย 8-10 แก้วต่อวัน เพื่อการเผาผลาญที่ดี',
      icon: '💧'
    },
    {
      title: 'กินผักผลไม้หลากสี',
      description: 'เลือกผักผลไม้หลากสีเพื่อได้สารอาหารครบถ้วน',
      icon: '🌈'
    },
    {
      title: 'หลีกเลี่ยงน้ำตาลเพิ่ม',
      description: 'ลดการบริโภคน้ำตาลเพิ่ม ดื่มน้ำเปล่าแทนน้ำหวาน',
      icon: '🚫'
    },
    {
      title: 'กินอาหารตรงเวลา',
      description: 'รับประทานอาหาร 3 มื้อหลัก 2 มื้อว่างในเวลาที่สม่ำเสมอ',
      icon: '⏰'
    }
  ]

  const calculateBMI = () => {
    if (bmi.weight && bmi.height) {
      const heightInM = parseFloat(bmi.height) / 100
      const result = parseFloat(bmi.weight) / (heightInM * heightInM)
      let status = ''
      
      if (result < 18.5) status = 'น้ำหนักน้อย'
      else if (result < 25) status = 'น้ำหนักปกติ'
      else if (result < 30) status = 'น้ำหนักเกิน'
      else status = 'อ้วน'
      
      setBmi(prev => ({ ...prev, result: Math.round(result * 10) / 10, status }))
    }
  }

  const calculateCalories = () => {
    if (calories.age) {
      let bmr = 0
      const age = parseInt(calories.age)
      
      // สูตร Harris-Benedict แบบง่าย
      if (calories.gender === 'male') {
        bmr = 1500 + (age * 5) // สูตรประมาณ
      } else {
        bmr = 1200 + (age * 4) // สูตรประมาณ
      }
      
      let multiplier = 1.2
      if (calories.activity === 'light') multiplier = 1.375
      else if (calories.activity === 'moderate') multiplier = 1.55
      else if (calories.activity === 'active') multiplier = 1.725
      
      setCalories(prev => ({ ...prev, result: Math.round(bmr * multiplier) }))
    }
  }

  const filteredNutrition = selectedCategory === 'all' 
    ? nutritionInfo 
    : nutritionInfo.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ข้อมูลโภชนาการ
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            เรียนรู้เกี่ยวกับโภชนาการเพื่อสุขภาพที่ดี และคำนวณความต้องการของร่างกายคุณ
          </p>
        </div>
      </section>

      {/* Calculators Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            เครื่องคำนวณสุขภาพ
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* BMI Calculator */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-800 flex items-center">
                <span className="mr-2">⚖️</span>
                คำนวณ BMI
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    น้ำหนัก (กก.)
                  </label>
                  <input
                    type="number"
                    value={bmi.weight}
                    onChange={(e) => setBmi(prev => ({ ...prev, weight: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                    placeholder="เช่น 65"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ส่วนสูง (ซม.)
                  </label>
                  <input
                    type="number"
                    value={bmi.height}
                    onChange={(e) => setBmi(prev => ({ ...prev, height: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 bg-white"
                    placeholder="เช่น 170"
                  />
                </div>
                <button
                  onClick={calculateBMI}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  คำนวณ BMI
                </button>
                {bmi.result > 0 && (
                  <div className="mt-4 p-4 bg-white rounded-lg">
                    <p className="text-lg font-bold text-gray-800">
                      BMI ของคุณ: {bmi.result}
                    </p>
                    <p className="text-blue-600 font-medium">{bmi.status}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Calories Calculator */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-orange-800 flex items-center">
                <span className="mr-2">🔥</span>
                คำนวณแคลอรี่
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    อายุ (ปี)
                  </label>
                  <input
                    type="number"
                    value={calories.age}
                    onChange={(e) => setCalories(prev => ({ ...prev, age: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 bg-white"
                    placeholder="เช่น 25"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    เพศ
                  </label>
                  <select
                    value={calories.gender}
                    onChange={(e) => setCalories(prev => ({ ...prev, gender: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 bg-white"
                  >
                    <option value="male">ชาย</option>
                    <option value="female">หญิง</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ระดับกิจกรรม
                  </label>
                  <select
                    value={calories.activity}
                    onChange={(e) => setCalories(prev => ({ ...prev, activity: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 bg-white"
                  >
                    <option value="sedentary">นั่งทำงาน</option>
                    <option value="light">ออกกำลังกายเบา</option>
                    <option value="moderate">ออกกำลังกายปานกลาง</option>
                    <option value="active">ออกกำลังกายหนัก</option>
                  </select>
                </div>
                <button
                  onClick={calculateCalories}
                  className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  คำนวณแคลอรี่
                </button>
                {calories.result > 0 && (
                  <div className="mt-4 p-4 bg-white rounded-lg">
                    <p className="text-lg font-bold text-gray-800">
                      แคลอรี่ต่อวัน: {calories.result} kcal
                    </p>
                    <p className="text-orange-600 text-sm">
                      สำหรับรักษาน้ำหนักปัจจุบัน
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            ข้อมูลสารอาหาร
          </h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 sticky top-20 bg-gray-50 py-4 z-10">
            {nutritionCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? `${category.color} text-white shadow-lg`
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Nutrition Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNutrition.map((nutrition) => (
              <div key={nutrition.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{nutrition.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800">{nutrition.name}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">ประโยชน์:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {nutrition.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">แหล่งอาหาร:</h4>
                    <div className="flex flex-wrap gap-1">
                      {nutrition.sources.map((source, index) => (
                        <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          {source}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">ความต้องการต่อวัน:</span> {nutrition.dailyNeed}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            เคล็ดลับสุขภาพ
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthTips.map((tip, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{tip.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ต้องการคำปรึกษาเรื่องโภชนาการ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            ปรึกษานักโภชนาการผู้เชี่ยวชาญของเราได้ฟรี
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              📞 ปรึกษาฟรี
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors">
              📱 ดาวน์โหลดแอป
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Nutrition