import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../Hooks/Costumhook'
import { getAuthErrorMessage } from '../Helper/Reusable'


const Login = () => {

  const { login } = useAuth()

  const navigate = useNavigate()

  const [formData, setFormData] = useState({ email: '', password: '' })
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
      await login(formData.email, formData.password)
      navigate('/product')
    } catch (err) {
      setError(getAuthErrorMessage(err))
    } finally {
      setIsSubmitting(false)
    }
  }


  return (
    <div className='h-screen flex items-center bg-blue-300'>
      <form className="min-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            name='email'
            onChange={handleChange}
            className="bg-neutral-secondary-medium border-1 text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="name@flowbite.com"
            required=""
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name='password'
            onChange={handleChange}
            className="bg-neutral-secondary-medium border-1 text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="••••••••"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="text-white bg-blue-600 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        >
          {
            isSubmitting ? "Logging in...." : "Login"
          }
        </button>
        <p className='mt-4'>
          Don't Have an Account?
          <Link className='text-blue-800 ms-2' to="/register">Register</Link>
        </p>
      </form>

    </div>
  )
}

export default Login