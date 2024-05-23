import React from 'react'

export default function FooterV() {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font" style={{marginTop: "2rem"}}>
    <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a href='/' className="flex title-font font-medium items-center md:justify-start justify-center text-white">
             
                <img src="/SVGs/vite.svg" style={{width: "50px", height: "50px"}} alt="" />
                <span className="ml-3 text-xl" style={{fontFamily: "urbanist"}}>Vritthim</span>
            </a>
            <p className="mt-2 text-sm text-gray-500" style={{fontFamily: "comfortaa"}}>One Stop Destination for all Digital Problems.</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3" style={{fontFamily: "raleway"}}>Services</h2>
                <nav className="list-none mb-10">
                    <li>
                        <a href='/' className="text-gray-400 hover:text-white" style={{fontFamily: "comfortaa"}}>Service 1</a>
                    </li>
                    <li>
                        <a href='/' className="text-gray-400 hover:text-white" style={{fontFamily: "comfortaa"}}>Service 2</a>
                    </li>
                    <li>
                        <a href='/' className="text-gray-400 hover:text-white" style={{fontFamily: "comfortaa"}}>Service 3</a>
                    </li>
                    <li>
                        <a href='/' className="text-gray-400 hover:text-white" style={{fontFamily: "comfortaa"}}>Service 4</a>
                    </li>
                </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3" style={{fontFamily: "raleway"}}>Products</h2>
                <nav className="list-none mb-10">
                    <li>
                        <a href='/' className="text-gray-400 hover:text-white" style={{fontFamily: "comfortaa"}}>Product 1</a>
                    </li>
                    <li>
                        <a href='/' className="text-gray-400 hover:text-white" style={{fontFamily: "comfortaa"}}>Product 2</a>
                    </li>
                    <li>
                        <a href='/' className="text-gray-400 hover:text-white" style={{fontFamily: "comfortaa"}}>Product 3</a>
                    </li>
                    <li>
                        <a href='/' className="text-gray-400 hover:text-white" style={{fontFamily: "comfortaa"}}>Product 4</a>
                    </li>
                </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4" id='input-email'>
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SUBSCRIBE</h2>
                <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                    <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                        <label htmlFor="footer-field" className="leading-7 text-sm text-gray-400" style={{fontFamily: "comfortaa"}}>Enter Your Email</label>
                        <input style={{ width: "25vw", fontFamily: "urbanist" }} type="text" id="footer-field" name="footer-field" className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" style={{backgroundColor: "rgb(53, 42, 54)", fontFamily: "comfortaa "}}>Subscribe</button>
                </div>
                <p className="text-gray-500 text-sm mt-2 md:text-left text-center" style={{fontFamily: "comfortaa"}}>Subscribe to get latest updates
                    <br className="lg:block hidden" /> from our side
                </p>
            </div>
        </div>
    </div>


    <div className="bg-gray-800 bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-sm text-center sm:text-left" style={{fontFamily: "comfortaa"}}>© 2024-25 Vritthim —
                <a href="https://mail.google.com/" rel="noopener noreferrer" className="text-gray-500 ml-1" target="_blank" style={{fontFamily: "comfortaa"}}>@webdevelopercode24</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a href='/' className="text-gray-400">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                </a>
                <a href='/' className="ml-3 text-gray-400">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                </a>
                <a href='/'  className="ml-3 text-gray-400">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                </a>
                <a href='/' className="ml-3 text-gray-400">
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                </a>
            </span>
        </div>
    </div>
</footer>
  )
}
