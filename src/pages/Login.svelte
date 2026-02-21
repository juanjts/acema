<script>
// @ts-nocheck
import { onMount } from "svelte";
import login from "../services/login";
import getAllUsers from "../services/getAllUsers";
import { currentUserssStore } from "../stores/currentUsersStore";
import { authenticationStore } from "../stores/authenticationStore";
import { push } from "svelte-spa-router";

let userAccount = null;
let pass = null;

const handleLogin = async (account, password, list) => {
    const success = await login(account, password, list);

    if (success) {
        push("/dashboard");
    }
}

onMount( async ()=>{
    authenticationStore.restoreSession();
    const usersData = await getAllUsers();

    currentUserssStore.update(usersData);

    userAccount = usersData[0].user.email;
    pass = usersData[0].user.password;

    console.log({
        msg: 'estos son los datos de ingreso con el primer elemento del api',
        account: usersData[0].user.email,
        password: usersData[0].user.password
    })
})
</script>


<div class="column is-half is-flex is-flex-direction-column is-justify-content-center">
    <h1 class="title has-text-centered">Login</h1>

    <div class="field">
        <label class="label has-text-left" for="userAccount">Email</label>
        <div class="control">
            <input class="input"
            id="userAccount"
            type="email"
            placeholder="emmail"
            bind:value={userAccount}>
        </div>
    </div>

    <div class="field">
        <label class="label has-text-left" for="pass">Contraseña</label>
        <div class="control">
            <input class="input"
            id="pass"
            type="password"
            placeholder="Contraseña"
            bind:value={pass}>
        </div>
    </div>

    <div class="field">
        {#if $currentUserssStore.usersData}
            <button class="button is-primary is-fullwidth" on:click={() => handleLogin(userAccount, pass, $currentUserssStore.usersData)}>
                Ingresar
            </button>
        {/if}
    </div>

    {#if $authenticationStore.authenticationError.hasError}
        <p class="has-text-danger has-text-centered">{$authenticationStore.authenticationError.message}</p>
    {/if}
</div>

<style>

</style>