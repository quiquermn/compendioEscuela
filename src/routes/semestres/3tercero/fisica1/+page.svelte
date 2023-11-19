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
		<h3>Multiplicación de vectores</h3>
		<h4>Escalar por vector</h4>
		<p>
			El producto de un escalar <Katex math="s" /> y un vector <Katex math={String.raw`\vec{v}`} /> es
			un nuevo vector cuya magnitud es <Katex math="sv" /> con dirección idéntica que <Katex
				math={String.raw`\vec{v}`}
			/> si <Katex math="s" /> es positiva y opuesta si es negativa.
		</p>
		<p>
			Para dividir <Katex math={String.raw`\vec{v}`} /> entre <Katex math="s" />, se multiplica <Katex
				math={String.raw`\vec{v}`}
			/> por <Katex math={String.raw`\frac{1}{s}`} />
		</p>
		<h4>Producto Escalar</h4>
		<p>
			El <span class="font-bold">producto escalar (producto punto)</span> de dos vectores es un
			<span class="font-bold">número real</span>
			formado por el producto de sus magnitudes y el coseno del ángulo más pequeño entre ellos. Su
			<span class="font-bold"> representación matemática </span>
			es la siguiente, donde <Katex math={String.raw`\vec{a}`} /> y <Katex
				math={String.raw`\vec{b}`}
			/> son los vectores y <Katex math={String.raw`\theta`} /> es el ángulo entre ellos:
			<Katex
				class="mt-2 text-center text-lg"
				math={String.raw`\vec{a} \cdot \vec{b} = a b cos\theta`}
			/>
		</p>
		<p>
			El producto escalar de dos vectores es un número real, por lo tanto no tiene dirección. Sin
			embargo, se puede decir que <span class="font-bold">
				el producto escalar de dos vectores es positivo si el ángulo entre ellos es menor a 90°,
				negativo si el ángulo entre ellos es mayor a 90° y 0 si el ángulo entre ellos es 90°
			</span>.
		</p>
		<p>
			La ley conmutativa aplica al producto escalar, por lo tanto se puede decir que: <Katex
				class="mt-2 text-center text-lg"
				math={String.raw`\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{a}`}
			/>
		</p>

		<p>
			Basándose en las reglas previamente introducidas, se pueden obtener los siguientes <span
				class="font-bold"
			>
				productos notables:</span
			>
			<Katex
				class="mt-2 text-center text-lg"
				math={String.raw`\hat{i} \cdot \hat{i} = \hat{j} \cdot \hat{j} = \hat{k} \cdot \hat{k} = 1`}
			/>
			<Katex
				class="mt-2 text-center text-lg"
				math={String.raw`\hat{i} \cdot \hat{j} = \hat{j} \cdot \hat{k} = \hat{k} \cdot \hat{i} = 0`}
			/>
		</p>
		<p>
			Cuando dos vectores están en <span class="font-bold">notación de unitarios</span>, su producto
			punto se pede escribir como:
			<Katex
				class="mt-2 text-center text-lg"
				math={String.raw`\vec{a} \cdot \vec{b} = (a_{x}\hat{i} + a_{y}\hat{j} + a_{z}\hat{k}) \cdot (b_{x}\hat{i} + b_{y}\hat{j} + b_{z}\hat{k})`}
			/>
			lo cual se puede expandir debido a la ley distributiva y a los productos notables en:
			<Katex
				class="mt-2 text-center text-lg"
				math={String.raw`\vec{a} \cdot \vec{b} = a_{x}b_{x} + a_{y}b_{y} + a_{z}b_{z}`}
			/>
		</p>

		<h4>Producto vectorial</h4>
		<p>
			El <span class="font-bold">producto vectorial (producto cruz)</span> de dos vectores es un
			nuevo vector perpendicular al plano formado por los vectores originales. Su magnitud es el
			producto de las magnitudes de los vectores originales y el seno del ángulo más pequeño entre
			ellos. Su
			<span class="font-bold">representación matemática</span>
			es la siguiente, donde <Katex math={String.raw`\vec{a}`} /> y <Katex
				math={String.raw`\vec{b}`}
			/> son los vectores y <Katex math={String.raw`\theta`} /> es el ángulo entre ellos: <Katex
				class="mt-2 text-center text-lg"
				math={String.raw`\left | \vec{a} \times \vec{b} \right |  = a b sen\theta`}
			/>
		</p>
		<p>
			Para saber el sentido del vector resultante se utiliza algo conocido como la <span
				class="font-bold">regla de la mano derecha</span
			> y consiste en colocar los dos vectores cola a cola sin alterar sus orientaciones, e imaginar
			una línea perpendicular a su plano. Pretende poner tu mano derecha alrededor de dicha línea en
			una manera en la que tus dedos cierran por el ángulo más pequeño entre ellos, tu pulgar estirado
			apunta hacia la dirección del vector nuevo.
		</p>
		<p>
			En el producto cruz el orden de la multiplicación es importante, porque:
			<Katex
				class="mt-2 text-center text-lg"
				math={String.raw`\vec{a} \times \vec{b} = -( \vec{b} \times \vec{a})`}
			/>
		</p>
		<p>
			Basándose en las reglas previamente introducidas, se pueden obtener los siguientes <span
				class="font-bold"
			>
				productos notables:</span
			>
			<Katex
				class="mt-2 text-center text-lg"
				math={String.raw`\hat{i} \times \hat{i} = \hat{j} \times \hat{j} = \hat{k} \times \hat{k} = \vec{0} \\`}
			/>
		</p>
		<p class="mx-auto flex w-max gap-10">
			<Katex
				class="mt-2 text-center text-lg"
				math={String.raw`
					\hat{i} \times \hat{j}  = \hat{k} \\ 
					\hat{j} \times \hat{k}  = \hat{i}\\ 
					\hat{k} \times \hat{i} =\hat{j} \\
			`}
			/>
			<Katex
				class="mt-2 text-center text-lg"
				math={String.raw`
					\hat{j} \times \hat{i}  = -\hat{k} \\ 
					\hat{k} \times \hat{j}  = -\hat{i}\\ 
					\hat{i} \times \hat{k}  = -\hat{j} \\`}
			/>
		</p>
		<p>
			La ley distributiva si aplica en el producto vectorial por lo que el producto cruz de dos
			vectores en notación unitaria se puede expandir a:
			<Katex
				class="mt-2 text-center text-lg"
				math={String.raw`\vec{a} \times \vec{b} = (a_{y}b_{z} - b_{y}a_{z})\hat{i} + (a_{z}b_{x} - b_{z}a_{x})\hat{j} + (a_{x}b_{y} - b_{x}a_{y})\hat{k}`}
			/>
		</p>
		<p>
			Si el producto cruz da como resultante <Katex math={'\\vec{0}'} />, significa que son
			<span class="font-bold">paralelos</span>
			<Katex
				class="mt-2 text-center text-lg"
				math={String.raw`\vec{a} \times \vec{b} = \vec{0}\\ \therefore \theta = 0^{\circ}`}
			/>
		</p>

		<h3>Equilibrio</h3>
		<h4>1° Condición</h4>
		<p>
			Un cuerpo está en <span class="font-bold">equilibrio traslacional</span> si la suma vectorial
			de las fuerzas que actúan sobre dicho cuerpo es 0. Es decir:
			<Katex math={String.raw`\sum \vec{F} = 0`} />
		</p>

		<h4>2° Condición</h4>
		<p>
			Un cuerpo está en <span class="font-bold">equilibrio rotacional</span> si la suma vectorial de
			los torques que actúan sobre dicho cuerpo es 0. Es decir:
			<Katex math={String.raw`\sum \tau _{o} = 0`} />
		</p>
	</section>
	<section>
		<h2>Tercer Parcial</h2>

		<h3>Movimiento Parabólico</h3>
	</section>
</article>
