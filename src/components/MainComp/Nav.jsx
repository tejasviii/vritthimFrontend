import React from 'react'
import '../CSS/Navbar.css'
import { Link } from 'react-router-dom'


import { Button, Drawer, Sidebar, TextInput, Card, Checkbox, Label } from "flowbite-react";
import { useState } from "react";
import {
    HiChartPie,
    HiLogin,
    HiPencil,
    HiSearch,
    HiShoppingBag,
    HiUsers,
} from "react-icons/hi";


export default function Nav(props) {


    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => setIsOpen(false);

    return (
        <nav className='nav'>
            <div className="nav-div">
                <div className="logo-container">
                    <img src='/SVGs/vite.svg' alt="logo" className="logo" />
                    <h1 className="logo-text">VRITTHIM</h1>
                </div>
                <div className="nav-links-container">
                    <ul className="nav-links">
                        <li className="nav-link"><Link className='links' to="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="nav-icons" fill="#e8eaed"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" /></svg>Home</Link></li>
                        <li className="nav-link"><a className='links' href="#testimonials"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="nav-icons" fill="#e8eaed"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7zm12-4h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04-.39.08-.74.28-1.01.55-.18.18-.33.4-.43.64-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z" /></svg>Testimonials</a></li>
                        <li className="nav-link"><Link className='links' to="/services"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="nav-icons" fill="#e8eaed"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M22.61 18.99l-9.08-9.08c.93-2.34.45-5.1-1.44-7C9.79.61 6.21.4 3.66 2.26L7.5 6.11 6.08 7.52 2.25 3.69C.39 6.23.6 9.82 2.9 12.11c1.86 1.86 4.57 2.35 6.89 1.48l9.11 9.11c.39.39 1.02.39 1.41 0l2.3-2.3c.4-.38.4-1.01 0-1.41zm-3 1.6l-9.46-9.46c-.61.45-1.29.72-2 .82-1.36.2-2.79-.21-3.83-1.25C3.37 9.76 2.93 8.5 3 7.26l3.09 3.09 4.24-4.24-3.09-3.09c1.24-.07 2.49.37 3.44 1.31 1.08 1.08 1.49 2.57 1.24 3.96-.12.71-.42 1.37-.88 1.96l9.45 9.45-.88.89z" /></svg>Services</Link></li>
                        <li className="nav-link"><a className='links' href="#team"><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="nav-icons" fill="#e8eaed"><rect fill="none" height="24" width="24" /><g><path d="M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14 c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14 c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9 c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61C18,15.21,17.32,14.13,16.24,13.65z M8.07,16 c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69H8.07z M12,8 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8 M12,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3 C15,7.34,13.66,6,12,6L12,6z" /></g></svg>Team</a></li>
                        <li className="nav-link"><Link className='links border-transparent' to="/contact"><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="nav-icons" fill="#e8eaed"><g><rect fill="none" height="24" width="24" /></g><g><path d="M22,3l-1.67,1.67L18.67,3L17,4.67L15.33,3l-1.66,1.67L12,3l-1.67,1.67L8.67,3L7,4.67L5.33,3L3.67,4.67L2,3v16 c0,1.1,0.9,2,2,2l16,0c1.1,0,2-0.9,2-2V3z M11,19H4v-6h7V19z M20,19h-7v-2h7V19z M20,15h-7v-2h7V15z M20,11H4V8h16V11z" /></g></svg>Contact</Link></li>
                    </ul>
                </div>

                <div className='toggle-btn'>
                    <label id="theme-toggle-button">
                        <input type="checkbox" id="toggle" onClick={props.theme} />
                        <svg viewBox="0 0 69.667 44" xmlns: xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                            <g transform="translate(3.5 3.5)" data-name="Component 15 – 1" id="Component_15_1">


                                <g filter="url(#container)" transform="matrix(1, 0, 0, 1, -3.5, -3.5)">
                                    <rect fill="#83cbd8" transform="translate(3.5 3.5)" rx="17.5" height="35" width="60.667" data-name="container" id="container"></rect>
                                </g>

                                <g transform="translate(2.333 2.333)" id="button">

                                    <g data-name="sun" id="sun">
                                        <g filter="url(#sun-outer)" transform="matrix(1, 0, 0, 1, -5.83, -5.83)">
                                            <circle fill="#f8e664" transform="translate(5.83 5.83)" r="15.167" cy="15.167" cx="15.167" data-name="sun-outer" id="sun-outer-2"></circle>
                                        </g>
                                        <g filter="url(#sun)" transform="matrix(1, 0, 0, 1, -5.83, -5.83)">
                                            <path fill="rgba(246,254,247,0.29)" transform="translate(9.33 9.33)" d="M11.667,0A11.667,11.667,0,1,1,0,11.667,11.667,11.667,0,0,1,11.667,0Z" data-name="sun" id="sun-3"></path>
                                        </g>
                                        <circle fill="#fcf4b9" transform="translate(8.167 8.167)" r="7" cy="7" cx="7" id="sun-inner"></circle>
                                    </g>


                                    <g data-name="moon" id="moon">
                                        <g filter="url(#moon)" transform="matrix(1, 0, 0, 1, -31.5, -5.83)">
                                            <circle fill="#cce6ee" transform="translate(31.5 5.83)" r="15.167" cy="15.167" cx="15.167" data-name="moon" id="moon-3"></circle>
                                        </g>
                                        <g fill="#a6cad0" transform="translate(-24.415 -1.009)" id="patches">
                                            <circle transform="translate(43.009 4.496)" r="2" cy="2" cx="2"></circle>
                                            <circle transform="translate(39.366 17.952)" r="2" cy="2" cx="2" data-name="patch"></circle>
                                            <circle transform="translate(33.016 8.044)" r="1" cy="1" cx="1" data-name="patch"></circle>
                                            <circle transform="translate(51.081 18.888)" r="1" cy="1" cx="1" data-name="patch"></circle>
                                            <circle transform="translate(33.016 22.503)" r="1" cy="1" cx="1" data-name="patch"></circle>
                                            <circle transform="translate(50.081 10.53)" r="1.5" cy="1.5" cx="1.5" data-name="patch"></circle>
                                        </g>
                                    </g>
                                </g>


                                <g filter="url(#cloud)" transform="matrix(1, 0, 0, 1, -3.5, -3.5)">
                                    <path fill="#fff" transform="translate(-3466.47 -160.94)" d="M3512.81,173.815a4.463,4.463,0,0,1,2.243.62.95.95,0,0,1,.72-1.281,4.852,4.852,0,0,1,2.623.519c.034.02-.5-1.968.281-2.716a2.117,2.117,0,0,1,2.829-.274,1.821,1.821,0,0,1,.854,1.858c.063.037,2.594-.049,3.285,1.273s-.865,2.544-.807,2.626a12.192,12.192,0,0,1,2.278.892c.553.448,1.106,1.992-1.62,2.927a7.742,7.742,0,0,1-3.762-.3c-1.28-.49-1.181-2.65-1.137-2.624s-1.417,2.2-2.623,2.2a4.172,4.172,0,0,1-2.394-1.206,3.825,3.825,0,0,1-2.771.774c-3.429-.46-2.333-3.267-2.2-3.55A3.721,3.721,0,0,1,3512.81,173.815Z" data-name="cloud" id="cloud"></path>
                                </g>


                                <g fill="#def8ff" transform="translate(3.585 1.325)" id="stars">
                                    <path transform="matrix(-1, 0.017, -0.017, -1, 24.231, 3.055)" d="M.774,0,.566.559,0,.539.458.933.25,1.492l.485-.361.458.394L1.024.953,1.509.592.943.572Z"></path>
                                    <path transform="matrix(-0.777, 0.629, -0.629, -0.777, 23.185, 12.358)" d="M1.341.529.836.472.736,0,.505.46,0,.4.4.729l-.231.46L.605.932l.4.326L.9.786Z" data-name="star"></path>
                                    <path transform="matrix(0.438, 0.899, -0.899, 0.438, 23.177, 29.735)" d="M.015,1.065.475.9l.285.365L.766.772l.46-.164L.745.494.751,0,.481.407,0,.293.285.658Z" data-name="star"></path>
                                    <path transform="translate(12.677 0.388) rotate(104)" d="M1.161,1.6,1.059,1,1.574.722.962.607.86,0,.613.572,0,.457.446.881.2,1.454l.516-.274Z" data-name="star"></path>
                                    <path transform="matrix(-0.07, 0.998, -0.998, -0.07, 11.066, 15.457)" d="M.873,1.648l.114-.62L1.579.945,1.03.62,1.144,0,.706.464.157.139.438.7,0,1.167l.592-.083Z" data-name="star"></path>
                                    <path transform="translate(8.326 28.061) rotate(11)" d="M.593,0,.638.724,0,.982l.7.211.045.724.36-.64.7.211L1.342.935,1.7.294,1.063.552Z" data-name="star"></path>
                                    <path transform="translate(5.012 5.962) rotate(172)" d="M.816,0,.5.455,0,.311.323.767l-.312.455.516-.215.323.456L.827.911,1.343.7.839.552Z" data-name="star"></path>
                                    <path transform="translate(2.218 14.616) rotate(169)" d="M1.261,0,.774.571.114.3.487.967,0,1.538.728,1.32l.372.662.047-.749.728-.218L1.215.749Z" data-name="star"></path>
                                </g>
                            </g>
                        </svg>
                    </label>
                </div>

                <div>

                </div>

                <div className="hamburger">
                    <div className="flex min-h-[50vh] items-center justify-center gap-9">
                        <div>
                            <div onClick={() => setIsOpen(true)}>  <input type="checkbox" id="checkbox" />
                                <label for="checkbox" class="toggle">
                                    <div class="bars" id="bar1"></div>
                                    <div class="bars" id="bar2"></div>
                                    <div class="bars" id="bar3"></div>
                                </label></div>
                        </div>
                        <div className='toggle-btn2'>
                            <label id="theme-toggle-button">
                                <input type="checkbox" id="toggle" onClick={props.theme} />
                                <svg viewBox="0 0 69.667 44" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                    <g transform="translate(3.5 3.5)" data-name="Component 15 – 1" id="Component_15_1">


                                        <g filter="url(#container)" transform="matrix(1, 0, 0, 1, -3.5, -3.5)">
                                            <rect fill="#83cbd8" transform="translate(3.5 3.5)" rx="17.5" height="35" width="60.667" data-name="container" id="container"></rect>
                                        </g>

                                        <g transform="translate(2.333 2.333)" id="button">

                                            <g data-name="sun" id="sun">
                                                <g filter="url(#sun-outer)" transform="matrix(1, 0, 0, 1, -5.83, -5.83)">
                                                    <circle fill="#f8e664" transform="translate(5.83 5.83)" r="15.167" cy="15.167" cx="15.167" data-name="sun-outer" id="sun-outer-2"></circle>
                                                </g>
                                                <g filter="url(#sun)" transform="matrix(1, 0, 0, 1, -5.83, -5.83)">
                                                    <path fill="rgba(246,254,247,0.29)" transform="translate(9.33 9.33)" d="M11.667,0A11.667,11.667,0,1,1,0,11.667,11.667,11.667,0,0,1,11.667,0Z" data-name="sun" id="sun-3"></path>
                                                </g>
                                                <circle fill="#fcf4b9" transform="translate(8.167 8.167)" r="7" cy="7" cx="7" id="sun-inner"></circle>
                                            </g>


                                            <g data-name="moon" id="moon">
                                                <g filter="url(#moon)" transform="matrix(1, 0, 0, 1, -31.5, -5.83)">
                                                    <circle fill="#cce6ee" transform="translate(31.5 5.83)" r="15.167" cy="15.167" cx="15.167" data-name="moon" id="moon-3"></circle>
                                                </g>
                                                <g fill="#a6cad0" transform="translate(-24.415 -1.009)" id="patches">
                                                    <circle transform="translate(43.009 4.496)" r="2" cy="2" cx="2"></circle>
                                                    <circle transform="translate(39.366 17.952)" r="2" cy="2" cx="2" data-name="patch"></circle>
                                                    <circle transform="translate(33.016 8.044)" r="1" cy="1" cx="1" data-name="patch"></circle>
                                                    <circle transform="translate(51.081 18.888)" r="1" cy="1" cx="1" data-name="patch"></circle>
                                                    <circle transform="translate(33.016 22.503)" r="1" cy="1" cx="1" data-name="patch"></circle>
                                                    <circle transform="translate(50.081 10.53)" r="1.5" cy="1.5" cx="1.5" data-name="patch"></circle>
                                                </g>
                                            </g>
                                        </g>


                                        <g filter="url(#cloud)" transform="matrix(1, 0, 0, 1, -3.5, -3.5)">
                                            <path fill="#fff" transform="translate(-3466.47 -160.94)" d="M3512.81,173.815a4.463,4.463,0,0,1,2.243.62.95.95,0,0,1,.72-1.281,4.852,4.852,0,0,1,2.623.519c.034.02-.5-1.968.281-2.716a2.117,2.117,0,0,1,2.829-.274,1.821,1.821,0,0,1,.854,1.858c.063.037,2.594-.049,3.285,1.273s-.865,2.544-.807,2.626a12.192,12.192,0,0,1,2.278.892c.553.448,1.106,1.992-1.62,2.927a7.742,7.742,0,0,1-3.762-.3c-1.28-.49-1.181-2.65-1.137-2.624s-1.417,2.2-2.623,2.2a4.172,4.172,0,0,1-2.394-1.206,3.825,3.825,0,0,1-2.771.774c-3.429-.46-2.333-3.267-2.2-3.55A3.721,3.721,0,0,1,3512.81,173.815Z" data-name="cloud" id="cloud"></path>
                                        </g>


                                        <g fill="#def8ff" transform="translate(3.585 1.325)" id="stars">
                                            <path transform="matrix(-1, 0.017, -0.017, -1, 24.231, 3.055)" d="M.774,0,.566.559,0,.539.458.933.25,1.492l.485-.361.458.394L1.024.953,1.509.592.943.572Z"></path>
                                            <path transform="matrix(-0.777, 0.629, -0.629, -0.777, 23.185, 12.358)" d="M1.341.529.836.472.736,0,.505.46,0,.4.4.729l-.231.46L.605.932l.4.326L.9.786Z" data-name="star"></path>
                                            <path transform="matrix(0.438, 0.899, -0.899, 0.438, 23.177, 29.735)" d="M.015,1.065.475.9l.285.365L.766.772l.46-.164L.745.494.751,0,.481.407,0,.293.285.658Z" data-name="star"></path>
                                            <path transform="translate(12.677 0.388) rotate(104)" d="M1.161,1.6,1.059,1,1.574.722.962.607.86,0,.613.572,0,.457.446.881.2,1.454l.516-.274Z" data-name="star"></path>
                                            <path transform="matrix(-0.07, 0.998, -0.998, -0.07, 11.066, 15.457)" d="M.873,1.648l.114-.62L1.579.945,1.03.62,1.144,0,.706.464.157.139.438.7,0,1.167l.592-.083Z" data-name="star"></path>
                                            <path transform="translate(8.326 28.061) rotate(11)" d="M.593,0,.638.724,0,.982l.7.211.045.724.36-.64.7.211L1.342.935,1.7.294,1.063.552Z" data-name="star"></path>
                                            <path transform="translate(5.012 5.962) rotate(172)" d="M.816,0,.5.455,0,.311.323.767l-.312.455.516-.215.323.456L.827.911,1.343.7.839.552Z" data-name="star"></path>
                                            <path transform="translate(2.218 14.616) rotate(169)" d="M1.261,0,.774.571.114.3.487.967,0,1.538.728,1.32l.372.662.047-.749.728-.218L1.215.749Z" data-name="star"></path>
                                        </g>
                                    </g>
                                </svg>
                            </label>
                        </div>
                    </div>

                    <Drawer open={isOpen} onClose={handleClose}>
                        <Drawer.Header title="Navigation Menu" titleIcon={() => <></>} />
                        <Drawer.Items>
                            <Sidebar
                                aria-label="Sidebar with multi-level dropdown example"
                                className="[&>div]:bg-transparent [&>div]:p-0"
                            >
                                <div className="flex h-full flex-col justify-between py-2">
                                    <div>
                                        <form className="pb-3 md:hidden">
                                            <TextInput icon={HiSearch} type="search" placeholder="Search" required size={32} />
                                        </form>
                                        <Sidebar.Items>
                                            <Sidebar.ItemGroup>

                                                <Sidebar.Item>
                                                    <Link to='/'> <p className="comfortaa-bold flex gap-3 text-black"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M240-200h120v-200q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400v200h120v-360L480-740 240-560v360Zm-80 0v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H560q-17 0-28.5-11.5T520-160v-200h-80v200q0 17-11.5 28.5T400-120H240q-33 0-56.5-23.5T160-200Zm320-270Z" /></svg><span>Home</span></p></Link>
                                                </Sidebar.Item>
                                                <hr className='my-1' />
                                                <Sidebar.Item>
                                                    <Link to='/services'> <p className="comfortaa-bold flex gap-3 text-black"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M42-160v-72q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v72q0 17-11.5 28.5T642-120H82q-17 0-28.5-11.5T42-160Zm80-40h480v-32q0-11-5.5-20T582-266q-36-18-92.5-36T362-320q-71 0-127.5 18T142-266q-9 5-14.5 14t-5.5 20v32Zm240-240q-66 0-113-47t-47-113h-10q-9 0-14.5-5.5T172-620q0-9 5.5-14.5T192-640h10q0-45 22-81t58-57v38q0 9 5.5 14.5T302-720q9 0 14.5-5.5T322-740v-54q9-3 19-4.5t21-1.5q11 0 21 1.5t19 4.5v54q0 9 5.5 14.5T422-720q9 0 14.5-5.5T442-740v-38q36 21 58 57t22 81h10q9 0 14.5 5.5T552-620q0 9-5.5 14.5T532-600h-10q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T442-600H282q0 33 23.5 56.5T362-520Zm297 144-3-14q-6-2-11.5-4.5T634-402l-12 4q-7 2-13.5 0t-10.5-9l-4-7q-4-6-2.5-13t6.5-12l10-9v-24l-10-9q-5-5-6.5-12t2.5-13l4-7q4-7 10.5-9t13.5 0l12 4q4-4 10-7t12-5l3-14q2-7 7-11.5t12-4.5h8q7 0 12 4.5t7 11.5l3 14q6 2 12 5t10 7l12-4q7-2 13.5 0t10.5 9l4 7q4 6 2.5 13t-6.5 12l-10 9v24l10 9q5 5 6.5 12t-2.5 13l-4 7q-4 7-10.5 9t-13.5 0l-12-4q-5 5-10.5 7.5T708-390l-3 14q-2 7-7 11.5t-12 4.5h-8q-7 0-12-4.5t-7-11.5Zm23-54q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm68-152-4-20q-9-3-16.5-7.5T716-620l-21 7q-9 3-18-.5T663-625l-6-10q-5-8-3.5-17.5T663-669l17-15q-2-5-2-8v-16q0-3 2-8l-17-15q-8-7-9.5-16.5T657-765l6-10q5-8 14-11.5t18-.5l21 7q6-6 13.5-10.5T746-798l4-20q2-10 9.5-16t17.5-6h10q10 0 17.5 6t9.5 16l4 20q9 3 16.5 7.5T848-780l21-7q9-3 18 .5t14 11.5l6 10q5 8 3.5 17.5T901-731l-17 15q2 5 2 8v16q0 3-2 8l17 15q8 7 9.5 16.5T907-635l-6 10q-5 8-14 11.5t-18 .5l-21-7q-6 6-13.5 10.5T818-602l-4 20q-2 10-9.5 16t-17.5 6h-10q-10 0-17.5-6t-9.5-16Zm32-68q21 0 35.5-14.5T832-700q0-21-14.5-35.5T782-750q-21 0-35.5 14.5T732-700q0 21 14.5 35.5T782-650ZM362-200Z" /></svg><span>Services</span></p></Link>
                                                </Sidebar.Item>
                                                <hr className='my-1' />
                                                <Sidebar.Item>
                                                    <Link to='/contact'> <p className="comfortaa-bold flex gap-3 text-black"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M470-200h-10q-142 0-241-99t-99-241q0-142 99-241t241-99q71 0 132.5 26.5t108 73q46.5 46.5 73 108T800-540q0 134-75.5 249T534-111q-10 5-20 5.5t-18-4.5q-8-5-14-13t-7-19l-5-58Zm90-26q71-60 115.5-140.5T720-540q0-109-75.5-184.5T460-800q-109 0-184.5 75.5T200-540q0 109 75.5 184.5T460-280h100v54Zm-101-95q17 0 29-12t12-29q0-17-12-29t-29-12q-17 0-29 12t-12 29q0 17 12 29t29 12Zm-87-304q11 5 22 .5t18-14.5q9-12 21-18.5t27-6.5q24 0 39 13.5t15 34.5q0 13-7.5 26T480-558q-25 22-37 41.5T431-477q0 12 8.5 20.5T460-448q12 0 20-9t12-21q5-17 18-31t24-25q21-21 31.5-42t10.5-42q0-46-31.5-74T460-720q-32 0-59 15.5T357-662q-6 11-1.5 21.5T372-625Zm88 112Z" /></svg><span>Contact</span></p></Link>
                                                </Sidebar.Item>
                                                <hr className='my-1' />
                                                <Sidebar.Item>
                                                    <a href='#testimonials'> <p className="comfortaa-bold flex gap-3 text-black"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-400h65q8 0 15.5-3t13.5-9l188-188q9-9 13.5-20.5T580-643q0-11-5-21.5T562-684l-36-38q-9-9-20-13.5t-23-4.5q-11 0-22.5 4.5T440-722L252-534q-6 6-9 13.5t-3 15.5v65q0 17 11.5 28.5T280-400Zm240-243-37-37 37 37ZM300-460v-38l101-101 20 18 18 20-101 101h-38Zm121-121 18 20-38-38 20 18Zm26 181h233q17 0 28.5-11.5T720-440q0-17-11.5-28.5T680-480H527l-80 80ZM240-240l-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Zm-34-80h594v-480H160v525l46-45Zm-46 0v-480 480Z" /></svg><span>Testimonials</span></p></a>
                                                </Sidebar.Item>
                                                <hr className='my-1' />
                                                <Sidebar.Item>
                                                    <a href='#team'> <p className="comfortaa-bold flex gap-3 text-black"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M411-480q-28 0-46-21t-13-49l12-72q8-43 40.5-70.5T480-720q44 0 76.5 27.5T597-622l12 72q5 28-13 49t-46 21H411Zm24-80h91l-8-49q-2-14-13-22.5t-25-8.5q-14 0-24.5 8.5T443-609l-8 49ZM124-441q-23 1-39.5-9T63-481q-2-9-1-18t5-17q0 1-1-4-2-2-10-24-2-12 3-23t13-19l2-2q2-19 15.5-32t33.5-13q3 0 19 4l3-1q5-5 13-7.5t17-2.5q11 0 19.5 3.5T208-626q1 0 1.5.5t1.5.5q14 1 24.5 8.5T251-596q2 7 1.5 13.5T250-570q0 1 1 4 7 7 11 15.5t4 17.5q0 4-6 21-1 2 0 4l2 16q0 21-17.5 36T202-441h-78Zm676 1q-33 0-56.5-23.5T720-520q0-12 3.5-22.5T733-563l-28-25q-10-8-3.5-20t18.5-12h80q33 0 56.5 23.5T880-540v20q0 33-23.5 56.5T800-440ZM0-280v-23q0-44 44.5-70.5T160-400q13 0 25 .5t23 2.5q-14 20-21 43t-7 49v65H40q-17 0-28.5-11.5T0-280Zm240 0v-25q0-65 66.5-105T480-450q108 0 174 40t66 105v25q0 17-11.5 28.5T680-240H280q-17 0-28.5-11.5T240-280Zm560-120q72 0 116 26.5t44 70.5v23q0 17-11.5 28.5T920-240H780v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5Zm-320 30q-57 0-102 15t-53 35h311q-9-20-53.5-35T480-370Zm0 50Zm1-280Z" /></svg><span>Team</span></p></a>
                                                </Sidebar.Item>

                                            </Sidebar.ItemGroup>



                                        </Sidebar.Items>
                                    </div>
                                </div>


                            </Sidebar>

                        </Drawer.Items>
                        <Card className="max-w-sm absolute mb-8 bottom-0 right-0 left-0 ml-4 mr-4" >
                            <form className="flex flex-col gap-4">
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="email1" value="Your email" />
                                    </div>
                                    <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="password1" value="Your password" />
                                    </div>
                                    <TextInput id="password1" type="password" required />
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox id="remember" />
                                    <Label htmlFor="remember">Remember me</Label>
                                </div>
                                <Button type="submit">Submit</Button>
                            </form>
                        </Card>
                    </Drawer>



                </div>

            </div>
        </nav>
    )
}
