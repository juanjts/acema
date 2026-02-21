// @ts-nocheck
import { writable } from "svelte/store";
import filterUsersBySearch from "../services/filterUserBySearch";

const initialState = {
    search: '',
    currentPage: 1,
    itemsPerPage: 10,
    dataFiltered: [],
    totalPages: 0
}

function createPaginatorStore() {
    const { subscribe, set, update } = writable(initialState)

    return {
        subscribe,

        initPaginator(allData) {
            update(state => {
                return {
                    ...state,
                    dataFiltered: allData.slice(0, state.itemsPerPage),
                    totalPages: Math.ceil(allData.length / state.itemsPerPage),
                };
            });
        },
        searchUpdater(value, allData) {
            if (!allData) return; 

            update(state => {
                const resultData = filterUsersBySearch(value, allData) || [];
                
                return {
                    ...state,
                    search: value,
                    currentPage: 1,
                    dataFiltered: resultData.slice(0, state.itemsPerPage),
                    totalPages: Math.ceil(resultData.length / state.itemsPerPage),
                };
            });
        },
        changePage(pageNumber, allData) {
            update(state => {
                const filteredBySearch = filterUsersBySearch(state.search, allData);

                const from = (pageNumber - 1) * state.itemsPerPage;
                const until = from + state.itemsPerPage;

                const paginatedData = filteredBySearch.slice(from, until);

                return {
                    ...state,
                    currentPage: pageNumber,
                    dataFiltered: paginatedData
                };
            });
        }
    }
}

export const paginatorStore = createPaginatorStore();