import React from 'react'
import { OrderProvider } from './Order'

const AppProvider: React.FC = ({ children }) => (
    <OrderProvider>{children}</OrderProvider>
)

export default AppProvider