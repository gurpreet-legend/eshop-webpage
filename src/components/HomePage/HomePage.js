import Cart from '../Cart/Cart'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import ShippingForm from '../ShippingForm/ShippingForm'


const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className='container m-auto relative'>
                <Header/>
                <div className='grid grid-cols-12 gap-x-20'>
                    <div className='col-span-5'>
                        <ShippingForm />
                    </div>
                    <div className='col-span-3'>
                        <Cart />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default HomePage
