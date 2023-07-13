import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// icons
import shopIcon from "../assets/icons/shopping.svg";
// context cart state
import { CartContext } from '../context/CartContextProvider';
// logo
import logo from "../assets/logo.png";
// nav data
import { navLink } from '../constants';

const Navbar = () => {

    const { state } = useContext(CartContext);

    return (
        <nav className='navbar flex w-full py-6 justify-between items-center'>
            <img src={logo} alt='logo' className='w-[154px] h-[124px]' />

            <ul className=' hidden md:flex list-none flex-1 justify-end items-center'>
                {navLink.map((item, index) => (
                    <li key={item.id} className={` font-normal text-white text-[16px] cursor-pointer
                    ${index === navLink.length - 1 ? "mr-0" : "mr-10"}`}>
                        <Link to={`#${item.id}`}>
                            {item.title}
                            {
                                item.id === "cart" &&
                                <Link className='flex' to="/shopcart">
                                    <img src={shopIcon} alt='shopping' className='w-[25px]' />
                                    {state.itemCounter > 0 &&
                                        <span>{state.itemCounter}</span>}
                                </Link>
                            }
                        </Link>
                    </li>
                ))}
            </ul>

            {/* <div>
                <Link to="/shopcart">
                    <img src={shopIcon} alt='shopping' />
                    <span>{state.itemCounter}</span>
                </Link>
            </div> */}
        </nav>
    );
}

export default Navbar;
