<script>
// @ts-nocheck
import Router from 'svelte-spa-router'
import { routes } from './routes'
import { authenticationStore } from './stores/authenticationStore'
import Login from './pages/Login.svelte'

</script>

<div class="columns is-centered is-marginless" style="height: calc(100dvh - 4rem);">
	{#if !$authenticationStore.isAuthenticated}
		<Router routes={{ '/': Login, '*': Login }} />
	{:else}
		<Router {routes} />
	{/if}
</div>