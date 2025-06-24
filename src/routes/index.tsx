import { createBrowserRouter, RouterProvider } from "react-router"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Menu from "../pages/Menu"
import Nutrition from "../pages/Nutrition"
import AuthLayout from "../layouts/AuthLayout"
import Login from "../pages/Login"
import Register from "../pages/Register"
import ForgotPass from "../pages/ForgotPass"
import AdminLayout from "../layouts/AdminLayout"
import Dashboard from "../pages/Dashboard"
import ProtectedRoute from "./ProtectedRoute"
import ContactForm from "../pages/Contactform"

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "menu",
                element: <Menu />
            },
            {
                path: "nutrition",
                element: <Nutrition />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "contact-form",
                element: <ContactForm />
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "forgot-password",
                element: <ForgotPass />
            }
        ]
    },
    {
        path: "/admin",
        element: (
            <ProtectedRoute redirectPath="/auth/login">
                <AdminLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "dashboard",
                element: <Dashboard />
            }
        ]
    }
])

export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}