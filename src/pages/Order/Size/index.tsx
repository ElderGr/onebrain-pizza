import React, { useState } from 'react';
import { useOrder } from '../../../hooks/Order';

import { Container, SizeOption } from './styles';

const Size: React.FC = () => {
  const { updateOrder } = useOrder()

  const [selectedSize, setSelectedSize] = useState<null | string>(null)

  const handleSelectSize = (size: string) => {
    updateOrder('size', size)
    setSelectedSize(size)
  }

  return (
      <Container>
          <ul>
            <SizeOption selected={selectedSize === 'P'} onClick={() => handleSelectSize('P')}>P</SizeOption>
            <SizeOption selected={selectedSize === 'M'} onClick={() => handleSelectSize('M')}>M</SizeOption>
            <SizeOption selected={selectedSize === 'G'} onClick={() => handleSelectSize('G')}>G</SizeOption>
          </ul>
      </Container>
  );
}

export default Size;