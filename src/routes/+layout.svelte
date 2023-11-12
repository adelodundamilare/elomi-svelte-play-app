<script context="module" lang="ts">
  export const removePreloader = () => {
    isLoadingPreloader.set(false);
  };
</script>

<script lang="ts">
  // @ts-ignore
  import LocomotiveScrollProvider from "svelte-locomotive-scroll";
  import "locomotive-scroll/src/locomotive-scroll.scss";
  import { page } from "$app/stores";
  import Preloader from "../widgets/Preloader.svelte";
  import { isLoadingPreloader } from "../store";

  import "../app.css";
</script>

{#if $isLoadingPreloader === true}
  <Preloader />
{:else}
  <LocomotiveScrollProvider
    options={{
      smooth: true,
      smoothMobile: false,
      getDirection: true,
      getSpeed: true,
      inertia: 0.5,
    }}
    watch={$page}
    location={$page.url}
    onLocationChange={(scroll) =>
      scroll.scrollTo(0, { duration: 2, disableLerp: false })}
    imageTarget={""}
  >
    <main data-scroll-container>
      <slot />
    </main>
  </LocomotiveScrollProvider>
{/if}
