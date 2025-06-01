import React from 'react'
import img1 from"../assets/images.jpg"
import img2 from"../assets/Loptop.jpg"
import img3 from"../assets/T-shirt.avif"
import "./Navebar.css"
 function Caroser() {
  return (
    <>
     <div id="carouselExampleIndicators"   style={{ height: '800px' }} class="carousel slide bg-dark nithish ">
      <div class="carousel-indicators ">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={img3} class="d-block h-100 w-100 img" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={img2} class="d-block h-100 w-100 img" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={img1} class="d-block h-100 w-100 img" alt="..."/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
        
        
        </>)
    }
    
    
//     </>
      
    
//   )
// }
export default  Caroser