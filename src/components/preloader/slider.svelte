<script lang="ts" context="module">
  import gsap from "gsap";
  import { browser } from "$app/environment";

  //
  import { isLoadingPreloader } from "../../store";

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

  const computeMobileHeight = (): number => {
    return 85 * (window.screen.height / 100);
  };

  let isMobile = false;
  let height = 500;
  const heightMobile = "84svh";

  if (browser) {
    isMobile = window.innerWidth < 500;
    height = isMobile ? computeMobileHeight() : height;
  }

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
          y: isMobile ? `-${heightMobile}` : -height,
          ease: "power3.in",
        });
      }

      // if (count == images.length - 1) {
      //   return;
      // }

      count++;
    }, 200);
  };

  const removeFirstOverlay = (tl: gsap.core.Timeline) => {
    tl.to("#first-overlay", {
      y: isMobile ? `-${heightMobile}` : -height,
      duration: 1,
      ease: "power3.in",
    });
  };

  const addLastOverlay = (tl: gsap.core.Timeline) => {
    tl.to("#last-overlay", {
      y: isMobile ? `-${heightMobile}` : -height * count,
      duration: 1,
      ease: "power3.in",

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
  class={`w-[350px] sm:w-full relative opacity-0 h-[500px] sm:h-[84svh] bg-black overflow-hidden`}
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
