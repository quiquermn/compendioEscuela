<script>
  export let uwulink;
  let isOpen = false;
  import { fade, draw, scale } from "svelte/transition";
  import { bounceOut, linear } from "svelte/easing";

  const varToString = (varObj) => Object.keys(varObj)[0];

  function openSubMenu() {
    isOpen = !isOpen;
  }

  function spin(node, { duration }) {
    return {
      duration,
      css: (t) => {
        const eased = linear(t);
        const o = +getComputedStyle(node)
          .getPropertyValue("height")
          .replace("px", "");
        return `height: ${o * eased}px`;
      },
    };
  }
</script>

<li class="dropdowncontainer">
  <button on:click={(e) => openSubMenu(e)}>
    <span class="naventry">{@html uwulink.name}</span>
  </button>
  {#if isOpen}
    <ul class={"dropdown"} transition:spin={{ duration: 200 }}>
      {#each Object.entries(uwulink.materias) as [key, uwumateria], index}
        <li>
          <a
            href={uwulink.url + "/" + Object.keys(uwulink.materias)[index]}
            class="subnavlink"
          >
            {@html uwumateria.name}
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</li>

<style>
  button {
    font: inherit;
    background-color: transparent;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    padding: 0;
    position: relative;
    z-index: 1;
  }
  .naventry {
    color: var(--linkcolor);
    display: block;
    padding: 0;
    font-weight: 700;
    font-size: 1em;
    width: 110px;
    overflow: hidden;
  }
  .dropdown {
    background-color: var(--subnavcolor);
    border-radius: 0.75em;
    color: var(--headercolor);
    margin: 0;
    position: absolute;
    left: 50%;
    top: 2em;
    transform: translate(-50%, 0);
    width: 125%;
    padding: 0.5em 0.5em;
    height: auto;

    list-style: none;

    display: flex;

    overflow: hidden;

    gap: 0.5em;
    flex-direction: column;
  }
  .dropdown-open {
    display: flex;
  }
  .dropdowncontainer {
    position: relative;
    display: inline-block;
  }

  .dropdown > li {
    padding-bottom: 0.5em;
    border-bottom: solid 1px #fff;
  }
  .dropdown > li:last-child {
    border-bottom: none;
  }

  .dropdown > li a:focus,
  .dropdown > li a:active,
  .dropdown > li a:visited,
  .dropdown > li a {
    font-weight: 400;
    color: var(--headercolor);
    font-size: 1em;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
  }
  .dropdown > li a:hover {
    color: var(--textcolor);
  }
</style>
