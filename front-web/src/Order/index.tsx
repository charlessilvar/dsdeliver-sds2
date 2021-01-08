import './styles.css';
import { ReactComponent as Logo } from './logo.svg';
import StepHeader from '../StepsHeader';
function Orders() {
    return (
        <div>
            <h1 className="orders-container">
                <StepHeader/>
            </h1>            
        </div>
    )
}

export default Orders;