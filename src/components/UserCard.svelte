<script>
export let user

</script>

<div class="card mb-3" style="border-radius: 8px; border: 1px solid #4a4a4a;">
    <div class="card-content p-3">
        <div class="columns is-vcentered is-mobile is-marginless">
            
            <div class="column is-narrow">
                <p class="title is-6 mb-2">
                    {user?.user?.name?.first} {user?.user?.name?.last}
                </p>
                <figure class="image is-48x48">
                    <!-- svelte-ignore a11y_img_redundant_alt -->
                    <img class="is-rounded" src={user?.user?.picture?.medium} alt="User photo">
                </figure>
            </div>

            <div class="column">
                <div class="is-flex is-flex-direction-column">
                    <p class="has-text-weight-semibold is-6 mb-1">
                        {user?.user?.email}
                    </p>
                    <p class="is-size-7 has-text-grey-light mb-1">
                        telefono: {user?.user?.phone}
                    </p>
                    <p class="is-size-7 has-text-grey-light mb-1">
                        ubicación: {user?.user?.location?.city}
                    </p>
                </div>
            </div>

            <div class="column is-narrow">
                <button  class="button is-danger is-small" title="Eliminar usuario">
                    Eliminar
                </button>
            </div>

        </div>
    </div>
</div>
