import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Courses from './components/courses/Courses'
import Signup from './components/Signup'


function App() {
  return (
    <>
       <div className='dark:bg-slate-900 dark:text-white'>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='course' element={<Courses/>} />
        <Route path='signup' element={<Signup/>}></Route>
      </Routes>
       </div>
    </>
  )
}

export default App