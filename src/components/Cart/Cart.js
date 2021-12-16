import CartItem from "../CartItem/CartItem"

// Icons :
import { FiTruck} from "react-icons/fi";

const ItemsInfo = [
    {
        imgSrc : "/shirtImg-1.jpg",
        category : "T-Shirt",
        itemName : "Summer Vibes",
        cost : 89.99,
        id : "#261311"
    },
    {
        imgSrc : "/shirtImg-2.jpg",
        category : "Basic Slim",
        itemName : "Fit T-shirts",
        cost : 69.99,
        id : "#212315"
    },
]

let totalCost = 0;
ItemsInfo.forEach((item) => {
    totalCost += item.cost
})

let freeShippingCost = 190.00 - totalCost;

const Cart = () => {
    return (
        <div>
            <div className='text-lg'>
                Your Cart
                {ItemsInfo.map((item, index) => (
                    <CartItem key={index} item={item}/>
                ))}
            </div>
            <div className='flex bg-gray-200 rounded-full p-5 px-20 text-lg'>
                <span className="grow text-gray-600">Total Cost</span>  
                <span>${totalCost}</span>
            </div>

            <div className="freeshipDetails flex text-lg items-center justify-center pt-9">
                <FiTruck className="text-xl"/>
                <p className="text-gray-400 text-center"> You are <span className="text-black">${freeShippingCost.toFixed(2)}</span> away from free shipping!</p>  
            </div>
        </div>
    )
}

export default Cart
