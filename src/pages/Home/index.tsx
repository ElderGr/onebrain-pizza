import React, { useCallback } from 'react';
import { Container } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import { useOrder } from '../../hooks/Order';

function Home () {
    const { recommendation, order } = useOrder()
    const location = useNavigate()

    const handleRecommendation = useCallback(() => {
        recommendation()
        location('/order/data')
    }, [location, recommendation])

    return (
        <Container>
            <h1>Peça sua Pizza</h1>
            <div>
                <Link to='order/flavor'>montar pedido</Link>
                
                <span onClick={handleRecommendation}>pedir pizza do dia</span>
                <div>
                    <span>marguerita</span>
                    <span>tamanho médio</span>
                        <span>massa fina</span>
                    </div>
                </div>
        </Container>
    );
}

export default Home;