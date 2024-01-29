<template>
  <div class="bg-slate-200 dark:bg-slate-900 dark:text-white min-h-screen text-center pt-5 transition duration-700 ease-in-out ">
    <div class="grid grid-cols-2 mx-auto max-w-xl mt-5 mb-10">
      <div>
        <h1 class="text-base text-slate-800 dark:text-slate-500 font-semibold text-left"><span @click="$router.push('/')" class="text-black hover:underline cursor-pointer font-bold text-xl dark:text-white mt-2 mx-2">Elvizo</span> Football betting tips</h1>
      </div>
      <div class="text-right">
          <!-- <svg  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
         <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg> -->
        <svg v-if='theme ==="light"'  @click="themeDark" class="w-6 h-6 inline cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7M9 21v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1m3-17a5 5 0 0 0-5 5c0 2.05 1.23 3.81 3 4.58V16h4v-2.42c1.77-.77 3-2.53 3-4.58a5 5 0 0 0-5-5"/>
        </svg>
        <!-- <svg v-else  @click="themeLight" class="w-10 h-10 inline cursor-crosshair p-2 hover:text-black hover:bg-white rounded-lg" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
         <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
        </svg> -->
        <svg v-else  @click="themeLight" class="w-6 h-6 inline cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 6a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V19a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1.8c-1.79-1.04-3-2.98-3-5.2a6 6 0 0 1 6-6m2 15v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1zm6-10h3v2h-3zM1 11h3v2H1zM13 1v3h-2V1zM4.92 3.5l2.13 2.14l-1.42 1.41L3.5 4.93zm12.03 2.13l2.12-2.13l1.43 1.43l-2.13 2.12z"/>
        </svg>
      </div>
    </div>
    <router-view></router-view>
    <h1 class="py-3">Copyright <span class="font-mono">2024</span> © <span class="cursor-pointer hover:underline font-semibold">MatchCorner</span></h1>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      theme : ""
    }
  },
  methods : {
    // Theme action
    themeLight() {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      this.theme = "light";
    },
    themeDark() {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      this.theme = "dark";
    },
  },
  mounted() {
    //theme setup
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      this.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      this.theme = "light";
    }
  }
}
</script>

<style>
</style>
