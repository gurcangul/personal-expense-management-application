import {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext';

export const IncomeExpenseInfo = () => {

  const {operations} = useContext(GlobalContext);

  const amounts = operations.map(operation => operation.amount);
  
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className='IncomeExpenseInfo'>
        <div>
            <h4>Income</h4>
            <p>Income total: {income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p>Expense total: -{expense}</p>
        </div>
    </div>
  )
}
