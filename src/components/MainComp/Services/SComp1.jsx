import React from 'react'
import "../../CSS/Services.css";
export default function SComp1() {
    return (

        <section class="mb-10 overflow-hidden ">


            <div
                class="relative mt-30 overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[500px]  hero-services">
                <div
                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.75)]">
                    <div class="flex h-full items-center justify-center">
                        <div class="px-6 text-center text-white md:px-12">
                            <h1 class="mt-8 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl comfortaa pop-up">
                                Take a look at Vritthim's top <br /><span>notch services</span>
                            </h1>
                            <button className="raleway mt-8 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-rose-300 relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg">
                                Follow
                            </button>
                        </div>
                    </div>
                </div>
            </div>

    

        </section>
    )
}
