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

<section
  id="footer"
  data-scroll-section
  class="wrap sm:max-w-[300px] sm:ml-auto text-3xl w-full sm:px-10 py-36"
>
  <p
    class="text-center sm:ml-auto sm:text-left leading-normal text-6xl sm:break-words text-primary"
  >
    adelodundamilare@gmail.com
  </p>
  <div
    class="flex items-center sm:justify-start sm:items-start sm:flex-col justify-between uppercase mt-32"
  >
    <p>Lagos, NG <span class="text-primary">{todayDate}</span></p>
    <div
      class="flex sm:my-10 sm:flex-wrap sm:items-start sm:space-x-0 sm:space-y-0 items-center space-x-5"
    >
      <Button className="sm:ml-0 sm:mt-0 sm:m-5 " text="Twitter" />
      <Button text="LinkedIn" className="" />
      <Button className="sm:m-0" text="Github" />
    </div>
    <p>credit: seyi.dev</p>
  </div>
</section>
