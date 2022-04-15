import './App.css';
import { AddOperation } from './components/AddOperation';
import { IncomeExpenseInfo } from './components/IncomeExpenseInfo';
import { IncomeExpenseList } from './components/IncomeExpenseList';
import {Total} from './components/Total'

function App() {
  return (
    <div className="App">
      <h1>Personal Expense Management Application</h1>
      <Total></Total>
      <IncomeExpenseList></IncomeExpenseList>
      <AddOperation/>
      <IncomeExpenseInfo/>
    </div>
  );
}

export default App;
