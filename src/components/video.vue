<template>
    <div class="mx-auto">
        <iframe
        class="mx-auto mt-10 rounded-lg shadow-xl"
            :src="videoUrl"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
        ></iframe>

        <div class="bg-white dark:text-black h-20 mx-auto max-w-xl mt-6 w-full block text-left">#AD </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            videoUrl: "https://player.vimeo.com/video/907285254?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        };
    },
};
</script>

<style>
/* Add any custom styles here */
</style>
