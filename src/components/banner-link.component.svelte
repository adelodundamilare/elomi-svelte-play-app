<script lang="ts">
  export let text: string;
  export let iconClass: string;
  export let link: string = "";
</script>

<p class="py-4 border-b border-gray-800">
  <i class={`${iconClass} text-secondary`} />
  {#if link}
    <a href={link} class="text-primary" target="_blank">
      {text} <i class="las la-external-link-alt text-secondary" />
    </a>
  {:else}
    {text}
  {/if}
</p>
