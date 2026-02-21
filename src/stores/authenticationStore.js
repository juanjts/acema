import { writable } from 'svelte/store'

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    authenticationError: {
        hasError: false,
        message: null
    }
}

function createAuthStore() {
    const { subscribe, set, update } = writable(initialState)

    return {
        subscribe,

        loginSucces(user) {
            const succesState = {
                ...initialState,
                user: user,
                token: user.sha256,
                isAuthenticated: true,
                authenticationError: {
                    hasError: false,
                    message: null
                }
            };

            localStorage.setItem('auth', JSON.stringify(succesState));

            set(succesState);
        },

        loginError(msg) {
            const errorState = {
                ...initialState,
                user: null,
                token: null,
                authenticationError: {
                    hasError: true,
                    message: msg
                }
            };

            localStorage.removeItem('auth');
            set(errorState);
        },

        logout() {
            localStorage.removeItem('auth')
            set(initialState)
        },

        restoreSession() {
            const saved = localStorage.getItem('auth')
            if (saved) {
                set(JSON.parse(saved))
            }
        }
    }
}

export const authenticationStore = createAuthStore()