import React from 'react'
import CardContainer from './CardContainer'

const Carosule = () => {
  return (
    <CardContainer>

    <div id="carouselExampleControls" class="carousel slide mt-3" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/340993fa504d1c6c.jpg?q=20" className='w-100 h-auto' alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/7cb077d10f067de1.jpeg?q=20" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20" class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  </CardContainer>
  )
}

export default Carosule
