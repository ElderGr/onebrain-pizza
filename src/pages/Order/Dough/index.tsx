import React from 'react';
import { useOrder } from '../../../hooks/Order';

import { Container, DoughItem } from './styles';

const doughs = [
  {id: 1, name: 'grossa', doughHeight: 7},
  {id: 2, name: 'média', doughHeight: 5},
  {id: 3, name: 'fina', doughHeight: 2}
]

const Dough: React.FC = () => {
  const { updateOrder, order: { dough } } = useOrder()

  const handleSelectDough = (id: number) => {
    const targetDough = doughs.find(dough => dough.id === id)

    if(targetDough){
      updateOrder('dough', dough.id === id ? {} : targetDough)
    }
  }

  return (
      <Container>
          <ul>
            {doughs.map(mapDough => (
              <DoughItem 
                selected={dough.id === mapDough.id}
                onClick={() => handleSelectDough(mapDough.id)} 
                doughHeight={mapDough.doughHeight}
              >
                <p>Massa {mapDough.name}</p>
                <span />
              </DoughItem>
            ))}
          </ul>
      </Container>
  );
}

export default Dough;