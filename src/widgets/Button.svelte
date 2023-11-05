<script lang="ts">
  export let text: string;
  export let className: string = "";
</script>

<button
  class={`rounded-full transition-all group overflow-hidden relative flex flex-col items-center border-2 border-secondary ml-10 text-primary uppercase text-3xl px-8 py-2 hover:text-black hover:bg-accent hover:border-accent ${className}`}
  ><span class="group-hover:-translate-y-12 transition-all">{text}</span><span
    class="absolute translate-y-12 group-hover:translate-y-0 transition-all"
    >{text}</span
  ></button
>
