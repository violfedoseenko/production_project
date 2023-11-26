export interface User {
    id: string,
    username: string
}

// интерфейс для стейта
// если authData undefined, значит пользователь не авторизован
export interface UserSchema {
    authData?: User
}
