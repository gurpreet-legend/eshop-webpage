import { Link } from "react-router-dom";

//Icons :
import { IoMdArrowBack } from "react-icons/io";

const Footer = () => {
    return (
        <div className='footer flex flex-col md:flex-row justify-center items-center'>
            <Link to="#" className="flex items-center text-lg grow">
                <IoMdArrowBack />
                <span className="ml-4">Back</span>
            </Link>
            <div className="md:space-x-5">
                <button className="rounded-full border-2 px-9 py-3 text-sm hover:bg-teal-300 hover:text-white hover:border-teal-300">
                    CONTINUE SHOPPING
                </button>
                <button className="rounded-full border-2 px-9 py-3 text-sm bg-teal-300 text-white">
                    PROCEED TO PAYMENT
                </button>
            </div>
        </div>
    )
}

export default Footer
