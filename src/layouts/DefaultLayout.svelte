<!-- src/layouts/DefaultLayout.svelte -->
<script>
  export let title;
  import Header from "/src/components/Header.svelte";
  import Footer from "/src/components/Footer.svelte";
  import { page } from "$app/stores";
  import Indice from "/src/components/Indice.svelte";
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
  <div id="pagecontainer">
    <Indice />
    <div style="width:100%">
      <slot />
    </div>
  </div>
  <Footer />
</div>

<style>
  #pagecontainer {
    padding: var(--padding);
    padding-top: calc(var(--padding) / 2);
    display: flex;
    gap: calc(var(--padding) / 2);
  }

  @media (max-width: 790px) {
    #pagecontainer {
      flex-direction: column;
    }
  }
</style>
