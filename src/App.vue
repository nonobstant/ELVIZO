<template>
  <div class="bg-slate-200 dark:bg-slate-900 dark:text-white min-h-screen text-center pt-5 transition duration-700 ease-in-out ">
    <header class="flex justify-between mx-auto max-w-xl mt-5 mb-10">
      <div class=" mx-2 mt-1 md:mt-0">
        <h1 class="text-sm md:text-base text-slate-800 dark:text-slate-500 font-semibold text-left"><span @click="$router.push('/')" class="text-black hover:underline cursor-pointer font-bold text-base md:text-xl dark:text-white mt-2 mx-2 underline-offset-4">ELVIZO</span> Football Betting Analytics</h1>
      </div>
      <a href="https://www.youtube.com/@ELVIZO" class="text-right mx-4 md:mx-0 cursor-pointer flex">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 inline md:hidden text-red-600 align-top" viewBox="0 0 24 24">
          <path fill="currentColor" d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765c1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831M9.996 15.005l.005-6l5.207 3.005z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="hidden md:inline w-24" viewBox="0 0 512 116">
          <path class="fill-red-600" d="M159.89 17.93a20.552 20.552 0 0 0-14.471-14.47C132.73 0 81.666 0 81.666 0S30.6.105 17.913 3.565a20.552 20.552 0 0 0-14.47 14.47c-3.838 22.545-5.327 56.896.105 78.538a20.552 20.552 0 0 0 14.47 14.47c12.688 3.46 63.753 3.46 63.753 3.46s51.065 0 63.753-3.46a20.552 20.552 0 0 0 14.47-14.47c4.047-22.576 5.295-56.906-.105-78.642"/>
          <path class="fill-slate-200 dark:fill-slate-900" d="m65.413 81.788l42.362-24.536l-42.362-24.537z"/>
          <path class="fill-slate-900 dark:fill-slate-300" d="M491.237 33.24c5.557 0 9.751 1.048 12.687 3.04c2.936 1.993 5.034 5.138 6.292 9.438c1.258 4.299 1.782 10.17 1.782 17.72v12.269H485.05v3.774l.42 10.381c.314 2.307.839 3.985 1.677 5.033c.84 1.049 2.202 1.573 3.985 1.573c2.412 0 4.09-.943 4.928-2.83c.944-1.888 1.363-5.034 1.468-9.333l13.946.839c.105.629.105 1.468.105 2.516c0 6.606-1.783 11.535-5.453 14.785c-3.67 3.25-8.703 4.928-15.309 4.928c-7.969 0-13.526-2.516-16.672-7.444C471 95 469.322 87.24 469.322 76.86V64.172c.356-17.825 3.491-30.88 21.915-30.932m-193.88 1.363v52.533c0 3.146.314 5.453 1.048 6.816c1.489 2.915 5.348 2.17 7.445.734a8.389 8.389 0 0 0 2.831-3.25V34.602h16.043v71.617h-12.583l-1.363-8.808h-.314c-3.46 6.606-8.599 9.961-15.414 9.961c-10.49-.026-13.057-7.584-13.668-15.26l-.04-.541a65.277 65.277 0 0 1-.133-3.492V34.603zm82.732 0v52.533c0 3.146.314 5.453 1.048 6.816c1.49 2.915 5.348 2.17 7.445.734a8.389 8.389 0 0 0 2.831-3.25V34.602h16.043v71.617h-12.583l-1.363-8.808h-.314c-3.46 6.606-8.599 9.961-15.414 9.961c-10.49-.026-13.057-7.584-13.668-15.26l-.04-.541a65.278 65.278 0 0 1-.133-3.492V34.603zM250.8 33.24c5.243 0 9.542 1.048 12.688 3.25c3.145 2.202 5.557 5.558 7.025 10.171c1.468 4.614 2.202 10.8 2.202 18.455v10.38c0 7.655-.734 13.737-2.202 18.35c-1.468 4.615-3.775 7.97-7.025 10.172c-3.25 2.097-7.655 3.25-13.107 3.25c-5.663.105-10.067-1.048-13.317-3.145c-3.25-2.202-5.558-5.558-6.92-10.171c-1.364-4.614-1.993-10.696-1.993-18.35V65.22c0-7.655.734-13.946 2.307-18.56c1.573-4.718 3.984-8.074 7.34-10.17c3.355-2.098 7.654-3.251 13.002-3.251m181.822-28.73v37.748h.105c1.468-2.726 3.355-4.928 5.977-6.606a14.785 14.785 0 0 1 8.283-2.516c3.88 0 6.816 1.048 9.018 3.04c2.202 2.098 3.775 5.348 4.718 9.857c.915 4.368 1.435 10.409 1.467 18.027l.001.743v11.324c0 10.59-1.363 18.455-3.88 23.488c-2.62 5.033-6.605 7.55-12.058 7.55c-3.04 0-5.767-.734-8.283-2.097a14.68 14.68 0 0 1-5.35-5.392l-.208-.376h-.314l-1.678 6.816h-13.317V4.51zm-64.173 3.67V21.18h-15.938v85.039h-15.728V21.181H320.74V8.18zm-172.909 0l.01.04c.153.681 2.273 10.106 4.605 21.087l.184.87l.278 1.315l.186.883l.093.443l.186.888l.093.445l.185.891l.27 1.303c1.575 7.604 3.078 15.23 3.977 20.698h.42c.861-4.905 2.112-11.182 3.446-17.591l.35-1.674c.176-.838.352-1.676.53-2.512l.274-1.297a2039.272 2039.272 0 0 1 5.597-25.444l.03-.135l.048-.21h16.043l-18.56 66.165v31.771h-15.833V74.448h-.105l-18.35-66.27zm54.945 36.175c-2.202 0-3.67 1.154-4.613 3.566c-.944 2.411-1.363 6.081-1.363 11.22v22.334c0 5.243.419 9.122 1.258 11.43c.839 2.306 2.412 3.46 4.718 3.46c2.202 0 3.775-1.154 4.719-3.46c.944-2.308 1.363-6.187 1.363-11.43V59.139c0-5.138-.42-8.913-1.363-11.22c-.944-2.411-2.517-3.565-4.719-3.565m184.968 2.098c-1.278 1.18-2.187 2.635-2.728 4.454l-.103.369v40.684c1.3 2.202 3.146 3.67 6.396 3.775c1.678 0 3.04-.629 4.09-1.887c1.048-1.258 1.782-3.356 2.201-6.292c.403-2.818.613-6.7.629-11.644v-9.956c0-5.662-.21-9.961-.524-13.002c-.42-3.041-.943-5.243-1.887-6.501c-1.825-2.622-5.767-2.59-8.074 0m55.47-2.412c-1.783.105-3.042.629-3.776 1.573c-.838 1.048-1.363 2.621-1.677 4.928c-.309 2.26-.415 10.16-.42 10.476v5.148h11.744v-4.54v.087c-.007 1.587-.04-.921-.112-4l-.01-.414c-.066-2.706-.162-5.723-.297-6.757c-.315-2.412-.84-4.09-1.678-5.033c-.839-.944-2.097-1.468-3.775-1.468"/>
        </svg>
      </a>
    </header>
    <router-view></router-view>
    <footer class="mt-6">
      <svg v-if='theme ==="light"'  @click="themeDark" class="w-6 h-6 inline cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7M9 21v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1m3-17a5 5 0 0 0-5 5c0 2.05 1.23 3.81 3 4.58V16h4v-2.42c1.77-.77 3-2.53 3-4.58a5 5 0 0 0-5-5"/>
      </svg>
      <svg v-else  @click="themeLight" class="w-6 h-6 inline cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 6a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V19a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1.8c-1.79-1.04-3-2.98-3-5.2a6 6 0 0 1 6-6m2 15v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1zm6-10h3v2h-3zM1 11h3v2H1zM13 1v3h-2V1zM4.92 3.5l2.13 2.14l-1.42 1.41L3.5 4.93zm12.03 2.13l2.12-2.13l1.43 1.43l-2.13 2.12z"/>
      </svg>
      <h1 class=" mt-5">www.elvizo.net <a href="/privacy-policy" class="cursor-pointer inline hover:underline underline-offset-4 font-semibold">Privacy Policy</a> page</h1>
      <h1 class="py-2">Copyright <span class="font-mono">2024</span> @<a href="https://www.youtube.com/@ELVIZO" class="cursor-pointer inline hover:underline underline-offset-4 font-semibold">ELVIZO</a></h1>
    </footer>
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
      (!("theme" in localStorage))
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
