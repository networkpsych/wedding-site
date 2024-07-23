<script lang="ts">
    export let uploadList: any

</script>

<div class="table-container m-auto p-5">
    <table class="table table-comfortable table-hover font-nfPrintBold text-sm md:text-xl text-primary-300">
        <thead class="bg-primary-600">
            <tr>
                <th>File</th>
                <th>File Size</th>
            </tr>
        </thead>
        <tbody>
            {#each Object.entries(uploadList) as [key, val]}
            <tr>
                <td>
                {#if key.length > 20}
                    {key.slice(0,7)}...
                {:else}
                    {key}
                {/if}
                </td>
                <td>{val}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

