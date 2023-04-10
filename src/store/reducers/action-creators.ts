import { AuthActionCreators } from './auth/action-creators'
import { EventActionCreators } from './event/action-creators'

// в этот файл мы экспортируем все экшен крееторы'
export const allActionCreators = {
    ...AuthActionCreators,
    ...EventActionCreators
}
