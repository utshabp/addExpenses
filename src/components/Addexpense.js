import React, { useState } from "react";

const Addexpense = ({ appendData }) => {
  //using the useSate hooks for seting the input value
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    appendData({ title, amount, date });
  };
  return (
    <div className="ExpenseForm">
      <p
        onClick={() => {
          setTitle("");
          setAmount("");
          setDate("");
        }}
      >
        Erase Data
      </p>
      <form onSubmit={submitHandler}>
        <label>ExpenseName:</label>
        <input
          value={title}
          onChange={titleChangeHandler}
          type="text"
          placeholder="enter expense"
        />

        <label>Amount:</label>
        <input
          value={amount}
          onChange={amountChangeHandler}
          type="number"
          
          placeholder="enter amount"
        />

        <label>
          Date:
          <input
            value={date}
            onChange={dateChangeHandler}
            type="date"
           
            placeholder="enter expense"
          />
        </label>

        <button type="submit" > Add Expense </button>
        
      </form>
    </div>
  );
};

export default Addexpense;
