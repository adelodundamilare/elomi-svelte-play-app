<script lang="ts" context="module">
  import gsap from "gsap";
  import * as slider from "./slider.svelte";

  const progressChunk: string[] = [
    "000",
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

  const getDigit0 = (item: string): string => {
    if (item.length > 0) {
      return item[item.length - 1];
    }
    return item;
  };

  const getDigit1 = (item: string): string => {
    if (item.length > 1) {
      return item[item.length - 2];
    }
    return "0";
  };

  const getDigit2 = (item: string): string => {
    if (item.length > 2) {
      return item[item.length - 3];
    }
    return "0";
  };

  const animate = (tl: gsap.core.Timeline, list: any[], onCallback?: any) => {
    tl.to(list, {
      y: "+=-100",
      opacity: 1,
      delay: 0,
      duration: 0.3,
      //   clearProps: "all",
      ease: "none",
      onComplete: onCallback, //check if is function
    });
  };

  export const progressCountDown = () => {
    const tl = gsap.timeline({});

    let current: number = 0;
    const intervalDuration: number = 200;

    let intervalId = setInterval(() => {
      current++;
      const item = progressChunk[current];
      let currentItem = progressChunk[current - 1];

      if (!item) {
        clearInterval(intervalId);
        return;
      }

      const first1 = `#item-${progressChunk[0]} #next1`;
      const first2 = `#item-${progressChunk[0]} #next2`;
      const first3 = `#item-${progressChunk[0]} #next3`;

      const current1 = !currentItem ? "" : `#item-${currentItem} #next1`;
      const current2 = !currentItem ? "" : `#item-${currentItem} #next2`;
      const current3 = !currentItem ? "" : `#item-${currentItem} #next3`;

      const next1 = `#item-${item} #next1`;
      const next2 = `#item-${item} #next2`;
      const next3 = `#item-${item} #next3`;

      if (current - 1 == 0) {
        animate(tl, [first1, first2, first3]);
      }
      if (item.length === 1) {
        animate(tl, [current1, next1]);
      }
      if (item.length === 2) {
        const list = [first1, first2, current1, next1, next2];
        if (item.length === currentItem.length) {
          list.push(current2);
        }
        animate(tl, list);
      }
      if (item.length === 3) {
        const list = [
          first1,
          first2,
          first3,
          current1,
          current2,
          next1,
          next2,
          next3,
        ];
        if (item.length === currentItem.length) {
          list.push(current3);
        }
        animate(tl, list, () => gsap.delayedCall(0, slider.init));
      }
    }, intervalDuration);
  };
</script>

<div class="relative overflow-hidden">
  <div class="swipe-this">
    <div class="flex">
      <span class="text-[100px] leading-none font-frances text-white">'</span>
      <span class="invisible text-[100px] leading-none font-frances text-white"
        >0</span
      >
      <span class="invisible text-[100px] leading-none font-frances text-white"
        >0</span
      >
      <span class="invisible text-[100px] leading-none font-frances text-white"
        >0</span
      >
    </div>
    <div class="relative">
      {#each progressChunk as item}
        <div id={`item-${item}`} class="flex absolute">
          <span class="text-[100px] leading-none font-frances text-white"
            >'</span
          >
          <span
            id="next3"
            class="text-[100px] leading-none font-frances text-white"
            >{getDigit2(item)}</span
          >
          <span
            id="next2"
            class="text-[100px] leading-none font-frances text-white"
            >{getDigit1(item)}</span
          >
          <span
            id="next1"
            class="text-[100px] leading-none font-frances text-white"
            >{getDigit0(item)}</span
          >
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .swipe-this {
    transition: all ease-in-out 0.2s;
    transform: translateY(0);
  }
</style>
