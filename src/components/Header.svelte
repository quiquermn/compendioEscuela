<script>
  import { each } from "svelte/internal";
  import Subnav from "./Subnav.svelte";

  const mobilesize = 790;
  let isMillyPressed = false;
  let screenSize;
  let isMobileNavOpen = false;

  const millyimages = {
    silly: "/imgs/sillymilly.webp",
    serious: "/imgs/seriousmilly.webp",
    jolly: "/imgs/jollymilly.webp",
  };

  let defaultmilly = millyimages.silly;
  let currentmilly = defaultmilly;

  function changeMilly() {
    currentmilly = isMillyPressed ? millyimages.jolly : millyimages.serious;
    isMillyPressed = !isMillyPressed;
  }
  const links = {
    primero: {
      url: "/semestres/1primero",
      name: "1<span class='sup'>er</span> Semestre",
      materias: {
        algebra: {
          name: "Álgebra",
        },
        compu1: {
          name: "Computación Básica <span class='italic'>I</span>",
        },
        orientacion1: {
          name: "Orientación <span class='italic'>I</span>",
        },
        filo1: {
          name: "Filosofía <span class='italic'>I</span>",
        },
        historia1: {
          name: "Historia de México <span class='italic'>I</span>",
        },
        ingles1: {
          name: "Inglés <span class='italic'>I</span>",
        },
        dhp: {
          name: "D.H.P.",
        },
        dp: {
          name: "Desarrollo Personal",
        },
        expresion1: {
          name: "Expresión Oral y Escrita <span class='italic'>I</span>",
        },
      },
    },
    segundo: {
      url: "/semestres/2segundo",
      name: "2<span class='sup'>do</span> Semestre",
      materias: {
        trigo: {
          name: "Geometría y Trigonometría",
        },
        compu2: {
          name: "Computación Básica <span class='italic'>II</span>",
        },
        orientacion2: {
          name: "Orientación <span class='italic'>II</span>",
        },
        filo2: {
          name: "Filosofía <span class='italic'>II</span>",
        },
        historia2: {
          name: "Historia de México <span class='italic'>II</span>",
        },
        ingles2: {
          name: "Inglés <span class='italic'>II</span>",
        },
        expresion2: {
          name: "Expresión Oral y Escrita <span class='italic'>II</span>",
        },
        tic: {
          name: "T.I.C.",
        },
      },
    },
    tercero: {
      url: "/semestres/3tercero",
      name: "3<span class='sup'>er</span> Semestre",
      materias: {
        analitica: {
          name: "Geometría Analítica",
        },
        fisica1: {
          name: "Física <span class='italic'>I</span>",
        },
        quimica1: {
          name: "Química <span class='italic'>I</span>",
        },
        dibujo1: {
          name: "Dibujo <span class='italic'>I</span>",
        },
        socioeco: {
          name: "Entorno Socieconómico de México",
        },
        ingles3: {
          name: "Inglés <span class='italic'>III</span>",
        },
      },
    },
    cuarto: {
      url: "/semestres/4cuarto",
      name: "4<span class='sup'>to</span> Semestre",
      materias: {
        diferencial: {
          name: "Cálculo Diferencial",
        },
        fisica2: {
          name: "Física <span class='italic'>II</span>",
        },
        quimica2: {
          name: "Química <span class='italic'>II</span>",
        },
        dibujo2: {
          name: "Dibujo <span class='italic'>II</span>",
        },
        ingles4: {
          name: "Inglés <span class='italic'>IV</span>",
        },
      },
    },
    quinto: {
      url: "/semestres/5quinto",
      name: "5<span class='sup'>to</span> Semestre",
      materias: {
        integral: {
          name: "Cálculo Integral",
        },
        fisica3: {
          name: "Física <span class='italic'>III</span>",
        },
        quimica3: {
          name: "Química <span class='italic'>III</span>",
        },
        orientacion3: {
          name: "Orientación <span class='italic'>III</span>",
        },
        ingles5: {
          name: "Inglés <span class='italic'>V</span>",
        },
      },
    },
    sexto: {
      url: "/semestres/6sexto",
      name: "6<span class='sup'>to</span> Semestre",
      materias: {
        probabilidad: {
          name: "Probabilidad y Estadística",
        },
        fisica4: {
          name: "Física <span class='italic'>IV</span>",
        },
        quimica4: {
          name: "Química <span class='italic'>IV</span>",
        },
        orientacion4: {
          name: "Orientación <span class='italic'>IV</span>",
        },
        ingles6: {
          name: "Inglés <span class='italic'>VI</span>",
        },
      },
    },
  };

  function openMobile() {
    if (screenSize > mobilesize) {
      return;
    }
    isMobileNavOpen = !isMobileNavOpen;
    console.log("open");
  }
</script>

<svelte:window bind:innerWidth={screenSize} />
<header id="header">
  <div id="logotitle">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <img
      src={currentmilly}
      height="50px"
      width="50px"
      alt="Foto del gato Milly"
      id="logo"
      on:mouseenter={() => {
        if (!isMillyPressed) {
          currentmilly = millyimages.jolly;
        }
      }}
      on:mouseleave={() => {
        if (!isMillyPressed) {
          currentmilly = defaultmilly;
        }
      }}
      on:click={() => {
        changeMilly();
      }}
    />
    <span id="titulo">Compendio Bátiz</span>
  </div>
  <button id="mobilenavopen" on:click={() => openMobile()}>
    <svg
      class="svg-icon"
      width="40"
      height="40"
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="50" width="400" height="80" rx="40" fill="currentColor" />
      <rect
        x="10"
        y="170"
        width="400"
        height="80"
        rx="40"
        fill="currentColor"
      />
      <rect
        x="10"
        y="290"
        width="400"
        height="80"
        rx="40"
        fill="currentColor"
      />
    </svg>
  </button>

  {#if (screenSize < mobilesize) & (isMobileNavOpen | true)}
    <span class="testtext">
      {screenSize + "<" + mobilesize}px.
    </span>
    <nav id="navigationheader" class="mobilenav">
      <ul class="nolist-style">
        <li><a href="/">Inicio</a></li>
        {#each Object.entries(links) as [key, uwulink]}
          <li>{uwulink.name}</li>
        {/each}
      </ul>
    </nav>
  {/if}
  {#if screenSize >= mobilesize}
    <nav id="navigationheader">
      <ul class="nolist-style">
        <li><a href="/">Inicio</a></li>
        {#each Object.entries(links) as [key, uwulink]}
          <Subnav {uwulink} />
        {/each}
      </ul>
    </nav>
  {/if}
</header>

<style>
  #header {
    position: relative;
  }
  .mobilenav {
    position: absolute;
    right: 0;
    top: 50%;
  }

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
  .testtext {
    color: red;
    position: absolute;
    z-index: 10;
    right: 50%;
  }
</style>
