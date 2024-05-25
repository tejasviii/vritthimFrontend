import React from 'react'

export default function Map() {
    return (
        <div>

            <section class="text-gray-400 bg-gray-900 body-font relative">
                <div class="absolute inset-0 bg-gray-900">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1779.311768097954!2d75.74516125516818!3d26.883699401310437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5a9d44a1535%3A0x41c04bb9bf7a2bee!2sChauhan%20Bhawan!5e0!3m2!1sen!2sin!4v1672624552830!5m2!1sen!2sin"
                        className='map' allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="container px-5 py-24 mx-auto flex">
                    <div class="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                        <h2 class="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p class="leading-relaxed mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
                            <input type="email" id="email" name="email" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div class="relative mb-4">
                            <label for="message" class="leading-7 text-sm text-gray-400">Message</label>
                            <textarea id="message" name="message" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <p class="text-xs text-gray-400 text-opacity-90 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
