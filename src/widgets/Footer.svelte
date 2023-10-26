<script lang="ts">
  import Button from "./Button.svelte";

  let todayDate = new Date().toLocaleTimeString([], { timeStyle: "short" });
</script>

<section data-scroll-section class="wrap w-full border-t-2 py-36">
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
