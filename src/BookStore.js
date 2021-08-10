import React from'react'
import './index.css'
function BookStore()
{
    return(
        <section className="booklist">
            <h1>this is my first page</h1>
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
const Img=()=>{
    return<img src="stefan-rodriguez-2AovfzYV3rc-unsplash.jpg" alt="this is car image" width="500" height="500"></img>
}
const Company=()=><h1>Cheverolet</h1>

const Speed=()=><h1>300</h1>
export default BookStore