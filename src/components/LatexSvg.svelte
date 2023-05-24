<script>
  export let latex;
  export let bgcolor = "transparent";
  export let color = "white";
  export let alt;

  const baseurl = "https://math.vercel.app/";

  const url = new URL(baseurl);
  url.searchParams.set("color", color);
  url.searchParams.set("bgcolor", bgcolor);
  url.searchParams.set("from", latex);

  const src = url.toString();
</script>

<img {src} {alt} />

<style>
  img {
    display: inline;
  }
</style>
