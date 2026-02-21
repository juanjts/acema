<script>
// @ts-nocheck

import { onMount } from 'svelte';

import UserCard from '../components/UserCard.svelte'
import getAllUsers from '../services/getAllUsers';
import { authenticationStore } from '../stores/authenticationStore';
import { currentUsersStore } from '../stores/currentUsersStore';
import { push } from "svelte-spa-router";
import { paginatorStore } from '../stores/paginatorStore';
    import SimplePaginator from '../components/simplePaginator.svelte';

let isMounted = false;
let searchStore = '';

const handleLogout = () =>{
    authenticationStore.logout();
    push('/');
}

const handleSearch = (event) => {
    let params = event.target.value;
    paginatorStore.searchUpdater(params, $currentUsersStore.usersData);
}

onMount(()=>{
    paginatorStore.initPaginator($currentUsersStore.usersData);
    isMounted = !isMounted;
})
</script>


<section class="column is-12 is-flex is-flex-direction-column" style="height: calc(100dvh - 4rem); max-height: calc(100dvh - 4rem);">

    <div class="is-flex is-justify-content-space-between is-align-items-center mb-4">
        <h1 class="title is-marginless" style="margin-bottom: unset !important;">Dashboard</h1>
        <button class="button is-danger is-small" on:click={handleLogout}>
            <span class="is-size-6">Cerrar Sesión</span>
        </button>
    </div>
    
    <div class="field mb-5">
        <div class="control">
            <input
                class="input"
                type="text"
                placeholder="Buscar por nombre o email..."
                bind:value={searchStore}
                on:input={handleSearch}
            >
        </div>
    </div>

    {#if isMounted}
        <div class="box has-background-grey is-marginless is-clipped is-flex is-flex-direction-column is-flex-grow-1" style="overflow: hidden;">
            <div class="is-flex-grow-1 no-scrollbar is-paddingless" style="overflow-y: auto;">
                {#each $paginatorStore.dataFiltered as user}
                    <UserCard {user} />
                {/each}
            </div>
        </div>
        
        <SimplePaginator/>
    {/if}
</section>

<style>
:global(.no-scrollbar::-webkit-scrollbar) {
    width: 0px !important;
    height: 0px !important;
    background: transparent !important;
}

:global(.no-scrollbar) {
    -ms-overflow-style: none !important;
    scrollbar-width: none !important;
    overflow-y: scroll;
}
</style>