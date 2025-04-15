import { Login } from "../../auth/login";
import { User } from "../../models/user";

export interface IAuthService {
  
    login: (login: Login) => Promise<void>;
    register: (user: User) => Promise<void>;
    forgotPassword: (email: string) => Promise<void>;
    logout: () => Promise<void>;

}