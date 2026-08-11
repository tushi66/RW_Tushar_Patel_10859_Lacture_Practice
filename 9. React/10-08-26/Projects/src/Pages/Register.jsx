import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../Hooks/Costumhook'
import { getAuthErrorMessage } from '../Helper/Reusable'

const Register = () => {

    const { register } = useAuth()

    const navigate = useNavigate()

    const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'user' })
    const [error, setError] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }


    const handleSubmit = async (e) => {
        e.preventDeafult()

        setError('')
        isSubmitting(true)

        try {
            await register(formData)
            navigate('/login')
        } catch (err) {
            setError(getAuthErrorMessage(err))
        } finally {
            setIsSubmitting(false)
        }
    }


    return (
    <div className='h-screen flex items-center bg-blue-300'>
            <form className="min-w-lg mx-auto" onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-5 group ">
                    <input
                        type="name  "
                        name="name"
                        id="name"
                        className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-bottom-1 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                        placeholder=" "
                        required=""
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor="floating_email"
                        className="absolute text-sm text-body p-1 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                        Name
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-bottom-1 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                        placeholder=" "
                        required
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <label
                        htmlFor="floating_repeat_password"
                        className="absolute text-sm text-body p-1 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                        Email ID
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-bottom-1 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
                        placeholder=" "
                        required
                        value={formData.password}
                        onChange={handleChange}

                    />
                    <label
                        htmlFor="password"
                        className="absolute text-sm text-body p-1 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                    >
                        Password
                    </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <label
                        role=""
                        className="form-label"
                    >
                        Register AS A
                    </label>
                    <select name="role" id="role" className='p-1 ms-2 border-1' value={formData.role} onChange={handleChange}>
                        <option value="user">User</option>
                        <option value="adimn">Admin</option>
                    </select>
                </div>

                <button type='submit' disabled={isSubmitting} className='bg-blue-600 p-2 text-white'>
                    {
                        isSubmitting ? "Creating Account........" : "Register"
                    }
                </button>
                <p className='mt-3'>
                    Already have an account?
                    <Link to="/login">Login</Link>
                </p>
            </form>


        </div>
    )
}

export default Register