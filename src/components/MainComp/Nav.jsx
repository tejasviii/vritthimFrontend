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
                        <li className="nav-link"><a className='links border-transparent' href="#team"><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="nav-icons" fill="#e8eaed"><g><rect fill="none" height="24" width="24" /></g><g><path d="M22,3l-1.67,1.67L18.67,3L17,4.67L15.33,3l-1.66,1.67L12,3l-1.67,1.67L8.67,3L7,4.67L5.33,3L3.67,4.67L2,3v16 c0,1.1,0.9,2,2,2l16,0c1.1,0,2-0.9,2-2V3z M11,19H4v-6h7V19z M20,19h-7v-2h7V19z M20,15h-7v-2h7V15z M20,11H4V8h16V11z" /></g></svg>News</a></li>
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
                            <Button onClick={() => setIsOpen(true)}> <p className="urbanist"> Show navigation</p></Button>
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

                                                <Sidebar.Item icon={HiChartPie}>
                                                    <Link to='/'> <p className="comfortaa-bold">Home</p></Link>
                                                </Sidebar.Item>
                                                <hr className='my-1' />
                                                <Sidebar.Item to="/services" icon={HiShoppingBag}>
                                                    <Link to='/services'> <p className="comfortaa-bold">Services</p></Link>
                                                </Sidebar.Item>
                                                <hr className='my-1' />
                                                <Sidebar.Item href="/users/list" icon={HiUsers}>
                                                    <p className="comfortaa-bold">Team</p>
                                                </Sidebar.Item>
                                                <hr className='my-1' />
                                                <Sidebar.Item href="/authentication/sign-in" icon={HiLogin}>
                                                    <p className="comfortaa-bold">Testimonials</p>
                                                </Sidebar.Item>
                                                <hr className='my-1' />
                                                <Sidebar.Item href="/authentication/sign-up" icon={HiPencil}>
                                                    <p className="comfortaa-bold">Contact</p>
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
