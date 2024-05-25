
import { Carousel } from "flowbite-react";

export function Carousel2() {
    return (
        <div className="container mx-auto my-10">
            <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                    <img src="https://images.unsplash.com/photo-1557838923-2985c318be48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="..." />
                    <img src="https://images.unsplash.com/photo-1562577308-9e66f0c65ce5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="..." />
                    <img src="https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D" alt="..." />
                    <img src="https://images.unsplash.com/photo-1538170819641-15b741105cb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRpZ2l0YWx8ZW58MHx8MHx8fDA%3D" alt="..." />
                </Carousel>
                <Carousel indicators={false}>
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D" alt="..." />
                    <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D" alt="..." />
                    <img src="https://images.unsplash.com/photo-1504270997636-07ddfbd48945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D" alt="..." />
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGlnaXRhbHxlbnwwfHwwfHx8MA%3D%3D" alt="..." />
                    <img src="https://images.unsplash.com/flagged/photo-1562599838-8cc871c241a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRpZ2l0YWx8ZW58MHx8MHx8fDA%3D" alt="..." />
                </Carousel>
            </div>
        </div>
    );
}
