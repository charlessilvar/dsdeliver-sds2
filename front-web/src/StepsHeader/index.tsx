
function StepHeader(){
    return (
        <header className="order-steps-container">
            <div className="orders-steps-content">
                <h1 className="steps-title">
                    SIGA AS <br/> ETAPAS
                </h1>
                <ul>
                    <li>
                        <span className="steps-number">1</span>
                        Selecione os produtos e localização
                    </li>                    
                    <li>
                        <span className="steps-number">2</span>
                        Depois é só enviar <strong>PEDIDO</strong>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default StepHeader;