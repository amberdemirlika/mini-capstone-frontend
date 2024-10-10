import {ProductsIndex} from './ProductsIndex';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {ProductsNew} from './ProductsNew';


export function ProductsPage() {
  const [products, setProducts] = useState([])

  const handleProductsIndex = () => {
    console.log('in products index')
    axios.get("http://localhost:3000/products.json").then(response => {
      console.log(response.data)
      setProducts(response.data)
    })
  }

     const handleCreate = (params, successCallback) => {
         console.log("handleCreate", params);
         axios.post("http://localhost:3000/products.json", params).then((response) => {
           setProducts([...products, response.data]);
           successCallback();
         });
       };
  useEffect(handleProductsIndex, [])

  return (
    <main>
      <ProductsNew onCreate={handleCreate}/>
      <ProductsIndex products={products}/>
    </main>
  )
}