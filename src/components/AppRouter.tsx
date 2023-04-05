import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router'

const AppRouter = () => {
    const auth = false
    return auth ? (
        <Routes>
            {privateRoutes.map(route => (
                <Route path={route.path} key={route.path} Component={route.component} />
            ))}
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map(route => (
                <Route path={route.path} key={route.path} Component={route.component} />
            ))}
            <Route path='/*' element={<Navigate to='/login' replace />} />
        </Routes>
    )
}

export default AppRouter
