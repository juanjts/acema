import { writable } from 'svelte/store'

const initialState = {
    isAuthenticated: false,
}

function createAuthStore() {
    const { subscribe, set, update } = writable(initialState)

    return {
        subscribe,

        loginSucces() {
            const succesState = {
                ...initialState,
                isAuthenticated: true
            }

            localStorage.setItem('auth', JSON.stringify(succesState));

            set(succesState);
        }
    }
}

export const authenticationStore = createAuthStore()