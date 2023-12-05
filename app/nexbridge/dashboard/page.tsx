"use client"
import React from 'react'

const Dashboard = () => {
   const buttons = [
        { key: 'compose', value: 'Compose' },
        { key: 'bridgeOptions', value: 'Bridge Options' },
      ];
      
    const [initialActiveButton, setInitialActiveButton] = React.useState(
        buttons[0].key
      );
      const handleButtonClick = (props: any) => {
        setInitialActiveButton(props)
        console.log(props);
      };
  return (
    <div className='flexCenter '>
    <div className='min-w-[1155px] h-[616px] justify-center backdrop-blur-md bg-grey-500 border rounded-xl border-white'>
        <div className='grid grid-cols-2 gap-x-8 mx-40 my-4 '>
            {buttons.map((button) => (
            <button
                key={button.key}
                onClick={() => handleButtonClick(button.key)}
                className={`${
                initialActiveButton === button.key
                    ? 'bg-emerald-500'
                    : 'bg-transparent text-emerald-500 border border-emerald-500'
                } h-[55px] rounded-full `}
            >
                {button.value}
            </button>
            ))}

                    
        
        </div>
        <div className='w-full px-40 mt-10 '>
            <label className='text-white text-lg pl-4'>From :</label>
            <input className=' w-full  rounded-full bg-transparent border-white mb-4'  />
            <label className='text-white text-lg pl-4'>To :</label>
            <input className='w-full  rounded-full  border-white bg-transparent'  />
        </div>

    </div>
 
    </div>
  )
 
    
  
}

export default Dashboard