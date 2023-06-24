import React from "react";

const Card = (props) => {
    // console.log(props)
    const { title, description, price, thumbnail } = props;
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{price}</p>
            <img src={thumbnail} alt="Product img" />
        </div>
    )
}

export default Card