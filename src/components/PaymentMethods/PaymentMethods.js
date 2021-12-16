const PaymentMethods = () => {
    return (
        <div>
            <h1 className="py-4">Payment method</h1>
            <div className='payment-method grid grid-cols-3 gap-3'>
                <div className="border-2 border-gray-300 p-3 w-full rounded-full flex justify-center items-center h-20 hover:border-yellow-400">
                    <img src="/payments/paypal.png" className="object-cover h-6 w-auto"/>  
                </div>
                <div className="border-2 border-gray-300 p-3 w-full rounded-full flex justify-center items-center h-20 hover:border-yellow-400">
                    <img src="/payments/visa.png" className="object-cover h-6 w-auto"/> 
                </div>
                <div className="border-2 border-gray-300 p-3 w-full rounded-full flex justify-center items-center h-20 hover:border-yellow-400">
                    <img src="/payments/mastercard.png" className="object-cover h-10 w-auto"/> 
                </div>
                <div className="border-2 border-gray-300 p-3 w-full rounded-full flex justify-center items-center h-20 hover:border-yellow-400">
                    <img src="/payments/maestro.png"  className="object-cover h-10 w-auto"/>
                </div>
                <div className="border-2 border-gray-300 p-3 w-full rounded-full flex justify-center items-center h-20 hover:border-yellow-400">
                    <img src="/payments/ideal.png" className="object-cover h-10 w-auto"/>
                </div>
                <div className="border-2 border-gray-300 p-3 w-full rounded-full flex justify-center items-center h-20 hover:border-yellow-400">
                    <img src="/payments/discover.png"  className="object-cover h-10 w-auto"/>
                </div>
            </div>
            <h1 className="py-4 mt-8">Delivery method</h1>
            <div className='delivery-method grid grid-cols-2 gap-3 mb-4'>
                <div className="border-2 border-gray-300 p-3 w-full rounded-full flex justify-center items-center h-20 hover:border-yellow-400">
                    <img src="/delivery/inpost.png" className="object-cover h-8 w-auto mr-6"/>  
                    <span>$20.00</span>
                </div>
                <div className="border-2 border-gray-300 p-3 w-full rounded-full flex justify-center items-center h-20 hover:border-yellow-400">
                    <img src="/delivery/dpd.png" className="object-cover h-8 w-auto mr-6"/>  
                    <span>$12.00</span>
                </div>
                <div className="border-2 border-gray-300 p-3 w-full rounded-full flex justify-center items-center h-20 hover:border-yellow-400">
                    <img src="/delivery/DHL.png" className="object-cover h-8 w-auto mr-6"/>
                    <span>$15.00</span>  
                </div>
                <div className="border-2 border-gray-300 p-3 w-full rounded-full flex justify-center items-center h-20 hover:border-yellow-400">
                    <img src="/delivery/fedex.png" className="object-cover h-20 w-auto mr-6"/>  
                    <span>$10.00</span>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethods
