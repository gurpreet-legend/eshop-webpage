import Cart from '../Cart/Cart'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'


const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className='container m-auto relative'>
                <Header/>
                <Footer />
                <Cart />
            </div>
        </>
    )
}

export default HomePage
