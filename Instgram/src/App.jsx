import React from 'react'
import Sidebar from './sidebar'
function App() {
  return (
    <div className='d-flex vh-100 transparent'>
       <div className='w-20 '><Sidebar/></div>
       <div className='w-50  bg-info text - p-3'>feed</div>
       <div className='w-30 '>suddestion</div>
       
    </div>
  )
}

export default App
