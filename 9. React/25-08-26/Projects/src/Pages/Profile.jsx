import React from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from '../Hooks/Costumhook'

const Profile = () => {

  const navigate = useNavigate()

  const {user , logout} = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  // if(!user) return null;

  return (
    <div>
      <div className='flex h-screen items-center justify-center'>
        <div className='w-full max-w-sm bg-gray-100 p-8 rounded-3xl'>
          <h1 className='text-2xl font-semibold mb-6 text-center'>My Profile</h1>

          <div>
            <p className='font-medium'>
              {/* Name : <span>{user.name}</span> */}
            </p>
            <p className='font-medium'>
              {/* Email : <span>{user.email}</span> */}
            </p>
             <p className='font-medium'>
              {/* Role : <span>{user.role}</span> */}
            </p>
          </div>
          <button onClick={handleLogout} className='w-full bg-red-600 text-white py-4 rounded-lg font-medium hover:bg-red-700'>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Profile