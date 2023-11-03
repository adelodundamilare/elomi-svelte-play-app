<script lang="ts">
  const items: string[] = [
    "Awwwards - Site of the Day (x2)",
    "Awwwards - Developer Award (x2)",
    "Awwwards - Jury Member 2023",
    "MUZLI",
  ];
</script>

<section data-scroll-section class="max-w-[1000px] mx-auto mt-36 mb-[500px]">
  <div class="flex">
    <div class="w-2/3">
      <h5 class="uppercase text-sm mb-10">Awards X <br />Recognition</h5>
      <div class="max-w-[450px]">
        {#each items as item}
          <p
            data-scroll
            class="border-t border-primary py-5 text-primary the-item"
          >
            {item}
          </p>
        {/each}
      </div>
    </div>
    <div class="w-1/3">
      <div data-scroll class="the-item">
        <h5 class="uppercase text-sm mb-10">Interest</h5>
        <p class="text-primary">
          Art Direction, Brand Strategy, Creative Development, E-Commerce,
          Webflow, 3D/Augmented Reality, Web3
        </p>
        <a
          href="https://github.com/adelodundamilare"
          class="uppercase block"
          target="_blank">See my Github</a
        >
      </div>
      <div data-scroll class="mt-24 the-item">
        <h5 class="uppercase text-sm mb-10">Icebreaker</h5>
        <p class="text-primary">
          I listen to Electronic and Alt music all the time, you can see what
          I'm currently listening to on this <a
            href="https://google.com"
            class="text-secondary text-md hover:text-accent">MICROSITE</a
          >. I like traveling and good food (work with me so I can fund this).
          <a class="text-secondary text-md hover:text-accent" href="footer"
            >GET IN TOUCH</a
          > to know more about me.
        </p>
      </div>
    </div>
  </div>
</section>
