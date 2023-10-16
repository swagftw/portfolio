<script>
    /** @type {blog} */
    export let blog;
</script>

<div class="flex flex-col border border-gray90 hover:bg-gray100
            sm:flex-row sm:col-span-full
            lg:flex-col lg:col-span-3
            xl:col-span-2">
    <div class="flex flex-col justify-between p-4 text-white font-light gap-12">
        <p class="text-2xl pr-4">{blog.title}</p>
        <div class="flex justify-between">
            <p>{blog.read} read</p>
            <p>{blog.date}</p>
        </div>
    </div>
    <div class="w-full h-48 sm:w-1/2 gradient lg:w-full"/>
</div>

<style>
    .gradient {
        background: conic-gradient(from 90deg at 50% 50%, #78A9FF 0deg, #000 360deg);
    }
</style>
