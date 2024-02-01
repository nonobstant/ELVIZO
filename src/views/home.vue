<template>
  <div class=" w-full md:max-w-lg mx-auto">
    <div class="mt-6 px-2" v-for="(video, index) in videos" :key="index"> 
      <h1 @click="openVideo(video.uuid)" class="grid grid-cols-2 md:grid-cols-6 text-left bg-gray-700 dark:bg-slate-300 rounded-none md:rounded-lg text-white dark:text-black shadow ring-4 ring-slate-800 dark:ring-slate-200 hover:bg-transparent dark:hover:bg-slate-900 hover:text-black dark:hover:text-white cursor-pointer hover:border-black dark:hover:border-white w-full">
        <div class="relative col-span-1 md:col-span-2 border-r-4 border-slate-800 dark:border-slate-200">
          <img class="rounded-none md:rounded-l-lg h-full w-full" :src="getThumbnail(video)" alt="">
        </div>
        <div class="col-span-1 md:col-span-4 relative shadow">
          <p class="py-1 align-bottom font-bold bg-slate-200 dark:bg-slate-900 rounded-none md:rounded-tr-lg text-base text-center object-right-bottom text-slate-800 dark:text-slate-200 font-mono">{{ video.date }}</p>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 absolute bottom-0 right-0 m-4" viewBox="0 0 24 24"><path fill="currentColor" d="m22 10l-.625-1.375L20 8l1.375-.625L22 6l.625 1.375L24 8l-1.375.625L22 10Zm-3-4l-.95-2.05L16 3l2.05-.95L19 0l.95 2.05L22 3l-2.05.95L19 6ZM9 22q-.825 0-1.413-.588T7 20h4q0 .825-.588 1.413T9 22Zm-4-3v-2h8v2H5Zm.25-3q-1.725-1.025-2.738-2.75T1.5 9.5q0-3.125 2.188-5.313T9 2q3.125 0 5.313 2.188T16.5 9.5q0 2.025-1.012 3.75T12.75 16h-7.5Z"/></svg>
          <p class="text-lg md:text-xl font-semibold mt-4 ml-3">{{ video.title }} </p>
          <p class="font-serif my-2 ml-3">{{ video.description }}</p>
        </div>
      </h1>
      <div v-if="index == 0" class="flex justify-between my-6">
        <a href="https://refpaiozdg.top/L?tag=d_3139711m_25437c_&site=3139711&ad=25437" class="px-2 rounded-lg font-semibold py-1 border-4 border-slate-800 dark:border-slate-200 hover:bg-slate-800 cursor-pointer hover:text-slate-200 dark:hover:bg-slate-200 dark:hover:text-slate-800">OVER ONE GOAL BET</a>
        <a href="https://refpaiozdg.top/L?tag=d_3139711m_25437c_&site=3139711&ad=25437" class="px-2 rounded-lg py-1 border-4 border-slate-800 dark:border-slate-200 hover:bg-slate-800 cursor-pointer hover:text-slate-200 dark:hover:bg-slate-200 dark:hover:text-slate-800">PROMO CODE: <span class="font-mono font-semibold">ELVIZO</span></a>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from 'axios';
import { mapState } from 'vuex'

export default {
  data() {
    return {
      // my data
    };
  },
  computed: {
    ...mapState(['videos'])
  },
  methods: {
    openVideo(uuid) {
      this.$router.push(`/video/${uuid}`);
    },
    getThumbnail(video) {
    return '/' + video.thumbnail;
  }
  }
}
</script>