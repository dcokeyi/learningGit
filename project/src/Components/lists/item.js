import React from "react";

const ListItem = (props) => {
    // console.log(props)
    const { price, thumbnail } = props;
    return (
        <div>
            <img src={thumbnail} alt="Product img" />
            <p>${price}</p>
        </div>
    )
}

export default ListItem