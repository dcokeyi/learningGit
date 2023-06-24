import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [id, setId] = useState()
    const [product, setProduct] = useState("")
    const [status, setStatus] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()
        // axios.post("https://dummyjson.com/products/add", {
        //     title: product
        // })
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))

        // axios.put(`https://dummyjson.com/products/${id}`, {
        //     title: product
        // })
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))

        axios.delete(`https://dummyjson.com/products/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>ID</label>
            <input
                type='number'
                name='id'
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <button>delete</button>
            {/* <label>Add Product</label>
            <input
                type='text'
                name='product'
                value={product}
                onChange={(e) => setProduct(e.target.value)}
            />
            <button type="submit">Add</button> */}
        </form>
    )
};

export default ProductForm;