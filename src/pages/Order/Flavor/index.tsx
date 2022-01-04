import React from 'react';
import { useOrder } from '../../../hooks/Order';

import { Container, FlavorItem } from './styles';

const flavors = [
  { id: 1 , name: 'marguerita', image:'../images/pizza2.png' },
  { id: 2 , name: 'portuguesa', image:'../images/pizza4.png' },
  { id: 3 , name: 'cogumelhos', image:'../images/pizza1.png' },
  { id: 4 , name: 'festiva', image:'../images/pizza3.png' },
  { id: 5 , name: 'rústica', image:'../images/pizza5.webp' }
]

const Flavor: React.FC = () => {
  const { updateOrder, order: { flavor } } = useOrder()

  const handleFlavorSelect = (id: number) => {
    const targetFlavor = flavors.find(flavor => flavor.id === id)

    if(targetFlavor){ 
      updateOrder('flavor', flavor.id === id ? {} : targetFlavor)
    }
  }

  return (
      <Container>
          <ul>
            {flavors.map(mapFlavor => (
              <FlavorItem 
                onClick={() => handleFlavorSelect(mapFlavor.id)} 
                image={mapFlavor.image}
                isSelected={mapFlavor.id === flavor.id}
              >
                {mapFlavor.name}
              </FlavorItem>
            ))}
          </ul>
      </Container>
  );
}

export default Flavor;