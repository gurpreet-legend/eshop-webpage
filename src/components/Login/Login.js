import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <div className="flex flex-col justify-center items-center" style={{height: "100vh"}}>
      <div style={{minWidth:"25vw"}}>
        <div className="px-16 py-16 neo">
          <h2 className="text-center mb-4 text-3xl font-bold">Log In</h2>
          {error && <div className="bg-red-300 text-white p-3 rounded-lg mb-6 text-lg">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div id="email" className="flex flex-col">
              <label htmlFor="email" className="text-2xl pb-4">Email</label>
              <input type="email" name="email" ref={emailRef} required className="p-5 rounded-full outline-0 border-2 border-gray-300"/>
            </div>
            <div id="password" className="flex flex-col">
              <label htmlFor="password" className="text-2xl pb-4">Password</label>
              <input type="password" name="password" ref={passwordRef} required className="p-5 rounded-full outline-0 border-2 border-gray-300"/>
            </div>
            <button disabled={loading} className="w-full text-black text-xl border-2 border-gray-300 rounded-full p-3 px-6 hover:bg-teal-300" type="submit">
              Log In
            </button>
          </form>
          {/* <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div> */}
        </div>
      </div>
      <div className="w-100 text-center mt-2 text-lg hover:text-blue-700 hover:underline hover:cursor-pointer">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  )
}