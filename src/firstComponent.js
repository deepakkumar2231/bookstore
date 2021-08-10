import React from "react";
import { render } from "react-dom";


function FirstComponent() {
    return (
        <React.Fragment>
            <div>
                <h3>
                    This is my first component
                </h3>
                <img src="stefan-rodriguez-2AovfzYV3rc-unsplash.jpg" alt="this is car image" width="500" height="500"></img>
            </div>
        </React.Fragment>
    )
}
export default FirstComponent