import React, { useState } from "react";
import "./main.css"

// function HelloWorld(props) {
//     //learning usestate
//     const [count, setCount] = useState(0);
//     const [isShowing, setIsShowing] = useState(true)

//     //handleClick
//     const handleClick = () => {
//         setCount(count + 1)
//     }

//     function handleShow() {
//         setIsShowing(!isShowing)
//     }

//     console.log(isShowing)

//     // and &&
//     // or ||

//     return (
//         <div>
//             {/* <h1>Hello {props.message}!</h1> */}
//             <h1>Learning functional Components</h1>
//             {isShowing && <p>Current count is {count}</p>}
//             <button onClick={handleClick}>Increase Count</button>
//             <button onClick={handleShow}>Show Count</button>
//         </div>
//     )
// }

const HelloWorld = (props) => {
    //learning usestate
    const [count, setCount] = useState(0);
    const [isShowing, setIsShowing] = useState(true)

    //handleClick
    const handleClick = () => {
        setCount(count + 1)
    }

    function handleShow() {
        setIsShowing(!isShowing)
    }

    // console.log(isShowing)

    // and &&
    // or ||

    return (
        <div>
            {/* <h1>Hello {props.message}!</h1> */}
            <h1 className="title">Learning functional Components</h1>
            {isShowing && <p>Current count is {count}</p>}
            <button onClick={handleClick}>Increase Count</button>
            <button onClick={handleShow}>Show Count</button>
        </div>
    )
}

export default HelloWorld;