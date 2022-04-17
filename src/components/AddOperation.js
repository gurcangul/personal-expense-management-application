import { clear } from '@testing-library/user-event/dist/clear';
import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext';

export const AddOperation = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [installment, setInstallment] = useState(1);

    const { addOperation } = useContext(GlobalContext);

    const clear = () => {
        setTitle('');
        setAmount(0);
        setInstallment(1);
      };

    const onSubmit = e => {
        e.preventDefault();
        const newOperation = {
          id: Math.floor(Math.random() * 100000000),
          title,
          amount: +amount,
          installment
        }
        clear();
        
        addOperation(newOperation);
      }
      const handleChange = (e) => {
       // let value = Array.from(e.target.selectedOptions, option => option.value);
       // this.setState({values: value});
       // setAmount({values: value})
        setAmount(e.target.value.split(",")[1])
        setTitle(e.target.value.split(",")[0])
        console.log(e.target.value.split(",")[0]);
        
      }
    return (
        <div className='addOperation'>
            <h3>Add Expense or Income</h3>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Title </label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter a title" />
                </div>

                <div>
                    <label>Amount </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}  />
                </div>
                <div>
                    <label>Installment </label>
                    <input type="number" value={installment} onChange={(e) => setInstallment(e.target.value)}  min="1"/>
                </div>
                

                    <br/>
                <div>
                    <label>Choose a current Income/Expense:</label>
                    <select  onChange={(e) => handleChange(e)}>
                        <option  value={["none", 0]} defaultValue>none</option>
                        <option value={["Salary", 1500]}> Salary = 1500$</option>
                        <option value={["phone bill", -20]}>Phone Bill = 20$</option>
                        <option value={["Electricity Bill ", -100]} >Electricity Bill = 100$</option>
                        <option value={["House rent", -300]}>House Rent 300$</option>
                        <option value={["Car rent", -200]}>Car Rent 200$</option>
                        
                    </select>
                </div>
                <button>Add </button>

            </form><button onClick={clear}>Clear </button>
        </div>
    )
}
