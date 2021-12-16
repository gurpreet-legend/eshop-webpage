import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"


const ShippingForm = () => {
    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()
    const navigate = useNavigate()

    async function handleLogout () {
        setError('')

        try{
            await logout()
            navigate('/')
        } catch {
            setError("Failed to logout")
        }
    }

    return (
        <div>
            <div className="auth space-x-2">
                {currentUser ? 
                (
                    <>
                        <h1 className="text-lg mb-4">Email: <span className="font-bold text-gray-500">{currentUser.email}</span></h1>
                        <button onClick={handleLogout} className="rounded-full border-2 px-9 py-3 text-sm bg-red-300 text-white">LOG OUT</button>
                       
                    </>
                ) : (
                <>
                    <Link to="/login">
                        <button className="rounded-full border-2 px-9 py-3 text-sm bg-teal-300 text-white">LOG IN</button>
                    </Link>
                    <Link to="/signup">
                        <button className="rounded-full border-2 px-9 py-3 text-sm border-gray-300 hover:bg-teal-300 hover:text-white hover:border-teal-300"> SIGN UP</button>
                    </Link>
                </>
                )}
            </div>
            <h1 className="text-lg my-6">Shipping Information</h1>
            <form className="grid grid-cols-2 grid-rows-4 gap-4 gap-x-6">
                <input type="email" placeholder="E-mail" className="rounded-full border-2 border-gray-300 p-3 px-8 outline-0"/>
                <input type="text" placeholder="First name" className="rounded-full border-2 border-gray-300 p-3 px-8 outline-0"/>
                <input type="text" placeholder="Last Name" className="rounded-full border-2 border-gray-300 p-3 px-8 outline-0"/>
                <input type="text" placeholder="Phone Number" className="rounded-full border-2 border-gray-300 p-3 px-8 outline-0"/>
                <input type="text" placeholder="Address" className="rounded-full border-2 border-gray-300 p-3 px-8 outline-0"/>
                <input type="text" placeholder="City" className="rounded-full border-2 border-gray-300 p-3 px-8 outline-0"/>
                <input type="text" placeholder="Postal Code / Zip" className="rounded-full border-2 border-gray-300 p-3 px-8 outline-0"/>
                <select name="countries" className="rounded-full border-2 border-gray-300 p-3 px-8 outline-0">
                    <option value="India">India</option>
                    <option value="Poland">Poland</option>
                    <option value="Japan">Japan</option>
                    <option value="Iceland">Iceland</option>
                </select>
            </form>

        </div>
    )
}

export default ShippingForm
