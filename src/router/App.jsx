import React from "react"
import {Routes,Route} from "react-router-dom"
import PrivateRoute from './Private.route'
import CounterPage from '../pages/counterPage'
import GalleryPage from '../pages/GalleryPage'
import LoginPage from "../pages/LoginPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />{/*public */}
        <Route path="/login" element={<LoginPage/>} />
        <Route 
          exact path="/counter" 
          element={
            <PrivateRoute 
              component={CounterPage}
            />
          } />
          <Route 
          exact path="/gallery"
          element={
            <PrivateRoute
              component={GalleryPage}
            />
          } />
      </Routes>
    </>
  )
}

export default App
