import Login from '../pages/Login'
import Event from '../pages/Event'

export interface IRoute {
    path: string
    component: React.ComponentType
    exact?: boolean
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/'
    // ERROR = '/*'
}

export const publicRoutes: IRoute[] = [
    { path: RouteNames.LOGIN, exact: true, component: Login }
    // { path: RouteNames.ERROR, exact: true, component: Login }
]
export const privateRoutes: IRoute[] = [
    { path: RouteNames.EVENT, exact: true, component: Event }
    // { path: RouteNames.ERROR, exact: true, component: Event }
]
