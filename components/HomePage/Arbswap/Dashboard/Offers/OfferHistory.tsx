import React, { useState } from 'react'
import HistoryTable from './HistoryTable'

type InputProps = 'Received' | 'Sent' | 'Users'

function OfferHistory() {
  const [activeComponent, setActiveComponent] = useState('Received')

  const handleButtonClick = (componentName: InputProps) => {
    setActiveComponent(componentName)
  }
  return (
    <div className="grid grid-cols-12 p-3">
      <div className="col-span-3 flex flex-col gap-6">
        <button
          onClick={() => handleButtonClick('Received')}
          className={`bg-${
            activeComponent === 'Received' ? 'blue-500' : 'white'
          } text-${activeComponent === 'Received' ? 'white' : 'blue-500'}
          rounded-full border-2
          border-blue-500 px-4 py-2`}
        >
          RECEIVED
        </button>
        <button
          onClick={() => handleButtonClick('Sent')}
          className={`bg-${
            activeComponent === 'Sent' ? 'blue-500' : 'white'
          } text-${activeComponent === 'Sent' ? 'white' : 'blue-500'}
          rounded-full
          border-2 border-blue-500 px-4 py-2 text-blue-500`}
        >
          SENT
        </button>
        <button
          onClick={() => handleButtonClick('Users')}
          className={`bg-${
            activeComponent === 'Users' ? 'blue-500' : 'white'
          } text-${activeComponent === 'Users' ? 'white' : 'blue-500'}
          rounded-full
          border-2 border-blue-500 px-4 py-2 text-blue-500`}
        >
          USERS
        </button>
      </div>
      <div className="col-span-9">
        {activeComponent === 'Received' && <HistoryTable input={'Received'} />}
        {activeComponent === 'Sent' && <HistoryTable input={'Sent'} />}
        {activeComponent === 'Users' && <HistoryTable input={'Users'} />}
      </div>
    </div>
  )
}

export default OfferHistory
