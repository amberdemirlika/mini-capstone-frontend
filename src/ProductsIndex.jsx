export function ProductsIndex(props) {
  console.log(props.products);
  return (
    <div>
      <h1> All Products</h1>
      {props.products.map(product => (
        <div key = {product.id}>
          <p> {product.name}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <img src={product.image_url} />
          </div>
      ))}
    </div>
  );
}