<script lang="ts">
  import { onMount, getContext } from "svelte";
  const { getScroll }: any = getContext("locomotiveScroll");
  const scrollInstance = getScroll();

  let scroll = {
    cache: 0,
    current: 0,
  };

  let hyphenBar: any;

  onMount(() => {
    scrollInstance.on("scroll", (obj: any) => {
      // Find distance between scroll updates
      scroll.current = obj.scroll.y;
      const distance = scroll.current - scroll.cache;
      scroll.cache = scroll.current;
      console.log("something is happening here", distance);

      //
      hyphenBar.style.transform = `${distance}px`;
    });
  });
</script>

<section data-scroll-section>
  <div class="wrap grid grid-cols-3 py-10 text-sm mb-20">
    <div class="flex justify-between">
      <div class="uppercase text-primary">
        <span class="block">Damilare</span>
        <span class="block">Adelodun</span>
      </div>
      <div class="uppercase">
        <span class="block">Frontend Developer</span>
        <span class="block">FOLIO/2021 - 2023</span>
      </div>
    </div>
    <div />
    <div class="flex items-center justify-end">
      <div class="uppercase">
        <span class="block">Available for Freelance</span>
        <span class="block">Work from march 2023</span>
      </div>
      <button
        class="rounded-full transition-all overflow-hidden duration-300 relative flex flex-col items-center border text-3xl ml-10 text-primary uppercase px-4 py-2 hover:text-black hover:bg-accent"
        ><span class="group-hover:-translate-y-12">contact</span><span
          class="font-bold absolute translate-y-8 group-hover:-translate-y-0 text-red-400"
          >contact</span
        ></button
      >
    </div>
  </div>
</section>

<section class="wrap" data-scroll-section>
  <div class="flex items-center">
    <!--  justify-center -->
    <div class="flex p-0 m-0">
      <h1 class="very-big-font">F</h1>
      <h1 class="very-big-font">R</h1>
      <h1 class="very-big-font">O</h1>
      <h1 class="very-big-font">N</h1>
      <h1 class="very-big-font">T</h1>
    </div>
    <div class="flex p-0 m-0 mx-20">
      <div
        class="block bg-secondary h-[30px] w-[330px]"
        bind:this={hyphenBar}
      />
      <!-- <div class="block bg-secondary h-[30px] w-[1080px]" /> -->
    </div>
    <div class="flex p-0 m-0">
      <h1 class="very-big-font">E</h1>
      <h1 class="very-big-font">N</h1>
      <h1 class="very-big-font">D</h1>
    </div>
  </div>
  <div class="flex">
    <div class="flex p-0 m-0">
      <h1 class="very-big-font">D</h1>
      <h1 class="very-big-font">E</h1>
      <h1 class="very-big-font">V</h1>
      <h1 class="very-big-font">E</h1>
      <h1 class="very-big-font">L</h1>
      <h1 class="very-big-font">O</h1>
      <h1 class="very-big-font">P</h1>
      <h1 class="very-big-font">E</h1>
      <h1 class="very-big-font">R</h1>
    </div>
    <div class="px-5 text-primary ml-24 flex flex-col pb-12">
      <div>
        <span class="text-secondary">ABOUT</span> I am a developer based in Lagos,
        Nigeria focused on creating interactive digital experiences on the web, working
        with brands and industry leaders such as DISNEY, PAYSTACK, JELLY, and NULL
        amongst others to achieve this.
      </div>
      <div class="flex justify-between mt-auto items-center">
        <p class="text-secondary">Scroll down</p>
        <svg
          width="20"
          height="21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M10.833 13.977l4.47-4.47 1.179 1.178L10 17.167l-6.482-6.482 1.179-1.178 4.47 4.47V3.833h1.666v10.144z"
            fill="#777"
          /></svg
        >
      </div>
    </div>
  </div>
</section>
