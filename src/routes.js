// @ts-nocheck
import Login from './pages/Login.svelte';
import Dashboard from './pages/Dashboard.svelte';
import NotFound from './pages/NotFound.svelte';
import wrap from 'svelte-spa-router/wrap';

export const routes = {
  '/': Login,
  '/dashboard': wrap({
    component: Dashboard,
    conditions: [
      () => {
        return localStorage.getItem('auth') !== null;
      }
    ]
  }),
  '*': NotFound
}