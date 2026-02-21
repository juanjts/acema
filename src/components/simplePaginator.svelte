<script>
import { paginatorStore } from '../stores/paginatorStore';
import { currentUsersStore } from '../stores/currentUsersStore';

function goToPage(page) {
    if (page >= 1 && page <= $paginatorStore.totalPages) {
        paginatorStore.changePage(page, $currentUsersStore.usersData);
    }
}

</script>

{#if $paginatorStore.totalPages > 1}
    <!-- svelte-ignore a11y_no_redundant_roles -->
    <nav class="pagination is-centered is-rounded" role="navigation" aria-label="pagination">
        <button 
            class="pagination-previous" 
            disabled={$paginatorStore.currentPage === 1}
            on:click={() => goToPage($paginatorStore.currentPage - 1)}
        >
            Anterior
        </button>

        <button 
            class="pagination-next" 
            disabled={$paginatorStore.currentPage === $paginatorStore.totalPages}
            on:click={() => goToPage($paginatorStore.currentPage + 1)}
        >
            Siguiente
        </button>

        <ul class="pagination-list">
            {#each Array($paginatorStore.totalPages) as _, i}
                {@const pageNum = i + 1}
                <li>
                    <button 
                        class="pagination-link {pageNum === $paginatorStore.currentPage ? 'is-current' : ''}" 
                        aria-label="Ir a la página {pageNum}"
                        on:click={() => goToPage(pageNum)}
                    >
                        {pageNum}
                    </button>
                </li>
            {/each}
        </ul>
    </nav>
{/if}

<style>
.pagination-link, .pagination-next, .pagination-previous {
    cursor: pointer;
}
</style>