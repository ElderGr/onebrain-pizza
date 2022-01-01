import React, { useState } from 'react';

import { Container, FlavorItem } from './styles';

const flavors = [
  { id: 1 , name: 'marguerita', image:'../images/pizza2.png' },
  { id: 2 , name: 'portuguesa', image:'../images/pizza4.png' },
  { id: 3 , name: 'cogumelhos', image:'../images/pizza1.png' },
  { id: 4 , name: 'festiva', image:'../images/pizza3.png' },
  { id: 5 , name: 'rústica', image:'../images/pizza5.webp' }
]

const Flavor: React.FC = () => {
  const [selectedFlavor, setSelectedFlavor] = useState<number | null>(null)

  const handleFlavorSelect = (id: number) => {
    setSelectedFlavor(id === selectedFlavor ? null : id)
  }

  return (
      <Container>
          <ul>
            {flavors.map(flavor => (
              <FlavorItem 
                onClick={() => handleFlavorSelect(flavor.id)} 
                image={flavor.image}
                isSelected={selectedFlavor === flavor.id}
              >
                {flavor.name}
              </FlavorItem>
            ))}
          </ul>
      </Container>
  );
}

export default Flavor;