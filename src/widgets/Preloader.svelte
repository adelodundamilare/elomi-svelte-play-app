<script lang="ts">
  import { onMount } from "svelte";
  import { DefaultLoadingManager } from "three";

  onMount(() => {
    DefaultLoadingManager.onProgress = ({
      url,
      itemsLoaded,
      itemsTotal,
    }: any) => {
      console.log("hello");
      console.log({ url, itemsLoaded, itemsTotal });
      console.log("hello world", url);
    };
  });
</script>

<div class="w-screen h-screen fixed z-10 bg-black overflow-hidden">
  <div class="w-full h-full flex items-center justify-center">
    <h2 class="text-[200px]">"001</h2>
  </div>
  <!--  -->
  <div class="absolute left-[100px] bottom-[100px]">
    <h3 class="text-primary text-[50px] leading-[.8em]">
      DAMILARE <br />ADELODUN
    </h3>
  </div>
</div>
