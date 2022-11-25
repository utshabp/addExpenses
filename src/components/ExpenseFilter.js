import React, { useEffect, useState } from "react";

const ExpenseFilter = ({ filterYearExpenses,clearFilterData }) => {
const [years,setYears] = useState([]);
const [isloading,setIsLoading] = useState(true)
  const dateFilter = (event) => {
    filterYearExpenses(event.target.value);
  };
  const dateYears = () => {
    let inititalYear = 2000;

    for (let i = inititalYear; i <=2050; i++) {
     if(i==2050){

       setIsLoading(false)
      }
       setYears(prev=>{
        return [...prev,i];
       })
      
    }
  };
  useEffect(()=>{
    dateYears()
  },[])
  console.log(years);
  return (
    <>
      <label>choose Year</label>
       <select  onClick={dateFilter}> 
        {
          !isloading?
          years.map(value=>{
            return <option value={value}>{value}</option>
          })
          :null
        }
     </select>
     <button onClick={clearFilterData}>Cancel</button>
    </>
  );
};

export default ExpenseFilter;
