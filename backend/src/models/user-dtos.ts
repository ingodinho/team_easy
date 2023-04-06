export interface IUserToRegister {
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface ILoginCredentials {
    email: string;
    password: string;
}

export interface ILoginResponse {
    accessToken: string;
    refreshToken: string;
    userId: number;
}
