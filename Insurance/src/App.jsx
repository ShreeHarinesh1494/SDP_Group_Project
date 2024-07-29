
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Shared/Home'
import Login from './pages/Shared/Login'
import Register from './pages/Shared/Register'

import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import NotFound from './pages/Shared/NotFound'
import HomeLayout from './layout/HomeLayout'
import AdminUsers from './pages/Admin/AdminUsers'
import AdminClaim from './pages/Admin/AdminClaim'
import PoliciesPage from './pages/Shared/PoliciesPage'
import UserLayout from './layout/UserLayout'
import UserDashboard from './pages/User/UserDashboard'
import Usergetpolicy from './pages/User/Usergetpolicy'
import Userfaq from './pages/User/Userfaq'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/policies' element={<PoliciesPage />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} /> 
                     
                    </Route>

                    <Route element={<UserLayout />}>
                        <Route path='/dashboard' element={<UserDashboard />} />
                    </Route>

                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/users' element={<AdminUsers />} />
                        <Route path='/admin/claim' element={<AdminClaim />} />
                        
                    </Route>
                    <Route element={<UserLayout/>}>
                        <Route path='/userdashboard' element={<UserDashboard />} />
                        <Route path='/user/getpolicy' element={<Usergetpolicy />} />
                        <Route path='/user/faq' element={<Userfaq />} />
                      
                        
                    </Route>
                 
                </Routes>
            </BrowserRouter>


        </>
    )
}

export default App



