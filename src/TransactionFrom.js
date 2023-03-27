import React,{useState} from 'react';


const TransactionFrom = ({transactionHandler}) => {
    let [amount,setAmount] = useState(0);
    let [desc,setDesc] = useState("");
    let [radio,setRadio] = useState("income");
    let [transactions, setTransactions] = useState([])

    function addTransaction(e){
        e.preventDefault();
        let transactionArray = [...transactions];
        transactionArray.push({amount,desc,radio});
        transactionHandler(transactionArray);
        setTransactions([...transactions,{amount,desc,radio}])
        setAmount(0);
        setDesc("")

    }

  return (
    <>
         <div className='formWrapper p-4  border-2 my-2 border-gray-200'>
            <form>
                <input type="number" placeholder="Amount" name="amount" 
                className='block w-full my-2 border-2 border-gray-200 p-1 outline-none'
                onChange={(e)=>{setAmount(e.target.value)}}
                value={amount}
                />
                <input type="text" placeholder="Description" name="desc" 
                className='block w-full  my-2  border-2 border-gray-200  p-1 outline-none'
                onChange={(e)=>{setDesc(e.target.value)}}
                value={desc}

                />

                <div className=''>

                    <input type="radio" id="expense" name="type" value="expense" checked={radio==="expense"}
                     onChange={(e)=>{setRadio(e.target.value)}}
                    />
                    <label htmlFor='expense'className='mx-2'>Expense</label>
                    <input type="radio" id="income" name="type" value="income" checked={radio==="income"}
                    onChange={(e)=>{setRadio(e.target.value)}}
                    />
                    <label htmlFor='income' className='ml-2'>Income</label>
                </div>

                <button 
                className="py-1 px-2 my-2 text-white bg-black rounded-md hover:text-black hover:bg-white border-black border-2"
                onClick={(e)=>{addTransaction(e)}}
                >
                    Add Transaction 
                </button>
            </form>

        </div>

       


       
    </>
       
  )
}

export default TransactionFrom