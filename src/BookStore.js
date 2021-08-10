import React from'react'
import './index.css'
const FirstCar={
img:"stefan-rodriguez-2AovfzYV3rc-unsplash.jpg",
brand:'Cheverolet',
 speed:"300"
}
   const SecondCar={
       img:'dhiva-krishna-YApS6TjKJ9c-unsplash.jpg',
       brand:'mercedez',
       speed:"250"
   
}
const ThirdCar={
    img:"viktor-theo-aIDkOU7eGgo-unsplash.jpg",
    brand:'buggati',
    speed:"450"
}
function BookStore()
{
    return(
        <section className="booklist">
            <Book img={FirstCar.img} brand={FirstCar.brand} speed={FirstCar.speed} />
            <Book img={SecondCar.img} brand={SecondCar.brand} speed={SecondCar.speed}></Book>
            <Book img={ThirdCar.img} brand={ThirdCar.brand} speed={ThirdCar.speed}></Book>
        </section>
    )
}
const Book=({img,brand,speed})=>{
    return <article className='Book'>
       <img src={img} height='250' width='500'></img>
       <h1>{brand}</h1>
       <h2>{speed}</h2>
    </article>
}


const Speed=()=><h2 style={{color:'#a632a8',fontsize:'0.75rem',marginTop:"0.25rem"}}>speed</h2>
export default BookStore