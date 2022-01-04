import React from 'react';
import { useOrder } from '../../../hooks/Order';

import { Container, SizeOption } from './styles';

const Size: React.FC = () => {
  const { updateOrder, order: { size } } = useOrder()


  const handleSelectSize = (paramSize: string) => {
    updateOrder('size', size === paramSize ? '' : paramSize)
  }

  return (
      <Container>
          <ul>
            <SizeOption selected={size === 'P'} onClick={() => handleSelectSize('P')}>P</SizeOption>
            <SizeOption selected={size === 'M'} onClick={() => handleSelectSize('M')}>M</SizeOption>
            <SizeOption selected={size === 'G'} onClick={() => handleSelectSize('G')}>G</SizeOption>
          </ul>
      </Container>
  );
}

export default Size;