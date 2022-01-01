import React from 'react';
import { Container } from './styles'
import { Link } from 'react-router-dom'


function Home () {
    return (
        <Container>
            <h1>Peça sua Pizza</h1>
            <div>
                <Link to='order'>montar pedido</Link>
                
                <Link to='sucess'>pedir pizza do dia</Link>
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