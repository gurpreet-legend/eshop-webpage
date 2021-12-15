import CartItem from "../CartItem/CartItem"

const ItemsInfo = [
    {
        imgSrc : "/shirtImg-1.jpg",
        category : "T-Shirt",
        itemName : "Summer Vibes",
        cost : "$89.99",
        id : "#261311"
    },
    {
        imgSrc : "/shirtImg-2.jpg",
        category : "Basic Slim",
        itemName : "Fit T-shirts",
        cost : "$69.99",
        id : "#212315"
    },
]

const Cart = () => {
    return (
        <div className='text-lg'>
            Your Cart
            {ItemsInfo.map((item, index) => (
                <CartItem key={index} item={item}/>
            ))}
        </div>
    )
}

export default Cart
