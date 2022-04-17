import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import {useContext} from 'react'
import { GlobalContext } from '../../context/GlobalContext';

 function DoughnutChart() {
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
  const data = {
    label:["Red","Blue"],
    datasets:[{
      data:[income, expense],
      backgroundColor: [
        "red",
        "blue"
      ]
    }]
  }
  return (
    <div>
      <Doughnut data={data}/>
    </div>
  );
}

export default DoughnutChart;