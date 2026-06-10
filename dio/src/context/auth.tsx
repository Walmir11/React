import { createContext, useState } from 'react';
import { IAuthContextProviderProps, IAuthContext, IloginData } from './types';
import { IUser } from '../types/user';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({
    children
}: IAuthContextProviderProps) => { 
    const [user, setUser] = useState<IUser>({} as IUser);
    const navigate = useNavigate();

    const handleLogin = async(loginData: IloginData) => {
        try {
            const { data } = await api.get(
                `users?email=${loginData.email}&password=${loginData.password}` 
            );
            if(data.length === 1) {
                const user = data[0];
                setUser(user);
                navigate('/feed');
            } else {
                alert('Erro ao fazer login, tente novamente.')
            }
        } catch {
            alert('Erro ao fazer login, tente novamente.')
        }
    }
    
    return (
        <AuthContext.Provider value={{ user, handleLogin }}>
            {children}
        </AuthContext.Provider>
    );
}
