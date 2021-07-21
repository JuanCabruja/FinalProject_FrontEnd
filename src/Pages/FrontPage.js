import { useState, useEffect } from "react";
import  FrontCardCreators from "../Components/FrontCardCreators";
import CollectionCard from "../Components/CollectionCard";
import { responsive } from "../config/carousel_config";
import { USER_URL, COLLECTION_URL } from "../config/config";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./FrontPage.css";

export default function FrontPage() {

  const [creators, setCreators] = useState([]);
  const [collections, setCollections] = useState([]);

  const getAssets = async (isMounted) => {

    if (isMounted) {
    const response = await fetch(USER_URL + "creators");
    const creators = await response.json();
    setCreators(creators.results);

    const res = await fetch(COLLECTION_URL);
    const collections = await res.json();
    setCollections(collections.collection);
  }
  };
  
  


  useEffect(() => {
    let isMounted = true;
   getAssets(isMounted);
    return () => {};
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="frontContentExpositor ">
    
          <div className="frontExpositorCard "></div>

          <div className="frontExpositorText ">
            <h1 className=" ">Crea, Vende. Compra, Apoya.</h1>
            <div className=" ">
              Descubre moda hecha por diseñadores exclusivos locales e
              internacionales
            </div>
            <div className="frontExpositorButtonArea">
              <div className="frontButton">Explora</div>
              <div className="frontButton">Crea</div>
            </div>
          </div>
        </div>


      <div className="frontContentBanner1">

        <div className="titleContainer">
          <h2> Artistas exclusivos en SAFFO</h2>
        </div>

        <div className="banner1Carousel">
          <div className="carouselController">

            <Carousel
              swipeable={false}
              responsive={responsive}
              showDots={false}
              transitionDuration={1000}
              infinite={true}
              containerClass="carousel-container"
              itemClass="carousel-item"
              //  customTransition="all .5"
             
            >
               {creators === [] ? (
                <></>
              ) : (
                creators?.map((creator) => (
                  <FrontCardCreators
                    item={creator} key={creator.username}
                  />
                ))
              )}
            </Carousel>

          
          </div>
        </div>
      </div>

      <div className="frontContentBanner2">
        <div className="titleContainer">
          <h2> Trending en SAFFO</h2>
        </div>
        <div className="banner1Carousel">
          <div className="carouselController">
            <Carousel
              swipeable={false}
              responsive={responsive}
              showDots={false}
              transitionDuration={1000}
              infinite={true}
              containerClass="carousel-container"
              itemClass="carousel-item"
            >
              {collections.map(item => 
              <CollectionCard item={item} key={item.author.username} />)}
        
      
            </Carousel>
          </div>
        </div>
      </div>

      <div className="frontContainerBanner3">
        <div className="banner3Title">
          <h1>¿Que es SAFFO?</h1>
        </div>

        <div className="banner3SubTitle">
          <h2>Crea, Vende. Compra, Apoya.</h2>
        </div>
        <div className="banner3Info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          provident fugit quod ipsum beatae explicabo dolores tenetur
          exercitationem possimus perspiciatis, necessitatibus voluptas iure,
          officiis tempora doloribus voluptatem. Nihil veritatis quis enim non
          sapiente autem, alias cumque facere ducimus temporibus, deserunt
          voluptatem possimus aspernatur totam numquam! Quibusdam eum harum
          quasi porro.
        </div>
      </div>
    </>
  );
}
