import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
// icons
import shopping from "../assets/icons/shopping.svg";
import logo from "../assets/icons/logo.png";
import close from "../assets/icons/close.svg";
import menu from "../assets/icons/menu.svg";

// context cart state
import { CartContext } from '../context/CartContextProvider';

// nav data
import { navLink } from '../constants';

const Navbar = () => {

    const { state } = useContext(CartContext);

    const [toggle, setToggle] = useState(false);

    return (
        <nav className='navbar flex w-full py-6 justify-between items-center'>
            <img src={logo} alt='logo' className='w-[154px] h-[124px]' />

            <ul className=' hidden md:flex list-none flex-1 justify-end items-center'>
                {navLink.map((item, index) => (
                    <li key={item.id} className={` font-normal text-white text-[16px] cursor-pointer
                    ${index === navLink.length - 1 ? "mr-0" : "mr-10"}`}>
                        <Link to={`#${item.id}`}>
                            {item.title}
                            {item.id === "cart" &&
                                <Link className='flex' to="/shopcart">
                                    <img src={shopping} alt='shopping' className='w-[25px]' />
                                    {state.itemCounter > 0 &&
                                        <span>{state.itemCounter}</span>}
                                </Link>
                            }
                        </Link>
                    </li>
                ))}
            </ul>

            <div className=' sm:hidden flex flex-1 justify-end items-center'>
                <img src={toggle ? close : menu} alt='Hamburger menu'
                    className=' w-[28px] h-[28px] object-contain'
                    onClick={() => setToggle(prev => !prev)}
                />
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient
                   absolute top-20 right-0 mx-4 my-6 min-w-[140px] rounded-xl sidebar`}>65</div>
            </div>

        </nav>
    );
}

export default Navbar;
