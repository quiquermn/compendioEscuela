<script>
  import { onMount } from "svelte";

  let links = [];

  onMount(() => {
    // Obtiene todos los headers
    const headers = Array.from(document.querySelectorAll("h2, h3, h4, h5, h6"));

    headers.forEach((header, indice) => {
      header.id =
        header.textContent
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "") +
        "-" +
        indice;
      for (let i = 1; i <= 6; i++) {
        if (header.tagName === `H${i}`) {
          console.log(header.tagName);
          links += `<li class="listh${i}" style="width: 100%; text-align: left;"><a class="ish${i}" href="#${header.id}">${header.textContent}</a></li>`;
        }
      }
    });
  });
</script>

<div id="indicecont-sv">
  <nav>
    <ul class="rmlist indicebox-sv">
      {#if links}
        {@html links}
      {/if}
    </ul>
  </nav>
</div>

<style>
  nav {
    width: 100%;
  }

  #indicecont-sv {
    margin-top: calc(var(--padding) * 1.6);
    min-width: 250px;
    max-width: 250px;
    display: flex;
    height: max-content;
    justify-content: center;
    align-content: center;
  }
  .rmlist {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .indicebox-sv {
    background-color: var(--indice-color);
    border-radius: 1em;
    width: 100%;
    display: flex;
    gap: 0.25em;
    padding: 1.5em;

    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.068) 0px 0px 10px 0px;
  }
  :global(.indicebox-sv a) {
    text-decoration: none;
    color: white;
  }
  :global(.ish2) {
    font-weight: 700;
  }
  :global(.ish3) {
    font-weight: 400;
  }
  :global(.ish4) {
    font-weight: 300;
    font-style: italic;
  }
  :global(.ish5) {
    font-weight: 200;
    font-style: italic;
  }

  :global(.listh2:not(:first-of-type)) {
    width: 100%;
    padding-top: 0.25em;
    margin-top: 1em;
    border-top: solid 2px #fff;
  }
  :global(.listh3) {
    list-style: disc;
    margin-left: 1.75em;
  }
  :global(.listh4) {
    list-style: none;
    margin-left: 4em;
  }
  :global(.listh5) {
    list-style: none;
    margin-left: 5.5em;
  }

  @media (max-width: 790px) {
    #indicecont-sv {
      min-width: 100%;
      max-width: 100%;
    }
  }
</style>
