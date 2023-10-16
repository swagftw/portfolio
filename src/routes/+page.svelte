<script>
    import Social from "$lib/components/Social.svelte";
    import CTA from "$lib/components/CTA.svelte";
</script>

<div class="row-start-2 row-span-1 xs:px-6 text-[2.75rem] leading-[3.25rem]
            sm:row-start-3 sm:col-span-4 sm:text-5xl sm:leading-[3.5rem]
            md:col-start-2 md:col-span-6
            lg:col-start-2 lg:col-span-5 lg:text-6xl lg:leading-[4.375rem]
            xl:text-7xl xl:leading-[5rem]
            2xl:col-span-4">
    <p class="sm:font-light bg-clip-text bg-gradient-to-r from-white to-blue40 text-transparent">I'm Swapnil,</p>
    <p class="text-gray70 font-extralight sm:mr-8 lg:mr-0">Engineering the backbone of seamless digital
        experiences.</p>
</div>

<div class="xs:px-6 row-start-6 flex gap-16 text-black
            sm:gap-8 sm:items-center
            md:col-start-2 md:col-span-6 md:gap-4
            lg:col-start-7 lg:col-span-2 lg:row-start-3 lg:flex-col lg:items-start">
    <Social icon="ph:github-logo-light" name="GitHub" link="https://github.com/swagftw"/>
    <Social icon="ph:linkedin-logo-light" name="LinkedIn" link="https://www.linkedin.com/in/swapnil-nakade-506968266/"/>
    <Social icon="ph:twitter-logo-light" name="Twitter" link="https://x.com/swapnil_nakade_"/>
    <Social icon="ph:envelope-open-light" name="Email" link="mailto:swapnilnakade.sn@gmail.com"/>
</div>


<div class="lg:col-start-1 lg:row-start-1 lg:row-span-full lg:bg-transparent lg:border lg:border-r-gray90"/>

<CTA title="Projects" route="/projects"/>
