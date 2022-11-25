import logo from "./logo.svg";
import "./App.css";
import Addexpense from "./components/Addexpense";
import { useState } from "react";
import ExpenseDisplay from "./components/ExpenseDisplay";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [data, setData] = useState([]);
  const [filteredYearData, setFilteredYearData] = useState([]);

  const appendData = (value) => {
    setData((prev) => {
      return [
        ...prev,
        {
          title: value.title,
          amount: value.amount,
          date: value.date,
        },
      ];
    });
  };
  // console.log(data[0]?.date.split("-"));
  // console.log(data[0]?.date);
  const filterYearExpenses = (selectedYear) => {
    let _data = data.filter((value) => {
      return value.date.split("-")[0] === selectedYear;
      
    });
    console.log(_data);
    setFilteredYearData(_data);
    // console.log("in app.js");
    // console.log(selectedYear);
  };
  const clearFilterData =()=>{
    setFilteredYearData([]);
    // console.log("in appd")
  }
  console.log(filteredYearData.length);

  return (
    <div className="addexpenseModule">
      <h1> Add Expense App</h1>
      <Addexpense appendData={appendData} />
      <ExpenseFilter filterYearExpenses={filterYearExpenses} clearFilterData={clearFilterData} />
      {filteredYearData.length > 0
        ? filteredYearData.map((value) => {
            return (
              <ExpenseDisplay
                title={value.title}
                amount={value.amount}
                date={value.date}
              />
            );
          })
        : data.map((value) => {
            return (
              <ExpenseDisplay
                title={value.title}
                amount={value.amount}
                date={value.date}
              />
            );
          })}
    </div>
  );
}

export default App;
