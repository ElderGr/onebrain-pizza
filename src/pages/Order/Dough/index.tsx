import React, { useState } from 'react';

import { Container, DoughItem } from './styles';

const doughs = [
  {id: 1, name: 'Massa grossa', doughHeight: 7},
  {id: 2, name: 'Massa média', doughHeight: 5},
  {id: 3, name: 'Massa fina', doughHeight: 2}
]

const Dough: React.FC = () => {
  
  const [selectedDough, setSelectedDough] = useState<null | number>(null)

  const handleSelectDough = (id: number) => {
    setSelectedDough(id)
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
                <p>{dough.name}</p>
                <span />
              </DoughItem>
            ))}
          </ul>
      </Container>
  );
}

export default Dough;