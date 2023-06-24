import React, { useState, useEffect } from "react";
import products from "./data";
import Card from "./card";
import axios from "axios";
import ListItem from "./item";

const List = () => {
    // Rendering lists using axios
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(res => console.log(res))
            // .then(res => setItems(res.data.products))
            // .then(console.log(items))
            .catch(error => console.log(error))
    }, [])

    // const renderCardFromAxios = items.map((item, id) => <Card key={id} {...item} />)

    // Using a data file
    // const renderCard = products.map((item, id) => <Card key={id} {...item} />)
    const renderCard = products.map((item, id) => <ListItem key={id} {...item} />)


    // rendering lists using for loop
    // const renderCardLoop = () => {
    //     for (let i = 0; i <= products.length; i++) {
    //         return (
    //             <Card key={i} products={products[i]} />
    //         )
    //     }
    // }
    return (
        <div>
            <h1>Learning List</h1>
            {renderCard}
            {/* {renderCardLoop()} */}
            {/* {renderCardFromAxios} */}
        </div>
    )
}

export default List;