<!-- src/layouts/DefaultLayout.svelte -->
<script>
  import Header from '/src/components/Header.svelte';
  import Footer from '/src/components/Footer.svelte';

  export let data;
  import Indice from '/src/components/Indice.svelte';
  import { page } from '$app/stores';
</script>

<div id="mainpage">
  <Header />
  <div id="pagecontainer">
    {#key data.url}
      <Indice />
    {/key}
    <div class="uwuclassporfavorcambialodespues">
      <slot />
    </div>
  </div>
  <Footer />
</div>

<style>
  .uwuclassporfavorcambialodespues {
    width: 100%;
    margin-left: 18em;
  }
  @media (max-width: 790px) {
    .uwuclassporfavorcambialodespues {
      margin-left: 0;
    }
  }

  pre {
    background-color: #000000;
    padding: 1rem;
    margin: 1rem 0;
    overflow: auto;
    border-radius: 2rem;
  }

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
  @media print {
    #pagecontainer {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
    }
  }
</style>
