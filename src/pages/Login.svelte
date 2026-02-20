<script>
// @ts-nocheck

let userAccount = null;
let pass = null;

const handleLogin = async () => {
    console.log('login')
}
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
        <button class="button is-primary is-fullwidth" on:click={handleLogin()}>
            Ingresar
        </button>
    </div>
</div>

<style>

</style>