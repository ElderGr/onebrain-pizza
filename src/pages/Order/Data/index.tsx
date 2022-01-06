import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../../../hooks/Order';
import { toast } from 'react-toastify'
import Button from '../../../components/Button'
import Input from '../../../components/Input'

import { Container } from './styles';

const Data: React.FC = () => {
  const navigate = useNavigate()
  const { updateOrder, order: { flavor, dough, size } } = useOrder()
  
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
    const errors = []
    try{
      if(!flavor.id) errors.push('Selecione um sabor')
      if (!dough.id) errors.push('Selecione um tipo de massa')
      if (!size) errors.push('Selecione um tamanho')
      
      if(!formValue.name) errors.push('Informe seu nome completo no formulário de dados')
      if(!formValue.address) errors.push('Informe seu endereço no formulário de dados')

      if(errors.length > 0)  throw Error('') 

      updateOrder('data', formValue)
      navigate('/success')
    }catch(err){
      errors.forEach(error => {
        toast.error(error)
      })
    }
  }, [dough.id, flavor.id, formValue, navigate, size, updateOrder])

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