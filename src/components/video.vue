<template>
    <div class="mx-auto">
        <h1><span class="text-xl font-semibold">{{ video.title }}</span></h1>
        <iframe
        class="mx-auto bg-black dark:bg-white mt-10 rounded-none md:rounded-lg shadow-xl w-full aspect-video max-w-2xl ring-2 ring-black dark:ring-white"
            :src="videoUrl"
            :title="video.description"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
        ></iframe>
        <p class="mt-6">{{ video.description }}</p>
        <p class="mt-6">{{ video.date }}</p>

        <div class="ad">
        <!-- AdSense slot -->
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    props: {
        uuid: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState({
            videos: state => state.videos
        }),
        video() {
            return this.videos.find(video => video.uuid === this.uuid);
        },
        videoUrl() {
            return "https://player.vimeo.com/video/"+this.uuid;
        }
    },
    mounted() {
    this.insertAd();
    },
    methods: {
      insertAd() {
        // Ensure global adsbygoogle array exists
        window.adsbygoogle = window.adsbygoogle || [];
        
        const adElement = document.createElement('ins');
        adElement.className = 'adsbygoogle';
        adElement.style.display = 'block';
        adElement.setAttribute('data-ad-client', 'ca-pub-6437061319663341');
        adElement.setAttribute('data-ad-slot', '6863062259');
        adElement.setAttribute('data-ad-format', 'auto');
        adElement.setAttribute('data-full-width-responsive', 'true');
        
        this.$el.appendChild(adElement);
        
        // Request AdSense to display the ad
        (adsbygoogle = window.adsbygoogle || []).push({});
      }
    }
};
</script>