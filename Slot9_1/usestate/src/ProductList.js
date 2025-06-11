import React, {useState} from 'react';

function ProductList(){
  const [products, setProducts] = useState([
    { id: 1, name: 'San pham A' },
    { id: 2, name: 'San pham B' },
    { id: 3, name: 'San pham C' },
  ]);

  const [selectedProduct, setSelectedProduct] = useState([]);

  const handleCheckboxChange = (event) => {
   const productId = parseInt(event.target.value, 10);
    if (event.target.checked) {
      setSelectedProduct([...selectedProduct, productId]);
    } else {
      setSelectedProduct(selectedProduct.filter(id => id !== productId));
    }
  }
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <input
            type="checkbox"
            value={product.id}
            checked={selectedProduct.includes(product.id)}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={product.id}>{product.name}</label>
         
        </div>
      ))}

      {selectedProduct.length > 0 && (
        <p>Ban da chon san pham: {selectedProduct.map(id => products.find(p => p.id).name).join(', ')}</p>)}
    </div>
  );
}
export default ProductList;