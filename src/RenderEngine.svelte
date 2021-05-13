<script lang="ts">
  import {CMap} from './components-map';
import Unknown from './components/Unknown.svelte';
  export let components = []
</script>

{#each components as {type, props, components}}
	{#if CMap.has(type)}
    <svelte:component this={CMap.get(type)} {...props}>
      {#if components}
        <svelte:self {components}/>
      {/if}
    </svelte:component>
  {:else}
    <Unknown {type}/>
  {/if}
{/each}