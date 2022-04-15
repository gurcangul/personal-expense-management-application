import React from 'react'

export const AddOperation = () => {
  return (
    <div>
        <h3>AddOperation</h3>
        <form>
            <div>
                <label>Text </label>
                <input type="text" placeholder="Enter a title" />
            </div>

            <div>
                <label>Amount </label>
                <input type="number" placeholder="Enter an amount"/>
            </div>
                <br/>
            <div>
                <label>Choose a current Income/Expense:</label>
                <select id="IncomeExpenseList" name="IncomeExpenseList">
                    <option selected value="none">none</option>
                    <option value="salary">Maaş = 1500$</option>
                    <option value="phoneBill">Phone Bill = 20$</option>
                    <option value="electricityBill" >Electricity Bill = 100$</option>
                    <option value="houseRent">House Rent 300$</option>
                </select>
            </div>
            <button>Add </button>

      </form>
    </div>
  )
}
