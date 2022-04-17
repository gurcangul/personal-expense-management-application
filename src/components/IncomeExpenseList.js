import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Operation } from './Operation';

export const IncomeExpenseList = () => {
  const { operations } = useContext(GlobalContext);
  
  return (    
    <div className='IncomeExpenseList'>
        <h3>Income and Expense List </h3>
        <ul>
            {operations.map(operation => (<Operation key={operation.id} operation={operation} />))}
        </ul>
    </div>
  )
}
