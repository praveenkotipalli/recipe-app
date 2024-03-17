import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Navbar from '../components/navbar/Navbar'
import Detail from '../pages/detail/Detail'
import Login from '../pages/login/Login'
import PrivateRouter from './PrivateRouter'
import NotFound from '../pages/notfound/NotFound'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='detail' element={<PrivateRouter/>}>
                   <Route path='' element={<Detail/>}/>
                </Route>
                <Route path='about' element={<PrivateRouter/>}>
                   <Route path='' element={<About/>}/>
                </Route>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter