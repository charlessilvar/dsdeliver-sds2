import './styles.css';
import StepHeader from './StepsHeader';
import ProductList from './ProductList';
import { useEffect, useState } from 'react';
import { Product } from './types';
import { fetchProducts } from '../api';

function Orders() {

    const [products, setProducts] = useState<Product[]>([]);
     
    console.log(products);

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, []);
    
    return (
        <div>
            <h1 className="orders-container">
                <StepHeader />
                <ProductList products={products}/>
            </h1>
        </div>
    )
}

export default Orders;