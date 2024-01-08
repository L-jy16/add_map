import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { loginUser, clearUser } from './reducer/userSlice'
import firebase from './firebase.js'

import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Footer from './components/layout/Footer'

import Home from './page/Home'
import Map from './components/map/Map'
import Mapdepartment from './components/map/Mapdepartment.jsx'
import Mapdepartdetail from './components/map/Mapdepartdetail.jsx'



const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      console.log("userInfo:", userInfo)
      if (userInfo !== null) {
        dispatch(loginUser(userInfo.multiFactor.user));
      } else {
        dispatch(clearUser())
      }
    })
  }, [dispatch]);

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />}></Route>

          <Route path='/map' element={<Map />}></Route>
          <Route path='/map/depart' element={<Mapdepartment />}></Route>
          <Route path='/map/department/:depart' element={<Mapdepartdetail />}></Route>
        </Routes>
      </Main>
      <Footer />
    </>
  )
}

export default App
