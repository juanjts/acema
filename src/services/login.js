import { authenticationStore } from '../stores/authenticationStore'
import getUserAuth from './getUserAuth';

const login = async (email, password, users) => {
    try {
        const userFound = getUserAuth(email, users);
        
        if (userFound === null) {
            authenticationStore.loginError("Usuario no encontrado")
            return false;
        }
    
        if (userFound.password !== password) {
            authenticationStore.loginError("Contraseña incorrecta")
            return false;
        }
    
        authenticationStore.loginSucces(userFound);
        return true;
    } catch (error) {
        authenticationStore.loginError("Error de conexión al servidor");
        return false;
    }
}

export default login;