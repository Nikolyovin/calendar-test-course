import authReducer from './auth'
import EventReducer from './event'

// в этот файл мы экспортируем все редьюсеры, а потом уже в рутовый редюсер(чтобы не нагромождать рутовый редюсер)

export default {
    authReducer,
    EventReducer
}
