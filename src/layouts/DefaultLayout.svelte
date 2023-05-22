<!-- src/layouts/DefaultLayout.svelte -->
<script>
  export let title;
  import Katex from "svelte-katex";
  import Spoiler from "/src/components/Spoiler.svelte";
  import Header from "/src/components/Header.svelte";
  import Footer from "/src/components/Footer.svelte";
  import { page } from "$app/stores";
</script>

<svelte:head>
  <link
    rel="canonical"
    href={"https://compendio.quiqueso.com" + $page.url.pathname}
  />
  <meta property="og:title" content={"Compendio Bátiz - " + title} />
  <title>{"Compendio Bátiz - " + title}</title>
</svelte:head>
<div id="mainpage">
  <Header />
  <div><span>uwu</span></div>
  <slot />
  <Footer />
</div>
