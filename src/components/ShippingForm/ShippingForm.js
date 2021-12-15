

const ShippingForm = () => {
    return (
        <div>
            <div className="auth space-x-2">
                <button className="rounded-full border-2 px-9 py-3 text-sm bg-teal-300 text-white">LOG IN</button>
                <button className="rounded-full border-2 px-9 py-3 text-sm border-gray-300 hover:bg-teal-300 hover:text-white hover:border-teal-300"> SIGN UP</button>
            </div>
            <h1 className="text-lg mb-6">Shipping Information</h1>
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
