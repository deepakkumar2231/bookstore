import React from'react'
import './index.css'
function BookStore()
{
    return(
        <section className="booklist">
            <Book />
            <Book />
            <Book />
        </section>
    )
}
const Book=()=>{
    return <article>
        <Img></Img>
        <Company></Company>
        <Speed></Speed>
    </article>
}
const Img=()=><img src="stefan-rodriguez-2AovfzYV3rc-unsplash.jpg" alt="this is car image" width="500" height="500"></img>
const Company=()=><h1 style={{color:'#32a852',fontsize:'0.75rem',marginTop:"0.25rem"}}>Cheverolet</h1>

const Speed=()=><h2 style={{color:'#a632a8',fontsize:'0.75rem',marginTop:"0.25rem"}}>300</h2>
export default BookStore