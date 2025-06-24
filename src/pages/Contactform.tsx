import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

type FormData = {
  name: string
  email: string
  message: string
}

const STORAGE_KEY = 'myFormData'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log('ส่งข้อมูล:', data)
    localStorage.removeItem(STORAGE_KEY) // ลบเมื่อส่งแล้ว
  }

  // โหลดค่าจาก localStorage เมื่อ component mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      Object.keys(parsed).forEach(key => {
        setValue(key as keyof FormData, parsed[key])
      })
    }
  }, [setValue])

  // เฝ้าดูการเปลี่ยนค่าทุกฟิลด์ แล้วบันทึก
  const watchedValues = watch()
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(watchedValues))
  }, [watchedValues])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 mt-20">
      <input
        type="text"
        {...register('name')}
        placeholder="ชื่อ"
        className="border p-2 w-full"
      />
      <input
        type="email"
        {...register('email')}
        placeholder="อีเมล"
        className="border p-2 w-full text-black"
      />
      <textarea
        {...register('message')}
        placeholder="ข้อความ"
        className="border p-2 w-full text-black"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        ส่งแบบฟอร์ม
      </button>
    </form>
  )
}
