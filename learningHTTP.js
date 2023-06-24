// Learning HTTP methods

// Put the URL we want to access
// GET (retrieve data)
// fetch("https://dummyjson.com/products/")
//     .then(response => console.log(response))
//     // First param is a key and the second is the obj we want to store.
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// POST (create data)
// fetch("https://dummyjson.com/products/add", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//         title: "Apple Pencil",
//     })
// })
//     .then(res => res.json())
//     .then(data => console.log(data))

// PUT (update data using PUT or PATCH)
// fetch("https://dummyjson.com/products/5", {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//         title: "Samsung Note 10",
//     })
// })
//     .then(res => res.json())
//     .then(data => console.log(data))

// Delete
fetch("https://dummyjson.com/products/10", {
    method: "DELETE"
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))


