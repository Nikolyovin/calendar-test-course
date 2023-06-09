import axios, { AxiosResponse } from 'axios'
import { IUser } from '../models/IUser'

export default class UserService {
    //статический метод, чтобы можно было вызывать без создания экземпляра класса
    static async getUsers(): Promise<AxiosResponse<IUser[]>> {
        return axios.get<IUser[]>('./users.json')
    }
}
