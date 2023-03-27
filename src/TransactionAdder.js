import React,{useState,useEffect} from 'react'
import TransactionFrom from './TransactionFrom';
import TotalOutput from './TotalOutput';
import AllTransactions from "./AllTransactions";


const TransactionAdder = () => {
    let [btnPressed,setBtn] = useState(false);
    let [trans,setTrans] = useState([]);
    let [balance,setBalance] = useState(0);

    function transactionHandler(transactions){
        setTrans(transactions)
    }
    useEffect(() => {
        balance =0;
        trans.map((item) => {
          if (item.radio === "income") {
            balance = balance + parseInt(item.amount);
          } else if (item.radio === "expense") {
            balance = balance - parseInt(item.amount);
          }
        });
        
          setBalance(balance);
        
      }, [trans]);

  return (
    <div className='mx-auto w-1/2'>

        <div className="flex items-center justify-between my-4">
            <span className='text-lg'>Balance ${balance}</span>
            <button onClick={()=>{setBtn(!btnPressed)}} className="p-2 text-white bg-black rounded-md hover:text-black hover:bg-white">
                {btnPressed?"Cancel":"Add"}
            </button>
        </div>
        {btnPressed? <TransactionFrom transactionHandler={transactionHandler}/>:<></>}

        <TotalOutput trans={trans}/>

        <AllTransactions trans={trans}/>
        
    </div>
 
  )
}

export default TransactionAdder