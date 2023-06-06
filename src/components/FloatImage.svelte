<script>
  export let src = "";
  export let alt = "";
  export let width = "";
  export let height = "";
  export let floatdir = "right";
  export let margin = "0.5em";
</script>

<div>
  <img
    {src}
    {alt}
    {width}
    {height}
    style="float: {floatdir}; margin: {margin}"
  />

  <p>
    <slot />
  </p>
</div>

<style>
  div {
    height: auto;
  }
</style>
