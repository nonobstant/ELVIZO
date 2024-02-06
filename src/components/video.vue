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
        <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-6437061319663341"
         data-ad-slot="6863062259"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    metaInfo: {
      script: [
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6437061319663341',
          async: true,
          crossorigin: 'anonymous'
        },
        {
          innerHTML: '(adsbygoogle = window.adsbygoogle || []).push({});',
          type: 'text/javascript',
          charset: 'utf-8'
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'adsense-script': ['innerHTML']
      }
    },
    mounted() {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    },
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
    }
};
</script>