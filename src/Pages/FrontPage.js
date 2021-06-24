import React from 'react'
import FrontCards from '../Components/FrontCards';

import './FrontPage.css';


// TODO: Abstraer esta lógica responsive a otro documento

import  Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export default function FrontPage() {
  return (
    <>
        <div className=" ">
          <div className="frontContentExpositor " >

            {/* TODO: Revisar si este FrontExpositorCard podría pasarlo a un componente */}
            <div className="frontExpositorCard ">
            </div>

            <div className="frontExpositorText ">
              <h1 className=" ">Crea, Vende, Compra, Apoya</h1>
              <div className=" ">Descubre moda hecha por artesanos y diseñadores locales </div>
              <div className="frontExpositorButtonArea">
                <div className="frontButton">Explora</div>
                <div className="frontButton">Crea</div>
              </div>
            </div>
          </div>
        </div>

        <div className="frontContentBanner1">
          <div className="titleContainer">
            <h2> Artesanos Exclusivos en SAFFO</h2>
          </div>
          <div className="banner1Carousel">
           
              
              {/* TODO: Para el carousel, tendré que hacer un punto de la API o un FETCH que pida CREATORS */}
            <Carousel  swipeable={false} responsive={responsive} showDots={true} transitionDuration={1000} infinite={true} containerClass="carousel-container"
            
            // draggable={false}  
            // ssr={true} // means to render carousel on server-side. 
            //  autoPlay={this.props.deviceType !== "mobile" ? true : false} autoPlaySpeed={1000} keyBoardControl={true}
            //  removeArrowOnDeviceType={["tablet", "mobile"]} customTransition="all .5"
            // deviceType={this.props.deviceType} dotListClass="custom-dot-list-style" itemClass="carousel-item-padding-40-px"
           >

              <FrontCards />
              <FrontCards />
              <FrontCards />
              <FrontCards />
              <FrontCards />
              <FrontCards />
              <FrontCards />
              <FrontCards />
              <FrontCards />
              <FrontCards />
              <FrontCards />
              <FrontCards />


            </Carousel>
          </div>

        </div>

        <div className="topSellers bg-success p-3" >

          <h2> Área TOP SELLERS</h2>

        </div>

        <div className="explore bg-warning p-3" > 

        <h2> Link, alguno de los dos productos que ya estén subidos</h2>


        </div>
      </>
  )
}
