import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from '../Pages/Homepage'

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routing
