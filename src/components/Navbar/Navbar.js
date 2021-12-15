import { Link } from "react-router-dom";
import React from 'react'
import { useState, useRef, useEffect } from "react";
import HamburgerMenu from "react-hamburger-menu";

//Icons :
import { BsShop, BsPersonFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";



const categories = [
    {
        name: 'Men',
        route: '#',
    },
    {
        name: 'Women',
        route: '#',
    },
    {
        name: 'Kids',
        route: '#',
    },
]



const Navbar = () => {
    const [open, setOpen] = useState(false)
    const hamMenuRef = useRef();

    useEffect(() => {
        hamMenuRef.current.style.display = open ?  'flex' : 'none';
    }, [open])

    const handleClicked = () => {
        setOpen(prevOpen => !prevOpen) 
    }

    return (
        <>
            <div className='nav flex items-center border-b-4 border-gray-300 py-5 px-4'>
                <div className='logo text-4xl flex grow'>
                    <BsShop/> 
                    <h1><span className='text-amber-400 ml-3'>E</span>-shop</h1>
                </div>

                <div className='grow categories text-xl text-center space-x-20 hidden md:flex'>
                    {categories.map((category, index) => {
                        return (
                            <Link to={category.route} key={index} className='hover:underline '>{category.name}</Link>
                        )
                    })}
                </div>

                <div className="icons text-2xl ">
                    <div className="non-ham-icons hidden md:flex space-x-8">
                        <BiSearchAlt2 />
                        <FiShoppingCart />
                        <BsPersonFill />
                    </div>
                    <HamburgerMenu
                        isOpen={open}
                        menuClicked={handleClicked}
                        className="md:hidden"
                    />
                </div>

            </div>

            {/* Hamburger menu : */}
            <div ref={hamMenuRef} className="ham hidden flex-col justify-center items-center py-4 md:hidden">
                <div className="non-ham-icons icons text-2xl space-x-10 flex flex-row">
                    <BiSearchAlt2 />
                    <FiShoppingCart />
                    <BsPersonFill />
                </div>
                <div className='categories text-2xl text-center flex flex-col'>
                    {categories.map((category, index) => {
                        return (
                            <Link to={category.route} key={index} className='hover:underline '>{category.name}</Link>
                        )
                    })}
                </div>
            </div>
         </> 
    )
}

export default Navbar
