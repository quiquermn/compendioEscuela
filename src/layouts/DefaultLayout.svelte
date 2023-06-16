<!-- src/layouts/DefaultLayout.svelte -->
<script>
  export let title;
  import { page } from '$app/stores';
</script>

<svelte:head>
  <link
    rel="canonical"
    href={'https://compendio.quiqueso.com' + $page.url.pathname}
  />
  <meta property="og:title" content={'Compendio Bátiz - ' + title} />
  <title>{'Compendio Bátiz - ' + title}</title>
</svelte:head>

<slot />
