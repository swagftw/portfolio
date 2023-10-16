<script>
    import Icon from "@iconify/svelte";

    /** @type string */
    export let title;

    /** @type string */
    export let route;
</script>

<div class="sm:bg-transparent sm:border sm:border-y-gray90 sm:row-start-7 sm:row-span-2 sm:col-start-1 sm:col-span-4
            md:col-start-1 md:col-span-8"/>
<a
        href={route}
        class="z-10 bg-primary row-start-7 row-span-2 p-6 flex flex-col justify-between text-white hover:bg-blue70
               sm:col-start-3 sm: col-span-2
               md:col-start-6 md:col-span-3
               lg:col-start-7 lg:col-span-2">
    <p class="text-3xl font-light">{title}</p>
    <Icon icon="ph:arrow-right-thin" class="h-8 w-8"/>
</a>