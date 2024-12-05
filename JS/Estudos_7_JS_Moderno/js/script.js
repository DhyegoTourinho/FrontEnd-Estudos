//map
const products = [
    {name: "Camisa", price: 10.99, category: "Roupas"},
    {name: "Lixeira", price: 10.99, category: "Utencilhos"},
    {name: "Maquina de lavar", price: 10.99, category: "Eletro"},
    {name: "Tênis", price: 10.99, category: "Roupas"},
]

products.map((product) => {
    if (product.category === "Roupas"){
        product.onSale = true;
    }
})

console.log(products)