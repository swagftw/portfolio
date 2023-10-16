<script>
    import "../app.css";
    import {page} from '$app/stores';

    const navbarItems = [
        {
            title: "About Me",
            route: "/"
        },
        {
            title: "Projects",
            route: "/projects"
        },
        {
            title: "Blog",
            route: "/blog"
        },
    ]
</script>

<div class="w-screen h-screen flex justify-center bg-black">
    <div class="max-w-[96rem] w-full bg-black grid grid-cols-1 grid-rows-8 gap-y-4
            sm:px-16 sm:py-8 sm:gap-4 sm:grid-cols-4 sm:grid-rows-8
            md:p-8 md:grid-cols-8 md:gap-6">
        <nav class="col-span-4 xs:p-6 xs:gap-8 flex xs:max-w-xl text-xl text-white sticky
                sm:gap-14 sm:items-end
                md:col-start-2 md:col-span-6">
            {#each navbarItems as item}
                <a href={item.route}
                   class="{$page.url.pathname === item.route ? 'font-medium bg-gradient-to-r bg-clip-text from-white to-blue40 text-transparent' : 'font-extralight'}">
                    {item.title}
                </a>
            {/each}
        </nav>
        <slot/>
    </div>
</div>