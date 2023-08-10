<script>
  // @ts-ignore
  import LocomotiveScrollProvider from "svelte-locomotive-scroll";
  import "locomotive-scroll/src/locomotive-scroll.scss";

  import "../app.css";
</script>

<LocomotiveScrollProvider
  options={{
    smooth: true,
    smoothMobile: false,
    getDirection: true,
    getSpeed: true,
    inertia: 0.5,
  }}
>
  <main data-scroll-container>
    <slot />
  </main>
</LocomotiveScrollProvider>
