import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../../hooks/Order';

import { Container, Divisors } from './styles';
import Button from '../../components/Button'

const Success: React.FC = () => {
    const { order: { size, data, flavor, dough } } = useOrder()
    const navigate = useNavigate()

    return (
        <Container>
            <div>
                <h1>Pedido feito com sucesso!</h1>
                <h2>Detalhes</h2>
                
                <Divisors />
                <div>
                    <span>Nome:</span>
                    <p>{data.name}</p>
                </div>
                <div>
                    <span>Endereço:</span>
                    <p>{data.address}</p>
                </div>

                <Divisors />
                <div>
                    <span>Sabor:</span>
                    <p>{flavor.name}</p> 
                </div>
                <div>
                    <span>Massa:</span>
                    <p>{dough.name}</p>
                </div>
                <div>
                    <span>Tamanho:</span>
                    <p>{size}</p>
                </div>

                <Button onClick={() => navigate('/')}>OK!</Button>
            </div>

        </Container>
    );
}

export default Success;