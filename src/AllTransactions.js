import React,{useState} from 'react';
import TrancsactionCell from './TrancsactionCell';

const AllTransactions = ({trans}) => {
    let[search,setSearch] = useState("");
    const regex = new RegExp(search,"i")

  return (
    <>
        <div className='my-8'>
            <h2 className='text-xl my-2'>Transactions</h2>
            <input type="text" placeholder="Search" value={search} 
            onChange={(e)=>{setSearch(e.target.value)}}
            className="p-2 outline-none bg-gray-400 text-white rounded-md placeholder:text-white"
            />
        
            {(trans?.length>0 && search=="" )? trans.map((item,index)=>{
                return(
                    <TrancsactionCell 
                    key={index} 
                    amount={item.amount} 
                    radio={item.radio}
                    desc={item.desc}/>  

                )
            })
            :
            
            trans.map((item,index)=>{

               
                return(
                    regex.test(item.desc)?  
                        <TrancsactionCell 
                        key={index} 
                        amount={item.amount} 
                        radio={item.radio}
                        desc={item.desc}/>  :<span key={index}></span>
                    
                   

                )
            }
            )
          
            
            }

           



        </div>
    </>
  )
}

export default AllTransactions