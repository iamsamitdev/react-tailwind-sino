import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      alert('ข้อความของคุณถูกส่งเรียบร้อยแล้ว! เราจะติดต่อกลับภายใน 24 ชั่วโมง')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      setIsSubmitting(false)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'ที่อยู่',
      details: ['123/45 ถนนสุขภาพดี', 'แขวงคลีน เขตฟิต', 'กรุงเทพฯ 10110'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '📞',
      title: 'โทรศัพท์',
      details: ['02-123-4567', '089-123-4567', 'สายด่วน 24 ชม.'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '📧',
      title: 'อีเมล',
      details: ['info@sinofood.com', 'support@sinofood.com', 'nutrition@sinofood.com'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '⏰',
      title: 'เวลาทำการ',
      details: ['จันทร์-ศุกร์: 8:00-20:00', 'เสาร์-อาทิตย์: 9:00-18:00', 'วันหยุดนักขัตฤกษ์: 10:00-16:00'],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const faqs = [
    {
      question: 'สามารถสั่งอาหารล่วงหน้าได้หรือไม่?',
      answer: 'ได้ครับ สามารถสั่งล่วงหน้าได้ถึง 7 วัน ผ่านแอปพลิเคชันหรือเว็บไซต์ของเรา'
    },
    {
      question: 'มีบริการจัดส่งถึงบ้านหรือไม่?',
      answer: 'มีครับ เราให้บริการจัดส่งฟรีในรัศมี 10 กม. และมีค่าจัดส่งพิเศษสำหรับพื้นที่ไกลกว่านั้น'
    },
    {
      question: 'สามารถปรับแต่งเมนูตามความต้องการได้หรือไม่?',
      answer: 'ได้เลยครับ เรามีนักโภชนาการคอยให้คำปรึกษาและปรับแต่งเมนูให้เหมาะกับความต้องการของแต่ละบุคคล'
    },
    {
      question: 'มีโปรโมชันหรือส่วนลดพิเศษหรือไม่?',
      answer: 'มีครับ เรามีโปรโมชันประจำสัปดาห์ และส่วนลดพิเศษสำหรับสมาชิก VIP ติดตามได้ทาง Social Media'
    }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: '📸', url: '#', color: 'hover:text-pink-600' },
    { name: 'Line', icon: '💬', url: '#', color: 'hover:text-green-600' },
    { name: 'TikTok', icon: '🎵', url: '#', color: 'hover:text-black' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ติดต่อเรา
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            พร้อมให้บริการและตอบทุกคำถามเกี่ยวกับอาหารสุขภาพ
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            ข้อมูลการติดต่อ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl text-white">{info.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">ส่งข้อความถึงเรา</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ชื่อ-นามสกุล *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 bg-white"
                      placeholder="กรอกชื่อ-นามสกุล"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      เบอร์โทรศัพท์
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 bg-white"
                      placeholder="089-123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    อีเมล *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 bg-white"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    หัวข้อ *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 bg-white"
                  >
                    <option value="">เลือกหัวข้อ</option>
                    <option value="order">สั่งอาหาร/จัดส่ง</option>
                    <option value="nutrition">ปรึกษาโภชนาการ</option>
                    <option value="complaint">ร้องเรียน/แนะนำ</option>
                    <option value="partnership">ความร่วมมือ</option>
                    <option value="other">อื่นๆ</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ข้อความ *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-900 bg-white resize-none"
                    placeholder="กรุณาระบุรายละเอียดที่ต้องการสอบถาม..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl'
                  } text-white`}
                >
                  {isSubmitting ? '🔄 กำลังส่ง...' : '📤 ส่งข้อความ'}
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">ที่ตั้ง</h3>
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📍</div>
                    <p className="text-gray-700 font-medium">แผนที่ SinoFood</p>
                    <p className="text-gray-600 text-sm">123/45 ถนนสุขภาพดี</p>
                    <p className="text-gray-600 text-sm">แขวงคลีน เขตฟิต กรุงเทพฯ</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">ติดตามเรา</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors ${social.color}`}
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">ติดต่อด่วน</h3>
                <div className="space-y-3">
                  <a href="tel:021234567" className="flex items-center space-x-3 hover:text-green-200 transition-colors">
                    <span className="text-xl">📞</span>
                    <span>02-123-4567</span>
                  </a>
                  <a href="https://line.me/ti/p/@sinofood" className="flex items-center space-x-3 hover:text-green-200 transition-colors">
                    <span className="text-xl">💬</span>
                    <span>Line: @sinofood</span>
                  </a>
                  <a href="mailto:info@sinofood.com" className="flex items-center space-x-3 hover:text-green-200 transition-colors">
                    <span className="text-xl">📧</span>
                    <span>info@sinofood.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            คำถามที่พบบ่อย
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-start">
                  <span className="text-green-600 mr-2">❓</span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            พร้อมเริ่มต้นชีวิตสุขภาพดีแล้วหรือยัง?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            สั่งอาหารสุขภาพจาก SinoFood วันนี้ รับส่วนลด 20% สำหรับลูกค้าใหม่
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              🛒 สั่งอาหารเลย
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

export default Contact