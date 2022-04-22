import {useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';

export const Operation = ({ operation }) => {
  const { deleteOperation } = useContext(GlobalContext);

  const sign = operation.amount < 0 ? ' ' : '+';

  return (
    <li className='operation'>
      {operation.title} 
      <span>    installment:     {operation.installment}       </span><span>    amount: {sign}{operation.amount}</span>
      <span>     total:     {operation.installment*operation.amount}       </span>
      <button onClick={() => deleteOperation(operation.id)}>x</button>
    {console.log(operation.installment)}
    </li>
  )
}