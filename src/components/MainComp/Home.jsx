import React from 'react'
import '../CSS/Home.css'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
import { SliderCarousel } from './Sections/Carousel'
import Section3 from './Sections/Section3'
import Section4 from './Sections/Section4'
import Sections5 from './Sections/Section5'
import Section6 from './Sections/Section6'
import Section7 from './Sections/Section7'
import Section8 from './Sections/Section8'
import Section9 from './Sections/Section9'
import { Carousel2 } from './Sections/Carousel2'
import Team from './Sections/Team'
import Map from './Sections/Map'
import FooterV from './Sections/Footer'
import Testimonials from './Sections/Testimonials'
import Testimonial2 from './Sections/Testimonial2'
import Nav from './Nav'



export default function Home(props) {
  return (

    <div>
     
      <Section1 />
      <Section2 />
      <SliderCarousel />
      <Section3 />
      <Section4 />
      <Sections5 />
      <Section6 />
      <Section8 bg="section8" />
      <Section9 />
      <Section8 bg="section9" />
      <Team />
      <Section8 bg="section10" />
      <Testimonial2 />
      <Map />
      <Carousel2 />
      <FooterV />




    </div>


  )
}
