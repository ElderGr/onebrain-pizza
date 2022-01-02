import React, { useCallback, useState } from 'react';

import { Container, Input, Button } from './styles';

const Data: React.FC = () => {
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
    console.log(formValue)
  }, [formValue])

  return (
      <Container>
          <Input value={formValue.name} onChange={handleFormValue} placeholder='Nome Completo' />
          <Input value={formValue.address} onChange={handleFormValue} placeholder='Endereço' />

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