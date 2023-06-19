<!-- src/routes/semestres/1primero/algebra/+page.svelte -->
<script>
	import Katex from '$lib/Katex.svelte'
</script>

<article id="mainarticle">
	<!--Es importante que estos contenidos se encuentren dentro de la etiqueta article, y con el id main article, usualmente solo habrá uno de estos por cada página, debido a que contienen un h1, no es recomendado utilizarlo más de una vez-->

	<h1 class="centrar">Álgebra</h1>
	<!--Para la correcta visualización del índice, deberá de estar separada cada sección con un h2, recuerda iniciar con un h1 para marcar la jerarquía de la página (es muy importante para los lectores de pantalla o un visualizador en modo lectura como el de Safari)-->
	<section>
		<h2>Breve Introducción</h2>
		<p class="justificar samesubtopic">
			Siendo la primera unidad de aprendizaje de matemáticas, (y por ende la más importante) Álgebra
			puede ser el único
			<em>problema</em> en el primer semestre durante tu estancia en Bátiz. ya que las demás unidades
			pueden ser acreditadas incluso sin hacer el examen. mientras que en otras materias el examen cuenta
			con un valor entre el 30% y el 40%, aqui el examen cuenta con el 70%, convirtiendose en la materia
			con más índices reprobatorios.
		</p>
		<p class="justificar">
			Es de suma importancia tener en cuenta a la unidad en todo momento y tenerla bien dominada, ya
			que las demás matemáticas como Cálculo o Geometría se basan en conceptos de Álgebra, así que
			por eso a continuación se presenta una serie de materiales. ejercicios. exámenes y más de cada
			parcial para poder practicar, repasar y no tener riesgos de reprobar la materia y presentarse
			a un extraordinario o a un ETS.
		</p>
	</section>
	<section>
		<h2>Primer Parcial</h2>
		<h3>Temas a tratar</h3>
		<p class="justificar samesubtopic" style="margin-bottom: 0.5em">
			De acuerdo al "Cronograma para el Primer Departamental" del 2023, se trataran los siguientes
			temas:
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
			Los 7 ejercicios presentados a continuación han sido extraidos del examen 2023-1.
		</p>
		<section class="ejercicio">
			<p class="justificar samesubtopic">
				1. Calcular el valor numérico de la siguiente expresión algebraíca para los valores:
			</p>
			<p class="justificar samesubtopic">
				<Katex math={'a=-\\frac{2}{3},\\hspace{2mm} b=-3,\\hspace{2mm} c= \\frac{1}{5}'} />
			</p>
		</section>
	</section>
</article>
