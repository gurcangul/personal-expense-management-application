import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalContext'

export const Total = () => {
  const {operations} = useContext(GlobalContext);

  const amounts = operations.map(operation =>operation.amount*operation.installment);
  const total = amounts.reduce((acc,item)=>(acc +=item),0).toFixed(2);

  return (
    <div className='total'>
        <h1 >Total</h1>
        <h2>₺{total}</h2>
    </div>
  )
}
