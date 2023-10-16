<script>
    import Icon from "@iconify/svelte";

    /** @type string */
    export let name;

    /** @type string */
    export let icon;

    /** @type string */
    export let link;
</script>

<a href={link} target="_blank" class="sm:flex sm:gap-2 sm:p-2 items-center sm:hover:bg-gray90 text-gray20">
    <Icon icon={icon}
          class="h-7 w-7 sm:h-6 sm:w-6"
    />
    <p class="xs:hidden">{name}</p>
    <div class="xs:hidden sm:mr-3"/>
    <Icon icon="ph:arrow-up-right-thin" class="xs:hidden sm:hidden md:block hover:block lg:block h-5 w-5"/>
</a>