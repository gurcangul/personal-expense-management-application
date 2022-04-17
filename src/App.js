import './App.css';
import { AddOperation } from './components/AddOperation';
import { Graph } from './components/Graph';
import { IncomeExpenseInfo } from './components/IncomeExpenseInfo';
import { IncomeExpenseList } from './components/IncomeExpenseList';
import { Prediction } from './components/Prediction';
import {Total} from './components/Total'

import {GlobalProvider} from './context/GlobalContext'

function App() {
  return (
    <div className="App">      

      <GlobalProvider>
        <h1 className='header'>Personal Expense Management Application</h1>
        <div className='content'>
        <Total></Total><br/>
        <IncomeExpenseList></IncomeExpenseList><br/>
        <AddOperation/><br/>
        <div className='sub-div'> 
        <IncomeExpenseInfo/>
        <Graph/>
        <div className='prediction'> 
        <Prediction /></div>
        </div>
        </div>
      </GlobalProvider>

    </div>
  );
}

export default App;
