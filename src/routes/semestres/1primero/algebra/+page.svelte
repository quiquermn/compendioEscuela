<!-- src/routes/semestres/1primero/algebra/+page.svelte -->
<script>
  import Spoiler from "/src/components/Spoiler.svelte";
  import DefaultLayout from "/src/layouts/DefaultLayout.svelte";
  import Katex from "svelte-katex";
</script>

<DefaultLayout title="Página de inicio">
  <main class="mainpart">
    <div class="indicebox">
      <ul class="indice">
        <!-- <li>El índice de la página será autogenerado por el javascript dentro de /js/blog.js</li> -->
      </ul>
    </div>
    <article id="mainarticle">
      <!--Es importante que estos contenidos se encuentren dentro de la etiqueta article, y con el id main article, usualmente solo habrá uno de estos por cada página, debido a que contienen un h1, no es recomendado utilizarlo más de una vez-->

      <h1 class="centrar">Álgebra</h1>
      <!--Para la correcta visualización del índice, deberá de estar separada cada sección con un h2, recuerda iniciar con un h1 para marcar la jerarquía de la página (es muy importante para los lectores de pantalla o un visualizador en modo lectura como el de Safari)-->
      <section>
        <h2>Breve Introducción</h2>
        <p class="justificar samesubtopic">
          Siendo la primera unidad de aprendizaje de matemáticas, (y por ende la
          más importante) Álgebra puede ser el único
          <em>problema</em> en el primer semestre durante tu estancia en Bátiz. ya
          que las demás unidades pueden ser acreditadas incluso sin hacer el examen.
          mientras que en otras materias el examen cuenta con un valor entre el 30%
          y el 40%, aqui el examen cuenta con el 70%, convirtiendose en la materia
          con más índices reprobatorios.
        </p>
        <p class="justificar">
          Es de suma importancia tener en cuenta a la unidad en todo momento y
          tenerla bien dominada, ya que las demás matemáticas como Cálculo o
          Geometría se basan en conceptos de Álgebra, así que por eso a
          continuación se presenta una serie de materiales. ejercicios. exámenes
          y más de cada parcial para poder practicar, repasar y no tener riesgos
          de reprobar la materia y presentarse a un extraordinario o a un ETS.
        </p>
      </section>
      <section>
        <h2>Primer Parcial</h2>
        <h3>Temas a tratar</h3>
        <p class="justificar samesubtopic" style="margin-bottom: 0.5em">
          De acuerdo al "Cronograma para el Primer Departamental" del 2023, se
          trataran los siguientes temas:
        </p>
        <ol class="orderedlist">
          <li>Operaciones con fracciones.</li>
          <li>La fracción como la parte de un todo.</li>
          <li>Razones y proporciones.</li>

          <li>Leyes de los exponentes.</li>
          <li>Operaciones con polinomios (adición y sustracción).</li>
          <li>Valor numérico de expresiones algebraicas.</li>
        </ol>
        <h3>Ejercicios</h3>
        <p class="justificar samesubtopic">
          Los 7 ejercicios presentados a continuación han sido extraidos del
          examen 2023-1.
        </p>
        <section class="ejercicio">
          <p class="justificar samesubtopic">
            1. Calcular el valor numérico de la siguiente expresión algebraíca
            para los valores:
          </p>
          <p class="justificar samesubtopic">
            <Katex
              >{"a=-\\frac{2}{3},\\hspace{2mm} b=-3,\\hspace{2mm} c= \\frac{1}{5}"}</Katex
            >
          </p>

          <p class="justificar samesubtopic">
            <Katex>
              {"\\left (\\frac{8}{3a^{2}} - \\frac{9}{2b^{2}} \\right )\\left(\\frac{4b}{5a} - 2c \\right ) - \\left ( 2c-b \\right )="}
            </Katex>
          </p>
          <p>
            <strong>Respuesta:&nbsp;</strong>
            <Spoiler>
              <Katex>{"\\frac{71}{5}"}</Katex>
            </Spoiler>
          </p>
        </section>
        <section class="ejercicio">
          <p class="justificar samesubtopic">
            2. Simplifica al máximo la siguiente expresión algebraíca aplicando
            las leyes de los exponentes:
          </p>
          <p class="justificar samesubtopic">
            <Katex>
              {"\\left ( \\frac{4x^{1/4}y^{-3}}{yx^{-1/2}w}\\right )^{3/2} \\div\\left ( w^{2/3}x^{-3} \\right )"}
            </Katex>
          </p>
          <p>
            <strong>Respuesta:&nbsp;</strong>
            <Spoiler><Katex>{"\\frac{no}{se}"}</Katex></Spoiler>
          </p>
        </section>
        <section class="ejercicio">
          <p class="justificar samesubtopic">
            3. Simplifica al máximo la siguiente expresión algebraíca
          </p>
          <p class="justificar samesubtopic">
            <Katex>
              {`
                                \\frac{9}{2}b - 2\\left [ a-a\\left ( 5-b \\right ) \\right ] - \\left
                            \\{ -b\\left [ 2\\left ( a-5 \\right )+\\frac{1}{2} \\right ]
                            +\\frac{1}{3} \\right \\}
                                `}
            </Katex>
          </p>
          <p>
            <strong>Respuesta:&nbsp;</strong>
            <Spoiler><Katex>-5b+8a-\frac{1}{3}</Katex></Spoiler>
          </p>
        </section>
        <section class="ejercicio">
          <p class="justificar samesubtopic">
            4.-Nicky es una perrita que se come una taza y media taza de
            croquetas en la mañana y dos tercios de taza por la noche. Si a su
            contenedor de croquetas le caben treinta tazas y un tercio, ¿Cuántos
            días se puede ir de viaje Maru teniendo la seguridad de que Nicky
            tiene croquetas para comer?
          </p>
          <p>
            <strong>Respuesta:&nbsp;</strong>
            <Spoiler>
              <span>Maru se puede ir de viaje <Katex>{"15"}</Katex> días</span>
            </Spoiler>
          </p>
        </section>
        <section class="ejercicio">
          <p class="justificar samesubtopic">5. Simplificar al máximo</p>
          <p class="justificar samesubtopic">
            <Katex>
              {`
                            \\frac{9}{2}b - 2\\left [ a-a\\left ( 5-b \\right ) \\right ] - \\left
                            \\{ -b\\left [ 2\\left ( a-5 \\right )+\\frac{1}{2} \\right ]
                            +\\frac{1}{3} \\right \\}`}
            </Katex>
          </p>
          <p>
            <strong>Respuesta:&nbsp;</strong>
            <Spoiler><Katex>{"-5b+8a-\\frac{1}{3}"}</Katex></Spoiler>
          </p>
        </section>
        <section class="ejercicio">
          <p class="justificar samesubtopic">
            6. Tenemos un pentágono irregular cuyos lados son <Katex
              >a, b, c, d</Katex
            > y
            <Katex>e</Katex>. Se sabe que los lados <Katex>a</Katex> y <Katex
              >b</Katex
            > son iguales entre sí, y cada uno de ellos mide
            <Katex
              >{"\\frac{1}{4}x^{3}+\\frac{2}{3}x^{2}y + \\frac{1}{2}y^{3}"}</Katex
            >
            no terminé
          </p>
          <p class="justificar samesubtopic">
            <Katex>
              {`
                            \\frac{9}{2}b - 2\\left [ a-a\\left ( 5-b \\right ) \\right ] - \\left
                            \\{ -b\\left [ 2\\left ( a-5 \\right )+\\frac{1}{2} \\right ]
                            +\\frac{1}{3} \\right \\}
                            `}
            </Katex>
          </p>
          <p>
            <strong>Respuesta:&nbsp;</strong>
            <Spoiler><Katex>{"-5b+8a-\\frac{1}{3}"}</Katex></Spoiler>
          </p>
        </section>
      </section>
      <!-- Cambiar -->
      <section>
        <h2>Segundo Parcial</h2>
      </section>
      <!-- Cambiar -->
      <section>
        <h2>Tercer Parcial</h2>
      </section>
      <!-- Cambiar -->

      <!--Existen diversas clases para organizar el parrafo, una de ellas es "justificar", como su nombre lo dice, justifica el texto dentro del párrafo-->
      <!--Si el párrafo no es el último, agregale la clase "samesubtopic", esta remueve los padding para que se sienta continuo el documento-->

      <!--Aquí el contenido o descripción de las actividades, intentaré hacer un div para poner imagenes, etc.-->
    </article>
  </main>
</DefaultLayout>
