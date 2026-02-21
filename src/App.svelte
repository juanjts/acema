<script>
// @ts-nocheck
import { onMount } from 'svelte';
import Router from 'svelte-spa-router';
import { routes } from './routes';
import { authenticationStore } from './stores/authenticationStore';

onMount(() => {
    authenticationStore.restoreSession();

    if (window.location.pathname !== '/') {
        window.history.replaceState(null, '', '/');
    }
});
</script>

<div class="columns is-centered is-marginless" style="height: calc(100dvh - 4rem);">
    <Router {routes} />
</div>