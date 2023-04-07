import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router'
import { useTypedSelector } from '../hooks/TypedUseSelectorHook'

const AppRouter = () => {
    const { isAuth } = useTypedSelector(state => state.authReducer)
    console.log('isAuth', isAuth)

    return isAuth ? (
        <Routes>
            {privateRoutes.map(route => (
                <Route path={route.path} key={route.path} Component={route.component} />
            ))}
            <Route path='/*' element={<Navigate to='/' replace />} />
        </Routes>
    ) : (
        <Routes>
            {publicRoutes.map(route => (
                <Route path={route.path} key={route.path} Component={route.component} />
            ))}
            <Route path='/*' element={<Navigate to='/login' replace />} />
            {/* <Route path='/*' element={<Navigate to='/login' replace />} /> */}
        </Routes>
    )
}

export default AppRouter
