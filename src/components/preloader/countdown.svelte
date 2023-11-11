<script lang="ts" context="module">
  import gsap from "gsap";
  import * as slider from "./slider.svelte";

  let current3: any;
  let current2: any;
  let current1: any;

  let next3: any;
  let next2: any;
  let next1: any;

  export const progressCountDown = () => {
    const tl = gsap.timeline({});
    const progressChunk: string[] = [
      "0",
      "5",
      "10",
      "15",
      "21",
      "26",
      "31",
      "36",
      "42",
      "47",
      "52",
      "57",
      "63",
      "68",
      "73",
      "78",
      "84",
      "89",
      "94",
      "100",
    ];

    let current: number = 0;
    const intervalDuration: number = 350;
    const ease: string = "none";
    const delay: number = 0.0;
    const tweenDuration: number = intervalDuration / 1000;

    let intervalId = setInterval(() => {
      current++;
      const item = progressChunk[current];

      if (!item) {
        clearInterval(intervalId);
        return;
      }

      if (item.length === 1) {
        tl.call(
          () => {
            next1.innerText = item;
            current1.innerText = item;
          },
          []
          //   ">"
        );
        tl.to([current1, next1], {
          y: -100,
          opacity: 1,
          duration: tweenDuration,
          delay: delay,
          ease: ease,
          onComplete: () => {},
        });
      } else if (item.length === 2) {
        tl.call(
          () => {
            next1.innerText = item[1];
            next2.innerText = item[0];
            current1.innerText = item[1];
            current2.innerText = item[0];
          },
          []
          //   ">"
        );
        tl.to([current1, current2, next1, next2], {
          y: -100,
          opacity: 1,
          delay: delay,
          duration: tweenDuration,
          clearProps: "all",
          ease: ease,
        });
      } else if (item.length === 3) {
        tl.call(
          () => {
            next1.innerText = item[2];
            next2.innerText = item[1];
            next3.innerText = item[0];
          },
          []
          //   ">"
        );
        tl.to([current1, current2, current3, next1, next2, next3], {
          y: -100,
          opacity: 1,
          delay: delay,
          duration: tweenDuration,
          ease: ease,
          onComplete: () => {
            gsap.delayedCall(0, slider.init);
          },
        });
      }
    }, intervalDuration);
  };
</script>

<div class="relative overflow-hidden">
  <h2 class="invisible">
    <span class="text-[100px] leading-none font-frances text-white">'</span>
    <span class="text-[100px] leading-none font-frances text-white">0</span>
    <span class="text-[100px] leading-none font-frances text-white">0</span>
    <span class="text-[100px] leading-none font-frances text-white">0</span>
  </h2>
  <div class="absolute top-0 swipe-this">
    <div class="flex">
      <span class="text-[100px] leading-none font-frances text-white">'</span>
      <span
        bind:this={current3}
        class="text-[100px] leading-none font-frances text-white">0</span
      >
      <span
        bind:this={current2}
        class="text-[100px] leading-none font-frances text-white">0</span
      >
      <span
        bind:this={current1}
        class="text-[100px] leading-none font-frances text-white">0</span
      >
    </div>
    <div class="flex">
      <span class="text-[100px] leading-none font-frances text-white">'</span>
      <span
        bind:this={next3}
        class="text-[100px] leading-none font-frances text-white">0</span
      >
      <span
        bind:this={next2}
        class="text-[100px] leading-none font-frances text-white">2</span
      >
      <span
        bind:this={next1}
        class="text-[100px] leading-none font-frances text-white">1</span
      >
    </div>
  </div>
</div>

<style>
  .swipe-this {
    transition: all ease-in-out 0.2s;
    transform: translateY(0);
  }
</style>
