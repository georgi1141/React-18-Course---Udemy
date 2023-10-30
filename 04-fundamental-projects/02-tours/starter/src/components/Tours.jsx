import React from 'react'
import Tour from './Tour'


function Tours({tours,removeTour}) {


    return (
      <section className='title'>
          <h2>Our Tours</h2>
          <div className='title-inderline'></div>
          <div className='tours'>
              {tours.map((tour)=>{
                  return( <Tour key={tour.id} tour={tour} removeTour={removeTour}/> )
              })}
          </div> 
      </section>
    )
  }

export default Tours