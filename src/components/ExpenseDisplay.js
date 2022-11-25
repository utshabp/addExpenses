import React from 'react'

const ExpenseDisplay = ({title,amount,date}) => {
  return (
    <div className="displayExpense">
        <li>{title}</li>
        <li>{amount}</li>
        <li>{date}</li>
    </div>
  )
}

export default ExpenseDisplay