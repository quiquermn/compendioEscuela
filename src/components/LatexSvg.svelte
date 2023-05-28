<script>
  export let latex;
  import { createEventDispatcher, onMount } from "svelte";
  import Katex from "svelte-katex";
</script>

<Katex>{latex}</Katex>
