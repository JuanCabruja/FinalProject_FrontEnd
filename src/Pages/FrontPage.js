import React from 'react'
import FrontCards from '../Components/FrontCards';
import { responsive } from '../config/carousel_config';

import './FrontPage.css';


// TODO: Abstraer esta lógica responsive a otro documento

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



export default function FrontPage() {
  return (
    <>
      <div className=" ">
        <div className="frontContentExpositor " >

          {/* TODO: Revisar si este FrontExpositorCard podría pasarlo a un componente */}
          <div className="frontExpositorCard ">
          </div>

          <div className="frontExpositorText ">
            <h1 className=" ">Crea, Vende. Compra, Apoya.</h1>
            <div className=" ">Descubre moda hecha por artesanos y diseñadores locales e internacionales</div>
            <div className="frontExpositorButtonArea">
              <div className="frontButton">Explora</div>
              <div className="frontButton">Crea</div>
            </div>
          </div>
        </div>
      </div>

      <div className="frontContentBanner1">
        <div className="titleContainer">
          <h2> Artistas exclusivos en SAFFO</h2>
        </div>
        <div className="banner1Carousel">
          
          {/* TODO: Para el carousel, tendré que hacer un punto de la API o un FETCH que pida CREATORS */}
            <div className="carouselController">
              <Carousel swipeable={false} responsive={responsive} showDots={false} transitionDuration={1000} infinite={true} containerClass="carousel-container"
              itemClass="carousel-item"
              // draggable={false}
              // ssr={true} // means to render carousel on server-side.
              //  autoPlay={this.props.deviceType !== "mobile" ? true : false} autoPlaySpeed={1000} keyBoardControl={true}
              //  removeArrowOnDeviceType={["tablet", "mobile"]} customTransition="all .5"
              // deviceType={this.props.deviceType} dotListClass="custom-dot-list-style"
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
      </div>

      <div className="frontContentBanner2">
        <div className="titleContainer">
          <h2> Trending en SAFFO</h2>
        </div>
        <div className="banner1Carousel">
          {/* TODO: Para el carousel, tendré que hacer un punto de la API o un FETCH que pida CREATORS */}
            <div className="carouselController">
              <Carousel swipeable={false} responsive={responsive} showDots={false} transitionDuration={1000} infinite={true} containerClass="carousel-container"
              itemClass="carousel-item"
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

      </div>

      <div className="frontContainerBanner3" >

        <div className="banner3Title">
          <h1>¿Que es SAFFO?</h1>
        </div>

        <div className="banner3SubTitle">
          <h2>Crea, Vende. Compra, Apoya.</h2>
        </div>
        <div className="banner3Info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa provident fugit quod ipsum beatae explicabo dolores tenetur 
          exercitationem possimus perspiciatis, necessitatibus voluptas iure, officiis tempora doloribus voluptatem. Nihil veritatis quis
          enim non sapiente autem, alias cumque facere ducimus temporibus, deserunt voluptatem possimus aspernatur totam numquam! Quibusdam 
          eum harum quasi porro.
        </div>
      </div>
    </>
  )
}
