<script lang="ts">
  export let title: string;
  export let category: string;
  export let link: string;
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
  <p
    class="flex mr-[150px] sm:mr-10 justify-end mt-20 text-sm uppercase whitespace-pre-line"
  >
    {category}
  </p>
  <div
    class={`w-[max-content]  ${
      isReversed ? "sm:ml-auto" : ""
    } sm:w-[300px] sm:flex-col flex group py-10`}
  >
    <a
      href={link}
      target="_blank"
      data-scroll
      data-scroll-direction="horizontal"
      data-scroll-speed={`${isReversed ? "-" : ""}8`}
      class={`uppercase sm:leading-[.9] ${
        isReversed ? "text-right" : "text-left"
      } text-[10em] sm:text-[80px] bold-font mr-2 sm:mx-10 group-hover:text-accent`}
    >
      {title}
    </a>
  </div>
  <div class=" hidden sm:flex mb-10 mr-10">
    <a
      href={link}
      target="_blank"
      class="border-2 border-secondary rounded-full ml-auto text-primary text-3xl px-8 py-4 uppercase"
      >Visit Site
      <i class="las la-long-arrow-alt-right -rotate-45" /></a
    >
  </div>
  {#if showBottomBorder}
    <div class="h-[2px] w-[95%] m-auto block overflow-hidden">
      <div data-scroll class={` block h-[2px] bg-secondary bar`} />
    </div>
  {/if}
</div>

<style>
</style>
