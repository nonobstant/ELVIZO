<template>
    <div class="mx-auto">
        <h1><span class="text-xl font-semibold">Football Betting Tips</span></h1>
        <iframe
        class="mx-auto bg-black dark:bg-white mt-10 rounded-none md:rounded-lg shadow-xl w-full aspect-video max-w-2xl ring-2 ring-black dark:ring-white"
            :src="videoUrl"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
        ></iframe>
        <p class="mt-6">EPL, LaLiga</p>
        <!-- <div class="ring-2 ring-black dark:ring-white bg-black dark:bg-white text-white dark:text-black h-20 mx-auto max-w-xl mt-6 w-full block text-left p-2">#AD </div> -->
    </div>
</template>

<script>
export default {
    props: {
        urlID: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            videoUrl: "https://player.vimeo.com/video/"+this.urlID,
        };
    }
};
</script>

<style>
/* Add any custom styles here */
</style>
