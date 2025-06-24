import axios from "axios"

// Base URL for the API
const API_BASE_URL = "https://geniusdevlab.com/laravelstoreapp/api"

// สร้าง Interface สำหรับข้อมูลการเข้าสู่ระบบ
interface LoginData {
    email: string
    password: string
}

// สร้าง Config ของ Axios
const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    timeout: 10000, // กำหนดเวลา timeout เป็น 10 วินาที
})

// สร้างฟังก์ชันสำหรับการเข้าสู่ระบบ
const authLogin = (data: LoginData) => {
    return api.post('/login', data)
}

export { authLogin }
export type { LoginData }