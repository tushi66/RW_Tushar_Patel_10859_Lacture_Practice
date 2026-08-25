import React from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../Hooks/Costumhook"
import { FaShoppingCart } from "react-icons/fa";


const MyNavbar = () => {

    const { isAuthenticated, user, logout } = useAuth()

    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }


    return (
        <>
            <nav className="bg-dark sticky">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                    <Link
                        to="/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-7"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-xl text-heading font-semibold whitespace-nowrap text-white">
                            Flowbite
                        </span>
                    </Link>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeWidth={2}
                                d="M5 7h14M5 12h14M5 17h14"
                            />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:bg-neutral-primary">
                            <li>
                                <Link
                                    to="/"
                                    className="block py-2 px-3 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0 nav-link-custom"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent nav-link-custom"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/product"
                                    className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent nav-link-custom"
                                >
                                    Product
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent nav-link-custom"
                                >
                                    Contact
                                </Link>
                            </li>

                            {
                                isAuthenticated ? (
                                    <li className='flex'>
                                        <div className='me-6'>
                                            <Link
                                                to="/contact"
                                                className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                                            >
                                                {user?.name || 'Profile'}
                                            </Link>
                                        </div>
                                        <div>
                                            <button type='button' onClick={handleLogout}>Logout</button>
                                        </div>
                                    </li>

                                ) : (
                                    <li >
                                        <Link
                                            to="/login"
                                            className="block text-white py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                                        >
                                            Login
                                        </Link>
                                    </li>
                                )
                            }

                            <li>
                                <Link
                                    to="/wishlist"
                                    className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent nav-link-custom"
                                >
                                    WishList
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/cart"
                                    className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent nav-link-custom"
                                >
                                    <div className="relative">
                                        <FaShoppingCart size={20}/>

                                        <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center">
                                            2
                                        </span>
                                    </div>
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>


        </>

    )
}

export default MyNavbar;
