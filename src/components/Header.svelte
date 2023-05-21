<script>
  import { each } from "svelte/internal";

  let isMillyPressed = false;

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

  let screenSize;
  const links = {
    primero: {
      url: "/semestres/1primero/",
      name: "1<span class='sup'>er</span> Semestre",
      materias: {
        algebra: {
          name: "Álgebra",
        },
        compu1: {
          name: "Computación Básica <span class='bold'>I</span>",
        },
        orientacion1: {
          name: "Orientación <span class='bold'>I</span>",
        },
        filo1: {
          name: "Filosofía <span class='bold'>I</span>",
        },
        historia1: {
          name: "Historia de México <span class='bold'>I</span>",
        },
        ingles1: {
          name: "Inglés <span class='bold'>I</span>",
        },
        dhp: {
          name: "D.H.P.",
        },
        dp: {
          name: "Desarrollo Personal",
        },
        expresion1: {
          name: "Expresión Oral y Escrita <span class='bold'>I</span>",
        },
      },
    },
    segundo: {
      url: "2segundo",
      name: "2<span class='sup'>do</span> Semestre",
      materias: {
        trigo: {
          name: "Geometría y Trigonometría",
        },
        compu2: {
          name: "Computación Básica <span class='bold'>II</span>",
        },
        orientacion2: {
          name: "Orientación <span class='bold'>II</span>",
        },
        filo2: {
          name: "Filosofía <span class='bold'>II</span>",
        },
        historia2: {
          name: "Historia de México <span class='bold'>II</span>",
        },
        ingles2: {
          name: "Inglés <span class='bold'>II</span>",
        },
        expresion2: {
          name: "Expresión Oral y Escrita <span class='bold'>II</span>",
        },
        tic: {
          name: "T.I.C.",
        },
      },
    },
    tercero: {
      url: "3tercero",
      name: "3<span class='sup'>er</span> Semestre",
      materias: {
        analitica: {
          name: "Geometría Analítica",
        },
        fisica1: {
          name: "Física <span class='bold'>I</span>",
        },
        quimica1: {
          name: "Química <span class='bold'>I</span>",
        },
        dibujo1: {
          name: "Dibujo <span class='bold'>I</span>",
        },
        socioeco: {
          name: "Entorno Socieconómico de México",
        },
        ingles3: {
          name: "Inglés <span class='bold'>III</span>",
        },
      },
    },
    cuarto: {
      url: "4cuarto",
      name: "4<span class='sup'>to</span> Semestre",
      materias: {
        diferencial: {
          name: "Cálculo Diferencial",
        },
        fisica2: {
          name: "Física <span class='bold'>II</span>",
        },
        quimica2: {
          name: "Química <span class='bold'>II</span>",
        },
        dibujo2: {
          name: "Dibujo <span class='bold'>II</span>",
        },
        ingles4: {
          name: "Inglés <span class='bold'>IV</span>",
        },
      },
    },
    quinto: {
      url: "5quinto",
      name: "5<span class='sup'>to</span> Semestre",
      materias: {
        integral: {
          name: "Cálculo Integral",
        },
        fisica3: {
          name: "Física <span class='bold'>III</span>",
        },
        quimica3: {
          name: "Química <span class='bold'>III</span>",
        },
        orientacion3: {
          name: "Orientación <span class='bold'>III</span>",
        },
        ingles5: {
          name: "Inglés <span class='bold'>V</span>",
        },
      },
    },
    sexto: {
      url: "6sexto",
      name: "6<span class='sup'>to</span> Semestre",
      materias: {
        probabilidad: {
          name: "Probabilidad y Estadística",
        },
        fisica4: {
          name: "Física <span class='bold'>IV</span>",
        },
        quimica4: {
          name: "Química <span class='bold'>IV</span>",
        },
        orientacion4: {
          name: "Orientación <span class='bold'>IV</span>",
        },
        ingles6: {
          name: "Inglés <span class='bold'>VI</span>",
        },
      },
    },
  };
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
  <button id="mobilenavopen">
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

  {#if screenSize < 790}
    <span class="testtext">
      {screenSize + "<"}790px.
    </span>
  {/if}
  {#if screenSize >= 790}
    <nav id="navigationheader">
      <ul class="nolist-style">
        <li><a href="/">Inicio</a></li>
        {#each Object.entries(links) as [key, uwulink]}
          <li class="dropdowncontainer">
            <button on:click={console.log(uwulink.name)}>
              <span class="naventry">{@html uwulink.name}</span>
            </button>
            <ul class="dropdown">
              {#each Object.entries(uwulink.materias) as [key, uwumateria]}
                <li>
                  <a class="subnavlink" href={uwumateria.url}>
                    {@html uwumateria.name}
                  </a>
                </li>
              {/each}
            </ul>
          </li>
        {/each}
      </ul>
    </nav>
  {/if}
</header>

<!--
<header id="header">
	<nav id="navigationheader">
		<ul class="nolist-style">
			<button id="mobilenavclose">
				<svg class="svg-icon" viewBox="0 0 25 25">
					<path
						d="M12.522,10.4l-3.559,3.562c-0.172,0.173-0.451,0.176-0.625,0c-0.173-0.173-0.173-0.451,0-0.624l3.248-3.25L8.161,6.662c-0.173-0.173-0.173-0.452,0-0.624c0.172-0.175,0.451-0.175,0.624,0l3.738,3.736C12.695,9.947,12.695,10.228,12.522,10.4 M18.406,10c0,4.644-3.764,8.406-8.406,8.406c-4.644,0-8.406-3.763-8.406-8.406S5.356,1.594,10,1.594C14.643,1.594,18.406,5.356,18.406,10M17.521,10c0-4.148-3.374-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.147,17.521,10"
					/>
				</svg>
			</button>
			<li>
				<a href="/">Inicio</a>
			</li>
			<li>
				<a href="/semestres/1primero/">1<sup>er</sup> Semestre</a>
				<ul class="dropdown">
					<li><a href="/semestres/1primero/algebra">Álgebra</a></li>
					<li>
						<a href="/semestres/1primero/compu">Computación Básica <em>I</em></a>
					</li>
					<li>
						<a href="/semestres/1primero/orientacion">Orientación <em>I</em></a>
					</li>
					<li>
						<a href="/semestres/1primero/filo">Filosofía <em>I</em></a>
					</li>
					<li>
						<a href="/semestres/1primero/historia">Historia de México <em>I</em></a>
					</li>
					<li>
						<a href="/semestres/1primero/ingles">Inglés <em>I</em></a>
					</li>
					<li><a href="/semestres/1primero/dhp">D.H.P</a></li>
					<li>
						<a href="/semestres/1primero/dp">Desarrollo Personal</a>
					</li>
					<li>
						<a href="/semestres/1primero/expresion">Expresión O. y E. <em>I</em></a>
					</li>
				</ul>
			</li>
			<li>
				<a href="/semestres/2segundo">2<sup>do</sup> Semestre</a>
				<ul class="dropdown">
					<li>
						<a href="/semestres/2segundo/trigo">Geometría y Trigonometría</a>
					</li>
					<li>
						<a href="/semestres/2segundo/compu2">Computación Básica <em>II</em></a>
					</li>
					<li>
						<a href="/semestres/2segundo/biologia/">Biología Básica</a>
					</li>
					<li>
						<a href="/semestres/2segundo/orientacion2">Orientación J. y P. <em>II</em></a>
					</li>
					<li>
						<a href="/semestres/2segundo/filo2">Filosofía <em>II</em></a>
					</li>
					<li>
						<a href="/semestres/2segundo/historia2">Historia de México <em>II</em></a>
					</li>
					<li>
						<a href="/semestres/2segundo/ingles2">Inglés <em>II</em></a>
					</li>
					<li>
						<a href="/semestres/2segundo/expresion2">Expresión Oral y E. <em>II</em></a>
					</li>
					<li class="bold">Optativas:</li>
					<li>
						<a href="/semestres/2segundo/tic">T.I.C</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="/semestres/3tercero">3<sup>er</sup> Semestre</a>
				<ul class="dropdown">
					<li class="bold">Materias Compartidas:</li>
					<li>
						<a href="/semestres/3tercero/analitica">Geometría Analítica</a>
					</li>
					<li>
						<a href="/semestres/3tercero/fisica1/">Física <em>I</em></a>
					</li>
					<li>
						<a href="/semestres/3tercero/quimica1">Química <em>I</em></a>
					</li>
					<li>
						<a href="/semestres/3tercero/dibujo1">Dibujo Técnico <em>I</em></a>
					</li>
					<li>
						<a href="/semestres/3tercero/socioeco">Entorno Socioeconómico de Méx.</a>
					</li>
					<li>
						<a href="/semestres/3tercero/comunicacioncientifica">Comunicación Científica</a>
					</li>
					<li>
						<a href="/semestres/3tercero/ingles3">Inglés <em>III</em></a>
					</li>
					<li class="bold">Técnicas:</li>

					<li>
						<a href="/semestres/3tercero/programacion">Programación</a>
					</li>
					<li>
						<a href="/semestres/3tercero/meca">Mecatrónica</a>
					</li>
					<li>
						<a href="/semestres/3tercero/sistemas">Sist. Digitales</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="/semestres/4cuarto">4<sup>to</sup> Semestre</a>
				<ul class="dropdown">
					<li class="bold">Materias Compartidas:</li>
					<li>
						<a href="/semestres/4cuarto/diferencial">Cálculo Diferencial</a>
					</li>
					<li>
						<a href="/semestres/4cuarto/fisica2/">Física <em>II</em></a>
					</li>
					<li>
						<a href="/semestres/4cuarto/quimica2">Química <em>II</em></a>
					</li>
					<li>
						<a href="/semestres/4cuarto/dibujo2">
							Dibujo Técnico <em>II</em>
						</a>
					</li>
					<li>
						<a href="/semestres/4cuarto/ingles4">Inglés <em>IV</em></a>
					</li>
					<li class="bold">Técnicas:</li>

					<li>
						<a href="/semestres/4cuarto/programacion">Programación</a>
					</li>
					<li>
						<a href="/semestres/4cuarto/meca">Mecatrónica</a>
					</li>
					<li>
						<a href="/semestres/4cuarto/sistemas">Sist. Digitales</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="/semestres/5quinto">5<sup>to</sup> Semestre</a>
				<ul class="dropdown">
					<li class="bold">Materias Compartidas:</li>
					<li>
						<a href="/semestres/5quinto/integral">Cálculo Integral</a>
					</li>
					<li>
						<a href="/semestres/5quinto/fisica3/">Física <em>III</em></a>
					</li>
					<li>
						<a href="/semestres/5quinto/quimica3">Química <em>III</em></a>
					</li>
					<li>
						<a href="/semestres/5quinto/orientacion3">
							Orientación <em>III</em>
						</a>
					</li>
					<li>
						<a href="/semestres/5quinto/ingles5">Inglés <em>V</em></a>
					</li>
					<li class="bold">Técnicas:</li>

					<li>
						<a href="/semestres/5quinto/programacion">Programación</a>
					</li>
					<li>
						<a href="/semestres/5quinto/meca">Mecatrónica</a>
					</li>
					<li>
						<a href="/semestres/5quinto/sistemas">Sist. Digitales</a>
					</li>
				</ul>
			</li>
			<li>
				<a href="/semestres/6sexto">6<sup>to</sup> Semestre</a>
				<ul class="dropdown">
					<li class="bold">Materias Compartidas:</li>
					<li>
						<a href="/semestres/6sexto/probabilidad">Probabilidad y Estadística</a>
					</li>
					<li>
						<a href="/semestres/6sexto/fisica4/">Física <em>IV</em></a>
					</li>
					<li>
						<a href="/semestres/6sexto/quimica4">Química <em>IV</em></a>
					</li>
					<li>
						<a href="/semestres/6sexto/orientacion4">
							Orientación <em>IV</em>
						</a>
					</li>
					<li>
						<a href="/semestres/6sexto/ingles6">Inglés <em>VI</em></a>
					</li>
					<li class="bold">Técnicas:</li>

					<li>
						<a href="/semestres/6sexto/programacion">Programación</a>
					</li>
					<li>
						<a href="/semestres/6sexto/meca">Mecatrónica</a>
					</li>
					<li>
						<a href="/semestres/6sexto/sistemas">Sist. Digitales</a>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
</header>
-->

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
  .testtext {
    color: red;
    position: absolute;
    z-index: 10;
    right: 50%;
  }
  .naventry {
    color: var(--linkcolor);
    display: block;
    padding: 0;
    font-weight: 700;
    font-size: 1em;
    width: 120px;
    overflow: hidden;
  }
  .dropdown {
    background-color: var(--subnavcolor);
    border-radius: 0.75em;
    color: var(--headercolor);
    margin: 0;
    position: absolute;
    left: 50%;
    top: 1.6em;
    transform: translate(-50%, 0);
    width: 120%;
    padding: 0.5em 0.5em;
    height: auto;

    list-style: none;

    display: flex;
    display: none;

    gap: 1em;
    flex-direction: column;
  }
  .dropdowncontainer {
    position: relative;
    display: inline-block;
  }

  .dropdown > li {
    padding-bottom: 0.25em;
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
