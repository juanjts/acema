import { writable } from 'svelte/store'

const initialState = {
    usersData: null,
}

function createUsersStore() {
    const { subscribe, set, update } = writable(initialState)

    return {
        subscribe,

        update(list) {
            const newUsersState = {
                ...initialState,
                usersData: list
            }
            set(newUsersState);
        },
        deleteUser(id) {
            update(state => {
                const filteredList = state.usersData.filter(({ user }) => user.sha256 !== id);

                return {
                    ...state,
                    usersData: filteredList
                };
            });
        },
        restartData(){
            const newUsersState = {
                ...initialState,
                usersData: null
            }
            set(newUsersState);
        }
    }
}

export const currentUserssStore = createUsersStore()