<script>
    import Blog from "$lib/components/Blog.svelte";

    /** @typedef {Object} blog
     * @property {string} title
     * @property {string} read
     * @property {string} date
     */
    const blogs = [
        {
            title: "Understanding go channels in depth",
            read: "10 Min",
            date: "11th Oct 2023",
        },
        {
            title: "Understanding go channels in depth",
            read: "10 Min",
            date: "11th Oct 2023",
        },
        {
            title: "Understanding go channels in depth",
            read: "10 Min",
            date: "11th Oct 2023",
        },
        {
            title: "Understanding go channels in depth",
            read: "10 Min",
            date: "11th Oct 2023",
        }
    ]
</script>

<div class="row-start-2 row-span-full grid grid-cols-1 grid-flow-row gap-y-4 xs:px-4 overflow-y-auto mb-8
            sm:row-start-3 sm:col-span-full sm:grid sm:grid-cols-4 sm:grid-flow-row
            md:row-start-3 md:col-start-2 md:col-span-6 md:grid-cols-6
            lg:row-start-3 lg:col-start-2 lg:col-span-6 lg:grid-cols-6 lg:gap-8
            xl:row-start-3">
    {#each blogs as blog}
        <Blog blog={blog}/>
    {/each}
</div>