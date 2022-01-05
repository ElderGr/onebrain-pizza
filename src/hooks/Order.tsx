import React, { createContext, useCallback, useContext, useState } from 'react'

import IDough from '../interfaces/IDough'
import IFlavor from '../interfaces/IFlavor'
import IUserInfo from '../interfaces/IUserInfo'


interface IOrder{
    flavor: IFlavor;
    dough: IDough;
    size: string;
    data: IUserInfo;
}

interface OrderContextData {
    order: IOrder;
    updateOrder(orderStep: string, orderValue: object | string): void;
    resetOrder(): void;
}

const orderInitialState = {
    flavor: {} as IFlavor,
    dough: {} as IDough,
    size: '' ,
    data: {} as IUserInfo
}

const OrderContext = createContext<OrderContextData>({} as OrderContextData)

export const OrderProvider: React.FC = ({ children }) => {
    const [data, setData] = useState(orderInitialState)

    const updateOrder = useCallback((orderStep, orderValue) => {
        setData({
            ...data,
            [orderStep]: orderValue
        })
    }, [data])

    const resetOrder = useCallback(() => {
        setData(orderInitialState)
    }, [])

    return (
        <OrderContext.Provider value={{ order: data, updateOrder, resetOrder }}>
            {children}
        </OrderContext.Provider>
    )
}

export function useOrder(): OrderContextData {
    const context = useContext(OrderContext)

    return context;
}