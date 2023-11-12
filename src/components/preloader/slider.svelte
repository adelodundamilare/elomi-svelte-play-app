<script lang="ts" context="module">
  import { isLoadingPreloader } from "../../store";
  import gsap from "gsap";

  let body: any;
  let count = 0;

  interface IImage {
    src: string;
    id: string;
  }
  const images: IImage[] = [
    { id: "th", src: "/images/th.jpeg" },
    { id: "th2", src: "/images/th2.jpeg" },
  ];

  export const init = () => {
    const tl = gsap.timeline({});

    tl.to(body, {
      opacity: 1,
    });

    const interval = setInterval(() => {
      const item: IImage = images[count];

      if (item === undefined) {
        clearInterval(interval);
        addLastOverlay(tl);
        return;
      }

      removeFirstOverlay(tl);

      if (count > 0) {
        tl.to(`#${item.id}`, {
          y: -500,
        });
      }

      count++;
    }, 200);
  };

  const removeFirstOverlay = (tl: gsap.core.Timeline) => {
    tl.to("#first-overlay", {
      y: -500,
      duration: 1,
    });
  };

  const addLastOverlay = (tl: gsap.core.Timeline) => {
    tl.to("#last-overlay", {
      y: -500 * count,
      duration: 1,

      onComplete: () => {
        gsap.delayedCall(1, removePreloader);
      },
    });
  };

  const removePreloader = () => {
    isLoadingPreloader.set(false);
  };
</script>

<div
  bind:this={body}
  class="w-[350px] relative opacity-0 h-[500px] bg-black overflow-hidden"
>
  <div
    id="first-overlay"
    class="overlay-img z-10 bg-black absolute w-full h-full"
  />
  {#each images as image}
    <img
      id={image.id}
      class="object-cover w-full h-full"
      src={image.src}
      alt=""
    />
  {/each}
  <div id="last-overlay" class="overlay-img bg-black w-full h-full" />
</div>

<style></style>
