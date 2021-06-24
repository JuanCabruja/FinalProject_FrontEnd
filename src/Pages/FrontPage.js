import React from 'react'
import FrontCards from '../Components/FrontCard';

export default function FrontPage() {
  return (
    <>
        <div className="frontContentExpositor " >

          <div className="frontExpositorCard">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis ab laborum sed cum, eaque eligendi deleniti, nesciunt odit ducimus, pariatur facere aut veritatis? Vel enim aliquid, dolorum ut, molestiae cupiditate dolor aut exercitationem aspernatur ipsam natus quae laboriosam tempore aperiam hic inventore error autem! Quod facilis, impedit esse sequi eveniet quia placeat, porro obcaecati quis minima, optio vitae velit molestiae!

          </div>

          <div className="aquívaeltexto">
            <h1>Crea, Vende, Compra, Apoya</h1>
            <div className="Aquívandosbotones">
              <button>Explora</button>
              <button>Crea</button>
            </div>
          </div>

        </div>

        <div className="frontContentInformation bg-info p-3 d-flex justify-content-around">
          <div className="textContainer">
            <h2> Artesanos Exclusivos en SAFFO</h2>
          </div>

          <FrontCards />
          <FrontCards />
          <FrontCards />

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
