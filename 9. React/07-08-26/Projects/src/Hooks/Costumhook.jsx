import React from "react";
import {createContext, useState , useEffect, useContext} from "react"
import axios from "axios"

const AUTH_STORAGE_KEY = "authUser"
const API_URL = "http://localhost:3000"

const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        const stored =  localStorage.getItem(AUTH_STORAGE_KEY)

        if(stored){
            try{
                setUser(JSON.parse(stored))

            }catch(err){
                localStorage.removeItem(AUTH_STORAGE_KEY)
            }
        }

        setLoading(false)

    },[])

    const existUser = (useData) => {
        setUser(UserData)
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(userData))


    }

     const login = async(email , password) => {
        const res = await axios.get(`${API_URL}/users` , {
            params:{email , password}
        })

        const matchUser = res.data[0]

        if(!matchUser){
            throw new Error("Invalid email or password")
        }

        // safe password around the users

    }

     const register = async({name , email , password , role}) => {

        const extisting = await axios.get(`${API_URL}/users` , {
            params:{email}
        })

        if(extisting.data.length > 0){
            throw new Error("email already exists.")
        }

        const res = await axios.post(`${API_URL}/users` , {
            name,
            email,
            password,
            role: role === 'admin' ? 'admin' : 'user'
        })

        // safe password around the users

    }

    
    const logout = () => {
        setUser(null)
        localStorage.removeItem(AUTH_STORAGE_KEY)
    }

    const value = {
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated:!!user,
        isAdmin:user?.role === 'admin'
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const rba = useContext(AuthContext)
    if(!rba){
        throw new Error ('useAuth must be used within an AuthProvider')
    }
    return rba;
    

}