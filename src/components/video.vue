<template>
    <div class="mx-auto">
        <h1><span class="text-xl font-semibold">Exclusive betting tips <span class="font-mono text-base px-2 py-1 bg-slate-300 dark:bg-slate-700 rounded-lg text-black dark:text-white">{{videoID}}</span></span></h1>
        <iframe
        class="mx-auto bg-black dark:bg-white mt-10 rounded-lg shadow-xl w-full aspect-video max-w-2xl ring-2 ring-black dark:ring-white"
            :src="videoUrl"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
        ></iframe>

        <div class="ring-2 ring-black dark:ring-white bg-black dark:bg-white text-white dark:text-black h-20 mx-auto max-w-xl mt-6 w-full block text-left p-2">#AD </div>
    </div>
</template>

<script>
export default {
    props: {
        index: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            videoUrl: "",
            videoID: Number(this.index) + 1
        };
    }
};
</script>

<style>
/* Add any custom styles here */
</style>
