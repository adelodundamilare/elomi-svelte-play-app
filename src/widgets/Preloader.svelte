<script lang="ts">
  import { onMount } from "svelte";
  import Countdown, {
    progressCountDown,
  } from "../components/preloader/countdown.svelte";
  import Slider from "../components/preloader/slider.svelte";

  onMount(() => {
    progressCountDown();
  });
</script>

<div
  id="preloader"
  class="w-screen h-screen fixed z-10 bg-black overflow-hidden"
>
  <div class="w-full h-full flex justify-center relative">
    <div class="flex items-center justify-center"><Countdown /></div>
    <div class="absolute m-5 top-0"><Slider /></div>
  </div>
  <!--  -->
  <div class="absolute sm:left-5 sm:bottom-[5vh] left-[100px] bottom-[100px]">
    <h3 class="text-primary text-[50px] leading-[.8em]">
      DAMI <br />LARE
    </h3>
  </div>
</div>
