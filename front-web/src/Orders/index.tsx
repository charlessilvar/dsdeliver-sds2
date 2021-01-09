import './styles.css';
import StepHeader from './StepsHeader';
import ProductList from './ProductList';
import { useEffect } from 'react';
function Orders() {
    
    useEffect(() => {
        
        //console.log('components orders inicou');
    },[]);
    
    return (
        <div>
            <h1 className="orders-container">
                <StepHeader />
                <ProductList/>
            </h1>
        </div>
    )
}

export default Orders;