export interface UserToRegister {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    userId: number;
}
