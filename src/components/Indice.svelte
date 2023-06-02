<script>
    import {cubicOut} from "svelte/easing";
    import {generateLinks} from '/src/utils.js';
    import {onMount} from 'svelte';

    let screenSize;

    const mobilesize = 790;
    let isOpen = false;

    let links;
    onMount(() => {
        links = generateLinks();
    });

    $: links = $links;

    function openmobileindex() {
        isOpen = !isOpen;
    }

    function estirar(node, {duration}) {
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

</script>

<svelte:window bind:innerWidth={screenSize}/>

<div id="indicecont-sv">
    <button class="openindice" on:click={() => openmobileindex()}>
        <svg
                width="64"
                height="64"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style="-webkit-filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .1));
      filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .1));"
        >
            <path
                    d="M3.5 16.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4 .5h13.503a1 1 0 0 1 .117 1.993l-.117.007H7.5a1 1 0 0 1-.116-1.993L7.5 17h13.503H7.5Zm-4-6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4 .5h13.503a1 1 0 0 1 .117 1.993l-.117.007H7.5a1 1 0 0 1-.116-1.993L7.5 11h13.503H7.5Zm-4-6.492a1.5 1.5 0 1 1 0 2.999 1.5 1.5 0 0 1 0-3ZM7.5 5h13.503a1 1 0 0 1 .117 1.993l-.117.007H7.5a1 1 0 0 1-.116-1.994l.116-.006h13.503H7.5Z"
                    fill="currentColor"
            />
        </svg
        >
    </button>
    {#if (screenSize > mobilesize) | isOpen}
        <nav transition:estirar={{ duration: 200 }}>
            <ul class="rmlist indicebox-sv">
                {@html links}
            </ul>
        </nav>
    {/if}
</div>

<style>
    nav {
        width: 100%;
    }

    .openindice {
        background-color: var(--indice-color);
        color: white;
        height: 45px;
        width: 45px;
        display: none;
        align-items: center;
        justify-content: center;
        border-radius: 0.4em;
        padding: 0.35em;
        box-shadow: rgba(0, 0, 0, 0.068) 0px 0px 10px 0px;

        margin-bottom: 1em;

        transition: transform 0.1s ease-in-out;
    }

    .openindice:active {
        transform: translateY(2px);
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
            display: block;
            position: fixed;
            z-index: 1;
        }

        .indicebox-sv {
            overflow-x: hidden;
            overflow-y: scroll;
            max-height: 60svh;
            max-width: 90vw;
            border: white solid 2px;
            box-shadow: rgba(0, 0, 0, 0.068) 0px 0px 10px 0px;
        }

        .openindice {
            display: flex;
        }
    }
</style>
