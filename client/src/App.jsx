import React from 'react'
import { createBrowserRouter, RouterProvider }  from 'react-router-dom'
import Home from './pages/Home'
import HotelData from './pages/HotelData'
import Display from './pages/Display'

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/add-event',
    element: <HotelData/>
  },
  {
    path: 'events',
    element: <Display/>
  }
])


function App() {
  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  )
}

export default App