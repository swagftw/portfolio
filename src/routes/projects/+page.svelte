<script>
    import CTA from "$lib/components/CTA.svelte";
    import Project from "$lib/components/Project.svelte";

    /** @typedef {Object} project
     * @property {string} name
     * @property {string} description
     * @property {string[]} stack
     * @property {string} link
     */

    /** @type {project[]}*/
    const projects = [
        {
            name: "Utils",
            description: "Server Utils for go-gin",
            stack: ["Golang", "Postgresql", "JWT", "Errors", "Middlewares"],
            link: "https://github.com/source-con/utils"
        },
        {
            name: "lb",
            description: "High performance load balancer",
            stack: ["Golang"],
            link: "https://github.com/swagftw/lb",
        },
        {
            name: "gi",
            description: "Simple go dependency injection container",
            stack: ["Golang", "Dependency Injection"],
            link: "https://github.com/swagftw/gi",
        },
        {
            name: "cache-service",
            description: "Redis cache service over RPC",
            stack: ["Golang", "Redis", "gRPC"],
            link: "https://github.com/swagftw/cache-service",
        },
    ]
</script>

<div class="row-start-2 row-span-full col-span-full xs:px-6 grid grid-flow-row grid-cols-1 gap-4 overflow-y-auto xs:pb-32
            sm:row-start-3 sm:col-start-1 sm:col-span-4 sm:grid sm:grid-cols-2
            md:row-start-3 md:col-start-2 md:col-span-6 md:auto-rows-min
            lg:row-start-3 lg:col-start-2 lg:col-span-6 lg:grid-cols-3">
    {#each projects as project}
        <Project p={project}/>
    {/each}
</div>
