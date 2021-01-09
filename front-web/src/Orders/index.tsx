import './styles.css';
import StepHeader from './StepsHeader';
import ProductList from './ProductList';
import { useEffect, useState } from 'react';
import { OrderLocationData, Product } from './types';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';

function Orders() {

    const [products, setProducts] = useState<Product[]>([]);
    
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
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
                <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
            </h1>
        </div>
    )
}

export default Orders;