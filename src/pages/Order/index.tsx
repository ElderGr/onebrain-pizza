import React, {useEffect, useState} from 'react';
import { Outlet, useLocation } from 'react-router-dom'
import { useOrder } from '../../hooks/Order';

import { Container, MenuItem } from './styles'

const Order: React.FC = () => {
  const location = useLocation()
  const { order } = useOrder()

  const [ menuItem, setMenuItem ] = useState('')

  useEffect(() => {
    const formatedValue = location.pathname.split('/')
    setMenuItem(formatedValue[2])
  }, [location.pathname])

  return(
      <Container>
          <h1>Monte sua pizza</h1>
         
          <div>
            <ul>
              <li>
                <MenuItem active={menuItem === 'flavor'} to='/order/flavor'>Sabor <span>{order.flavor.name}</span></MenuItem>
              </li>
              <li>
                <MenuItem active={menuItem === 'dough'} to='/order/dough'>Massa <span>{order.dough.name}</span></MenuItem>
              </li>
              <li>
                <MenuItem active={menuItem === 'size'} to='/order/size'>Tamanho <span>{order.size}</span></MenuItem>
              </li>
              <li>
                <MenuItem active={menuItem === 'data'} to='/order/data'>Dados</MenuItem>
              </li>
            </ul>
            <Outlet />
          </div>
      </Container>
  );
}

export default Order;