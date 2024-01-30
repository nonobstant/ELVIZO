<template>
  <div class="max-w-lg mx-auto">
    <div class="mt-2 px-2" v-for="(video, index) in videos" :key="index"> 
      <h1 @click="openVideo(video.urlID)" class="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-5 text-left bg-gray-700 dark:bg-slate-300 rounded-lg text-white dark:text-black shadow border-2 border-white hover:bg-transparent dark:hover:bg-slate-900 hover:text-black dark:hover:text-white cursor-pointer hover:border-black dark:hover:border-white w-full">
        <div class="relative">
          <span class="font-mono text-base md:text-xs px-2 py-px absolute bottom-0 right-0 m-3 bg-slate-300 dark:bg-slate-700 rounded-lg text-black dark:text-white">{{ index +1 }}</span>
          <img class="rounded-l-lg h-full w-full" src="@/assets/thunmbs1.jpg" alt="">
        </div>
        <div class="col-span-1 md:col-span-3 p-2 relative">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 absolute bottom-0 md:top-0 right-0 m-4" viewBox="0 0 24 24"><path fill="currentColor" d="m22 10l-.625-1.375L20 8l1.375-.625L22 6l.625 1.375L24 8l-1.375.625L22 10Zm-3-4l-.95-2.05L16 3l2.05-.95L19 0l.95 2.05L22 3l-2.05.95L19 6ZM9 22q-.825 0-1.413-.588T7 20h4q0 .825-.588 1.413T9 22Zm-4-3v-2h8v2H5Zm.25-3q-1.725-1.025-2.738-2.75T1.5 9.5q0-3.125 2.188-5.313T9 2q3.125 0 5.313 2.188T16.5 9.5q0 2.025-1.012 3.75T12.75 16h-7.5Z"/></svg>
          <p class="text-lg md:text-xl font-semibold">{{ video.title }} </p>
          <p class="font-serif my-3">{{ video.description }}</p>
          <span class="px-3 py-1 bg-slate-300 dark:bg-slate-700 rounded-lg text-xs md:text-base float-left md:float-right object-right-bottom text-black dark:text-white font-mono">{{ video.date }}</span>
        </div>
      </h1>
    </div>
  </div>
</template>

<script>
//import axios from 'axios';

export default {
  data() {
    return {
      videos: [
        {
          title: "Football Betting Tips",
          description: "EPL, LaLiga",
          date: "31/01",
          url: "https://player.vimeo.com/video/907940105?h=ca2007cca8",
          urlID: "907940105"
        }
      ]
      //videoUrl: "",
    };
  },
  methods: {
    openVideo(urlID) {
      this.$router.push(`/video/${urlID}`);
    }
  }
}
</script>