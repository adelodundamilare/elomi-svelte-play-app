<script lang="ts">
  export let title: string;
  export let category: string;
  export let isReversed: boolean = false;
</script>

<!--  -->
<div
  data-scroll-speed={`${isReversed ? "-" : ""}8`}
  class="mx-10 h-[2px] w-full block bg-secondary"
/>
<p class="max-w-2xl ml-auto mt-20 text-sm uppercase whitespace-pre-line">
  {category}
</p>
<div class="w-[max-content] flex group py-10">
  <p
    data-scroll
    data-scroll-direction="horizontal"
    data-scroll-speed={`${isReversed ? "-" : ""}8`}
    class="uppercase text-[10em] bold-font tracking-tighter mr-2 group-hover:text-accent"
  >
    {title}
  </p>
</div>
<!-- <div class="wrap-m w-full h-[1px] block bg-secondary" /> -->
