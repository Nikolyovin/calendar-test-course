import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

//чтобы не нагромождать мы все редюсеры объеденили в index.ts в корне папки reducers
const rootReducer = combineReducers(reducers)

export const store = createStore(rootReducer, applyMiddleware(thunk)) //подключаем thunk

//типизируем сторе. получаем тип нашего состояния
export type RootState = ReturnType<typeof store.getState>

//получаем тип нашего диспатча
export type AppDispatch = typeof store.dispatch
