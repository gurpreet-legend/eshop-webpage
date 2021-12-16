//Icons :
import { FiTruck, FiShoppingCart } from "react-icons/fi";

const Header = () => {
    return (
        <div className='header flex flex-col  sm:flex-row items-center text-2xl my-12 px-6'>
            <h1 className='grow'>Shipping and Payment</h1>
            <div className='shipmentStatus flex items-center space-x-2 py-4'>
                <div className='rounded-full border-2 border-teal-300 p-2'>
                    <FiShoppingCart />
                </div>
                <span>-----</span>
                <div className='rounded-full bg-teal-300 border-2 border-teal-300 text-white p-2'>
                    <FiTruck />
                </div>
            </div>
        </div>
    )
}

export default Header
