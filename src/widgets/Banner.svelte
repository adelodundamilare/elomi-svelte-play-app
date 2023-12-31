<script lang="ts">
  import { onMount, getContext } from "svelte";
  import gsap from "gsap";
  //
  import Button from "./Button.svelte";
  import BannerLink from "../components/banner-link.component.svelte";
  //
  const { getScroll }: any = getContext("locomotiveScroll");
  const scrollInstance = getScroll();

  let scaleBar: any;
  let dami: any;
  let lare: any;

  const scaleBarFunc = (progress: number) => {
    scaleBar.style.transform = `scale(${1.05 + progress}, 1)`;
  };

  const calcTextSwipe = (progress: number, goLeft?: boolean): string => {
    let res: number = 20.05 * progress * 10;
    if (goLeft) {
      res *= -1; //or res = res*-1
    }
    return res + "px";
  };

  const damiFunc = (progress: number) => {
    dami.style.transform = `translateX(${calcTextSwipe(progress, true)})`;
  };

  const lareFunc = (progress: number) => {
    lare.style.transform = `translateX(${calcTextSwipe(progress)})`;
  };

  const animateWithGsap = () => {
    const tl = gsap.timeline({});
    // animate top-bar
    tl.to("#top-bar", {
      y: 0,
      opacity: 1,
      delay: 0,
      // clearProps: "transform",
      duration: 0.3,
      ease: "none",
    });
    // animate mobile-banner
    tl.to("#mobile-banner", {
      y: 0,
      opacity: 1,
      delay: 0.2,
      duration: 0.3,
      ease: "none",
    });
    // animate firstname
    tl.to("#firstname", {
      y: 0,
      opacity: 1,
      delay: 0.2,
      duration: 0.3,
      ease: "none",
    });
    // animate lastname
    tl.to("#lastname", {
      y: 0,
      opacity: 1,
      delay: 0.2,
      duration: 0.3,
      ease: "none",
    });
  };

  onMount(() => {
    // check if is in view
    animateWithGsap();
    scrollInstance.on("scroll", ({ limit, scroll }: any) => {
      const progress = (scroll.y / limit.y) * 10;
      scaleBarFunc(progress);
      damiFunc(progress);
      lareFunc(progress);
    });
  });
</script>

<section data-scroll-section>
  <div
    id="top-bar"
    class="wrap grid grid-cols-3 py-10 text-sm mb-20 opacity-0 translate-y-[-100px]"
  >
    <div class="uppercase">
      <span class="block">Software Engineer</span>
      <span class="block">ELOMI/2021 - 2023</span>
    </div>
    <div />
    <div
      class="flex sm:flex-col sm:items-start sm:justify-start items-center justify-end"
    >
      <div class="uppercase">
        <span class="block">Available for Freelance</span>
        <span class="block">Work from Dec. 2023</span>
      </div>
      <Button text="contact" className="sm:m-0 sm:mt-5" />
    </div>
  </div>
</section>

<section class="wrap -mt-10 mb-24" data-scroll-section>
  <div class="sm:hidden">
    <div id="firstname" class="opacity-0 translate-y-[100px]">
      <div class="flex items-center justify-between w-full">
        <div bind:this={dami} class="flex p-0 m-0">
          <h1 class="very-big-font">D</h1>
          <h1 class="very-big-font">A</h1>
          <h1 class="very-big-font">M</h1>
          <h1 class="very-big-font">I</h1>
        </div>
        <div
          bind:this={scaleBar}
          class={`block mx-10 bg-secondary h-[30px] w-[330px]`}
        />
        <div class="flex p-0 m-0" bind:this={lare}>
          <h1 class="very-big-font">L</h1>
          <h1 class="very-big-font">A</h1>
          <h1 class="very-big-font">R</h1>
          <h1 class="very-big-font">E</h1>
        </div>
      </div>
    </div>
    <div id="lastname" class="opacity-0 translate-y-[100px]">
      <div class="flex">
        <div class="flex p-0 m-0">
          <h1 class="very-big-font">A</h1>
          <h1 class="very-big-font">D</h1>
          <h1 class="very-big-font">E</h1>
          <h1 class="very-big-font">L</h1>
          <h1 class="very-big-font">O</h1>
          <h1 class="very-big-font">D</h1>
          <h1 class="very-big-font">U</h1>
          <h1 class="very-big-font">N</h1>
        </div>
        <div class="text-primary ml-12 grid grid-cols-2 pb-12">
          <div class="pr-12">
            <span class="text-secondary">ABOUT</span> I am a developer based in
            Lagos, Nigeria focused on creating interactive digital experiences
            on the web and mobile.<br /><br />I am a fast learner and can work
            with any tool, library or programming language to get any kind of
            work done.
          </div>
          <div class="flex flex-col">
            <div>
              <BannerLink
                text="+234 809 986 8604"
                iconClass="lab la-whatsapp"
              />
              <BannerLink
                text="adelodundamilare@gmail.com"
                iconClass="lar la-envelope"
              />
              <BannerLink
                text="adelodundamilare"
                link="https://github.com/adelodundamilare"
                iconClass="lab la-github"
              />
            </div>
            <div class="flex justify-between mt-auto items-center">
              <p class="text-secondary">Scroll down</p>
              <svg
                width="20"
                height="21"
                class="scroll-down-animation"
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
      </div>
    </div>
  </div>
  <!-- mobile -->
  <div class="sm:block hidden">
    <div id="mobile-banner" class="opacity-0 translate-y-[100px]">
      <h1 class="very-big-font">DAMI</h1>
      <div class="flex p-0 m-0 items-center">
        <div class={`block mr-10 bg-secondary h-[20px] w-[130px]`} />
        <h1 class="very-big-font">LARE</h1>
      </div>
      <h1 class="very-big-font sm:break-words">
        ADE<br />LODUN
      </h1>
      <div class="max-w-[250px] ml-auto sm:block hidden">
        <div class="text-primary pb-12">
          <span class="text-secondary">ABOUT</span> I am a developer based in
          Lagos, Nigeria focused on creating interactive digital experiences on
          the web and mobile.<br /><br />I am a fast learner and can work with
          any tool, library or programming language to get any kind of work
          done.
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .scroll-down-animation {
    animation: my-scroll 1.5s ease-in-out infinite;
  }

  @keyframes my-scroll {
    100% {
      transform: translateY(-10px);
    }
  }
</style>
