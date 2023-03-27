import React from 'react'

const TrancsactionCell = ({amount,desc,radio}) => {
  return (
    <>
        <div className='grid grid-cols-3 place-content-between  p-4 '>
            <span className='text-lg'>{desc}</span>
            <span className='font-bold text-right'>${amount}</span>
            <div 
            className={radio=="income"? "flag ml-2 rounded bg-green-500": " ml-2  flag rounded bg-red-500"}
            ></div>
          

        </div>
       
    </>
  
  )
}

export default TrancsactionCell