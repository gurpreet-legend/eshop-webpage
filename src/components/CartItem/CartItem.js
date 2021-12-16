import React from 'react'

const CartItem = ({item}) => {
    return (
        <>
            <div className='flex items-center space-x-5 my-5 hover:bg-gray-300 py-2 px-5 rounded-full'>
                <img 
                    src={item.imgSrc} 
                    alt="image" 
                    className='w-20 h-20 rounded-full object-cover'
                />
                <div className='flex flex-col grow'>
                    <span>{item.category}</span>
                    <span>{item.itemName}</span>
                    <span className='text-sm text-gray-400 mt-2'>{item.id}</span>
                </div>
                <span>${item.cost}</span>
            </div>
        </>
    )
}

export default CartItem
