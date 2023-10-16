<script>
    /** @type {project} */
    export let p;
</script>

<a href={p.link} class="row-span-2 col-span-1 flex flex-col p-4 border border-gray90 justify-between hover:bg-gray100 gap-16">
    <div class="flex flex-col text-white">
        <p class="text-xl font-light sm:text-2xl">{p.name}</p>
        <p class="font-extralight sm:text-xl text-gray40">{p.description}</p>
    </div>

    <div class="flex gap-2 flex-wrap gap-y-3">
        {#each p.stack as item}
            <div class="text-white border border-gray80 bg-gray90 max-w-max rounded-full px-3 py-1 text-sm">{item}</div>
        {/each}
    </div>
</a>