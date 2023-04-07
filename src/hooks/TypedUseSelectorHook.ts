import { TypedUseSelectorHook } from 'react-redux'
import { RootState } from '../store'
import { useSelector } from 'react-redux'

//в дженерике мы указываем тот тип который отвечает за сотстояние нашего приложения, сделали мы его в главном файле редакса
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
