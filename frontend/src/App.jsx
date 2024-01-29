import React from 'react'
import Home from './pages/Home/Home'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Details from './pages/Details/Details'
import Stock from './pages/Stock/Stock'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details' element={<Details/>}/>
      <Route path='/stock' element={<Stock/>}/>
    </Routes>
    <Toaster/>
   </Router>

    </>
  )
}

export default App