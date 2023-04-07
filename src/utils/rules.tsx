//делаем эту функцию чтобы кажды раз в инпутах не писать одно и то же
export const rules = {
    required: (message: string = 'Обязательное поле') => ({
        required: true,
        message
    })
}
