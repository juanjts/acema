// @ts-nocheck
import Login from './pages/Login.svelte';
import Dashboard from './pages/Dashboard.svelte';
import NotFound from './pages/NotFound.svelte';

export const routes = {
  '/': Login,
  '/dashboard': Dashboard,
  '*': NotFound
}