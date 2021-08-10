import React from 'react'

function NestedComponent (){
    return (
        <div>
            <h1>
                this is parent component
            </h1>
            <child />
        </div>
    )
}
const child = () => {//this is child}
    return (
        <div>
            <h1>
                i am kid
            </h1>
        </div>
    )
}


export default NestedComponent
