import React, { useState } from 'react';
import { useOrder } from '../../../hooks/Order';

import { Container, DoughItem } from './styles';

const doughs = [
  {id: 1, name: 'grossa', doughHeight: 7},
  {id: 2, name: 'média', doughHeight: 5},
  {id: 3, name: 'fina', doughHeight: 2}
]

const Dough: React.FC = () => {
  const { updateOrder } = useOrder()
  const [selectedDough, setSelectedDough] = useState<null | number>(null)

  const handleSelectDough = (id: number) => {
    const targetDough = doughs.find(dough => dough.id === id)

    if(targetDough){
      setSelectedDough(id)
      updateOrder('dough', targetDough)
    }
  }

  return (
      <Container>
          <ul>
            {doughs.map(dough => (
              <DoughItem 
                selected={selectedDough === dough.id}
                onClick={() => handleSelectDough(dough.id)} 
                doughHeight={dough.doughHeight}
              >
                <p>Massa {dough.name}</p>
                <span />
              </DoughItem>
            ))}
          </ul>
      </Container>
  );
}

export default Dough;