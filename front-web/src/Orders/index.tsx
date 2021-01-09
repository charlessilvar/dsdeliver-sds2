import './styles.css';
import StepHeader from './StepsHeader';
import ProductList from './ProductList';
import { useEffect, useState } from 'react';
import { OrderLocationData, Product } from './types';
import { fetchProducts, saveOrder } from '../api';
import OrderLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import { checkIsSelected } from './helpers';
import { toast, ToastContainer } from 'react-toastify';

function Orders() {

    const [products, setProducts] = useState<Product[]>([]);
    //estado para todos os produtos selecionado
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    //recuperando total pedido
    const totalPrice = selectedProducts.reduce((sum, item) => {
        return sum + item.price;
    }, 0);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    console.log(products);

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => {
                toast.warning("Erro ao listar produtos");
                }
                //console.log(error)
            )
    }, []);

    //estado para todos os produtos selecionado - event
    const handleSelectProduct = (product: Product) => {
        //checkIsSelected from helpers
        const isAlreadySelected = checkIsSelected(selectedProducts, product) //selectedProducts.some(item => item.id === product.id);

        if (isAlreadySelected) {
            const selected = selectedProducts.filter(item => item.id !== product.id);
            setSelectedProducts(selected);
        } else {
            setSelectedProducts(previous => [...previous, product]);
        }
    }
    //necessario ao OrderSummary
    const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
            ...orderLocation!,
            products: productsIds
        }

        saveOrder(payload)
            .then((response) => {
                toast.error(`Pedido enviado com sucesso! N° ${response.data.id}`);
                setSelectedProducts([]);
            })
            .catch(() => {
                toast.warning('Erro ao enviar pedido');
            })
    }
    return (
        <div>
            <h1 className="orders-container">
                <StepHeader />
                <ProductList
                    products={products}
                    onSelectProduct={handleSelectProduct}
                    selectedProducts={selectedProducts}
                />
                <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
                <OrderSummary
                    amount={selectedProducts.length}
                    totalPrice={totalPrice}
                    onSubmit={handleSubmit} />
            </h1>
        </div>
    )
}

export default Orders;