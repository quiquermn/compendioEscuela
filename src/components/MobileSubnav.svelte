<script>
  export let uwulink;
  let isOpen = false;
  import { cubicOut } from "svelte/easing";

  function estirar(node, { duration }) {
    return {
      duration,
      css: (t) => {
        const eased = cubicOut(t);
        const o = +getComputedStyle(node)
          .getPropertyValue("height")
          .replace("px", "");
        return `height: ${o * eased}px`;
      },
    };
  }
  function openSubMenu() {
    isOpen = !isOpen;
  }
</script>

<div class="navsectioncontainer">
  <button on:click={(e) => openSubMenu(e)}>
    <span>{@html uwulink.name}</span>
    <svg
      width="20"
      height="10"
      xmlns="http://www.w3.org/2000/svg"
      id="mdi-menu-down"
      class:rotate={isOpen}
      viewBox="0 0 10 5"
    >
      <path d="M0 0L5 5L10 0H0Z" fill="currentColor" />
    </svg>
  </button>
  {#if isOpen}
    <ul class={"dropdown"} transition:estirar={{ duration: 200 }}>
      {#each Object.entries(uwulink.materias) as [key, uwumateria], index}
        <li>
          <a
            href={uwulink.url + "/" + Object.keys(uwulink.materias)[index]}
            class="subnavmoblink"
          >
            {@html uwumateria.name}
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  button {
    width: 100%;
    color: inherit;
    background-color: transparent;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navsectioncontainer {
    display: flex;
    flex-direction: column;
    height: max-content;
  }
  #mdi-menu-down {
    margin-top: 4px;
    width: 20px;
    height: 14px;
    overflow: visible;
    transition: transform 0.2s ease-in-out;
  }
  .subnavmoblink {
    font-size: 1rem;
    font-weight: 400;
  }
  .rotate {
    transform: rotate(180deg);
  }
</style>
