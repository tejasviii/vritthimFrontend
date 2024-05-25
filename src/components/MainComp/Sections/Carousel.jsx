
import { Carousel } from "flowbite-react";

export function SliderCarousel() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 bg-contain">
           <Carousel>
        <img className=" object-contain" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="..." />
        <img className=" object-cover" src="https://images.unsplash.com/photo-1552581234-26160f608093?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="..." />
        <img className=" object-cover" src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="..." />
        <img className=" object-cover" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZXRpbmd8ZW58MHx8MHx8fDA%3D" alt="..." />
        <img className=" object-cover" src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lZXRpbmd8ZW58MHx8MHx8fDA%3D" alt="..." />
      </Carousel>
        </div>
    );
}
