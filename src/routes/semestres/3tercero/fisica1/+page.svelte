<script>
	import Katex from '$lib/Katex.svelte'
</script>

<article>
	<h1>Física</h1>
	<section>
		<h2>Breve Introducción (En desarrollo)</h2>
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, quidem dignissimos? Laborum
			ullam temporibus ipsa sunt aliquam obcaecati ipsam recusandae, harum, similique iure, nemo
			corrupti dignissimos eaque modi voluptate dolorum.
		</p>
	</section>
	<section>
		<h2>Primer Parcial (En desarrollo)</h2>
	</section>
	<section>
		<h2>Segundo Parcial (En desarrollo)</h2>
		<h3>Equilibrio</h3>
		<h4>1° Condición</h4>
		<p>
			Un cuerpo está en <span class="font-bold">equilibrio traslacional</span> si la suma vectorial
			de las fuerzas que actúan sobre dicho cuerpo es 0. Es decir: <br />
			<Katex math={String.raw`\sum \tau _{o} = 0`} />
		</p>

		<h4>2° Condición</h4>
		<p>
			Un cuerpo está en <span class="font-bold">equilibrio rotacional</span> si la suma vectorial de
			los torques que actúan sobre dicho cuerpo es 0. <br />
			<Katex math={String.raw`\sum \vec{F} = 0`} />
		</p>
	</section>
	<section>
		<h2>Tercer Parcial</h2>

		<h3>Movimiento Parabólico</h3>
		<h4 />
	</section>
</article>
