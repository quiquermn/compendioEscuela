<script>
	import EjercicioMate from '$lib/EjercicioMate.svelte'
	import Katex from '$lib/Katex.svelte'
</script>

<article>
	<h1>Álgebra</h1>
	<section>
		<h2>Breve Introducción</h2>
		<p>
			Siendo la primera unidad de aprendizaje de matemáticas, (y por ende la más importante) Álgebra
			puede ser el único
			<em>problema</em> en el primer semestre durante tu estancia en Bátiz. ya que las demás unidades
			pueden ser acreditadas incluso sin hacer el examen. mientras que en otras materias el examen cuenta
			con un valor entre el 30% y el 40%, aqui el examen cuenta con el 70%, convirtiendose en la materia
			con más índices reprobatorios.
		</p>
		<p>
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
		<p>
			De acuerdo al "Cronograma para el Primer Departamental" del 2023, se trataran los siguientes
			temas:
		</p>
		<ol>
			<li>Operaciones con fracciones.</li>
			<li>La fracción como la parte de un todo.</li>
			<li>Razones y proporciones.</li>

			<li>Leyes de los exponentes.</li>
			<li>Operaciones con polinomios (adición y sustracción).</li>
			<li>Valor numérico de expresiones algebraicas.</li>
		</ol>
		<h3>Ejercicios</h3>
		<p>Los 7 ejercicios presentados a continuación han sido extraidos del examen 2023-1.</p>
		<EjercicioMate>
			<p>1. Calcular el valor numérico de la siguiente expresión algebraíca para los valores:</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores molestiae dolorem suscipit
				vero eligendi, quibusdam harum! Minus odit rem dolor nostrum officiis, adipisci earum
				sapiente dolore tenetur porro laudantium fugit?
			</p>
			<p>
				<Katex math={'a=-\\frac{2}{3},\\hspace{2mm} b=-3,\\hspace{2mm} c= \\frac{1}{5}'} />
				<Katex math={String.raw`\frac{n!}{k!(n-k)!} = \binom{n}{k}`} />
				<Katex math={String.raw`\sqrt[n]{1+x+x^2+x^3+\dots+x^n}`} />
			</p>
		</EjercicioMate>
	</section>
</article>
