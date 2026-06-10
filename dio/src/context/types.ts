import React from 'react';
import { IUser } from '../types/user';

export interface IAuthContext {
    user: IUser;
    handleLogin: (loginData: IloginData) => Promise<void>;
}

export interface IAuthContextProviderProps {
    children: React.ReactNode;
}

export interface IloginData {
    email: string;
    password: string;
}