import React,{useState,useEffect} from 'react'

const TotalOutput = ({trans}) => {
  let [expense,setExpense] = useState(0);
  let [income,setIncome] = useState(0);

  useEffect(()=>{
     expense=0
     income=0;
    trans.map((item) => {
      if (item.radio === "income") {
         income = income + parseInt(item.amount);
         setIncome(income);

      } else if (item.radio === "expense") {
        expense = expense + parseInt(item.amount);
        setExpense(expense);

      }
    });
  },[trans])

  return (
    <>
         <div className='totalOutput flex items-center justify-between text-center my-4'>
            <div className=' p-2 w-1/2 border-2  border-gray-200'>
                <h2>Expense</h2>
                <span className='text-lg text-red-600 font-bold' >${expense}</span>
            </div>

            <div className=' p-2  w-1/2  border-2 border-gray-200'>
                <h2>Amount</h2>
                <span className='text-lg text-green-600 font-bold'>${income}</span>
            </div>
        </div>
    </>
  )
}

export default TotalOutput