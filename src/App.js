import { useEffect, useState } from 'react';

const PRODUCTS_API_HOST =
  process.env.REACT_APP_PRODUCTS_API_HOST || '192.168.204.132';
const PRODUCTS_API_PORT = process.env.REACT_APP_PRODUCTS_API_PORT || '8000';

const url = `http://${PRODUCTS_API_HOST}:${PRODUCTS_API_PORT}/api/products`;

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <>
      <div className='alert alert-primary'>
        <div className='container'>
          <h1>Products Catalog</h1>
        </div>
      </div>
      <div className='container'>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
