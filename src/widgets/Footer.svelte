<script lang="ts">
  import { onMount } from "svelte";
  import Button from "./Button.svelte";

  let todayDate: any;

  onMount(() => {
    //intervals functions
    const interval = setInterval(() => {
      // $: todayDate = new Date().toLocaleTimeString([], { timeStyle: "short" });
      todayDate = new Date().toLocaleTimeString([], { timeStyle: "short" });
    }, 1000);
    //If a function is returned from onMount, it will be called when the component is unmounted.
    return () => clearInterval(interval);
  });
</script>

<section id="footer" data-scroll-section class="wrap w-full py-36">
  <p class="text-center text-6xl text-primary">adelodundamilare@gmail.com</p>
  <div class="flex items-center justify-between uppercase mt-32">
    <p>Lagos, NG <span class="text-primary">{todayDate}</span></p>
    <div class="flex items-center space-x-5">
      <Button text="Twitter" /><Button text="LinkedIn" /><Button
        text="Github"
      />
    </div>
    <p>credit: seyi.dev</p>
  </div>
</section>
