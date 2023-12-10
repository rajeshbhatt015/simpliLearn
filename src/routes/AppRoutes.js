import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from '../layout/Layout'
import HomePage from '../pages/HomePage'

const AppRoutes = () => {
  return (
    
    <Routes>
    <Route path='/' element={<Layout />}>
       <Route index path='/' element={ <HomePage /> } />
    </Route>
    </Routes>

  )
}

export default AppRoutes