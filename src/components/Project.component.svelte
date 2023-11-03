<script lang="ts">
  export let title: string;
  export let category: string;
  export let isReversed: boolean = false;
  export let showBottomBorder: boolean = false;
</script>

<!--  -->
<div>
  <div
    data-scroll-speed={`${isReversed ? "-" : ""}8`}
    class="h-[2px] m-auto w-[95%] overflow-hidden"
  >
    <div
      data-scroll
      class={`${
        isReversed ? "from-left" : "from-right"
      } block h-[2px] bg-secondary bar`}
    />
  </div>
  <p class="max-w-2xl ml-auto mt-20 text-sm uppercase whitespace-pre-line">
    {category}
  </p>
  <div class="w-[max-content] flex group py-10">
    <p
      data-scroll
      data-scroll-direction="horizontal"
      data-scroll-speed={`${isReversed ? "-" : ""}8`}
      class="uppercase text-[10em] bold-font mr-2 group-hover:text-accent"
    >
      {title}
    </p>
  </div>
  {#if showBottomBorder}
    <div class="h-[2px] w-[95%] m-auto block overflow-hidden">
      <div data-scroll class={` block h-[2px] bg-secondary bar`} />
    </div>
  {/if}
</div>

<style>
</style>
