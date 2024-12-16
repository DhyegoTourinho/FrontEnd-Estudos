import { useState, useEffect } from 'react'

const url = "http://localhost:3000/products";

import './App.css'

function App() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    async function getData() {

      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      setProducts(data);
    }
    getData();
  }, [])

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),

    });
    const addedProduct = await res.json();

    setProducts((prevProduct) => [...prevProduct, addedProduct])
    setName("");
    setPrice("");
  }

  return (
  <div className='App'>
    <h1>HTTP em React</h1>
    <ul>
      {products.map((product) => (
        <li key = {product.id}> {product.name} - R$ {product.price} </li>
      ))}
    </ul>
    <div className='add-product'>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input type='text' 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          placeholder='digite o nome do produto'></input>
        </label>
        <label>
          <span>Preço</span>
          <input type='text' 
          value={price} 
          onChange={(e) => setPrice(e.target.value)}
          placeholder='digite o preço do produto'></input>
        </label>
        <input type='submit' value="Enviar" className='submit'/>
      </form>
    </div>
  </div>
  )
}

export default App;
