import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../../../hooks/Order';

import { Container, Input, Button } from './styles';

const Data: React.FC = () => {
  const navigate = useNavigate()
  const { updateOrder } = useOrder()
  
  const [formValue, setFormValue] = useState({
    name: '',
    address: ''
  })

  const handleFormValue = useCallback((e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    })
  }, [formValue])

  const handleSubmit = useCallback(() => {
    updateOrder('data', formValue)
    navigate('/success')
  }, [formValue])

  return (
      <Container>
          <Input name='name' value={formValue.name} onChange={handleFormValue} placeholder='Nome Completo' />
          <Input name='address' value={formValue.address} onChange={handleFormValue} placeholder='Endereço' />

          <div>
            <span>Preço: R$XX,XX</span>
            <span>(pagar na entrada)</span>
          </div>

          <Button onClick={handleSubmit}>
            Finalizar Pedido
          </Button>
      </Container>
  );
}

export default Data;