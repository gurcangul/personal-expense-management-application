import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext';

export const Prediction = () => {
    const {operations} = useContext(GlobalContext);

    const amounts = operations.map(operation =>operation.amount);
    const total = amounts.reduce((acc,item)=>(acc +=item),0).toFixed(2);
    const d = new Date();
    
  return (
    <div>
        <h4>Prediction</h4>
        <p>Next Month: You have ${total} </p>
        <p> if you spend and earn income in this way every month// End of the year: You have ${total*(12-d.getMonth()) } </p>


    </div>
  )
}
