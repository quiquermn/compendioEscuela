<script>
	import Katex from '$lib/Katex.svelte'
</script>

<article>
	<h1>Geometría Analítica</h1>
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
	</section>
	<section>
		<h2>Tercer Parcial (Secciones cónicas)</h2>
		<h3>Parábolas horizontales y verticales</h3>
		<h4>Definición</h4>
		<p>
			Una parábola es definida como una sección cónica.Las parábolas son formadas por un conjunto de
			puntos que se caracterizan por tener la misma distancia desde un punto fijo, llamado el foco,
			y una línea recta, llamada la directriz.
		</p>
		<h4>Elementos fundamentales</h4>
		<ul>
			<li>Vértice.</li>
			<li>Foco.</li>
			<li>Longitud focal.</li>
			<li>Lado recto.</li>
			<li>Directriz.</li>
			<li>Eje.</li>
		</ul>
		<h4>Ecuaciones generales de la parábola</h4>
		<ul>
			<li>
				<Katex math={String.raw`Ax^2+Dx+Ey+F=0`} /> (parábola horizontal)
			</li>
			<li>
				<Katex math={String.raw`Cy^2+Dx+Ey+F=0`} /> (parábola vertical)
			</li>
		</ul>

		<h4>Ecuaciones canónicas de la parábola</h4>
		<ul>
			<li>
				<Katex math={String.raw`\left (y-k  \right )^2 = 4p\left ( x-h \right )`} />
			</li>
			<li>
				<Katex math={String.raw`\left (x-h  \right )^2 = 4p\left ( y-k \right )`} />
			</li>
		</ul>
		<p>
			Donde <Katex math="p" /> es el parametro y <Katex math={String.raw`V\left ( h,k \right )`} /> el
			vértice de la parábola. Si <Katex math="p" /> es positivo la parábola se abre hacia su eje, y si
			es negativo la parábola se abre contrario a su eje.
		</p>
		<p>
			Si la parábola es horizontal, el foco tiene coordenadas:
			<Katex class="block" math={String.raw`F\left ( h+p,k \right )`} />
		</p>
		<p>
			Si la parábola es vertical, el foco tiene coordenadas:
			<Katex class="block" math={String.raw`F\left ( h,k+p \right )`} />
		</p>
		<p>
			La longitud focal de la parábola o lado recto es:
			<Katex class="block" math={String.raw`LR = 4p`} />
		</p>

		<h4>Propiedades de la parábola</h4>
		<ul>
			<li>
				La parábola es simétrica respecto a su eje.
				<Katex math={String.raw`P\left ( x,y \right )`} /> y
				<Katex math={String.raw`P'\left ( x',y' \right )`} /> son puntos de la parábola, entonces:
				<Katex math={String.raw`x=x'`} />
				<Katex math={String.raw`y=-y'`} />
			</li>
			<li>
				La distancia focal es igual a la distancia del vértice a la directriz.
				<Katex math={String.raw`F\left ( h+p,k \right )`} /> y
				<Katex math={String.raw`D\left ( -p+h,k \right )`} /> son puntos de la parábola, entonces:
				<Katex math={String.raw`FD=VD`} />
			</li>
			<li>
				La distancia focal es la mitad de la longitud focal.
				<Katex math={String.raw`F\left ( h+p,k \right )`} /> y
				<Katex math={String.raw`D\left ( -p+h,k \right )`} /> son puntos de la parábola, entonces:
				<Katex math={String.raw`FD=2p`} />
			</li>
		</ul>

		<h3>Parábolas inclinadas</h3>
		<h4>Definición</h4>
		<p>
			Una parábola inclinada es aquella cuyo eje no es paralelo a ninguno de los ejes coordenados. A
			diferencia de las parábolas horizontales y verticales, su orientación se desvía de la vertical
			u horizontal, lo que introduce componentes adicionales en sus ecuaciones y propiedades.
		</p>

		<h4>Ecuación de la parábola inclinada</h4>
		<p>
			Se obtiene a partir de la ecuación siguiente:
			<Katex class="text-lg" math={String.raw`\frac{(ax+by+c)^2}{a^2+b^2}=(x-f_x)^2+(y-f_y)^2`} />
			Donde <Katex math="f_x" /> y <Katex math="f_y" /> son las coordenadas del foco. Y <Katex
				math="ax+by+c = 0"
			/> la ecuación de la directriz.
		</p>
	</section>
</article>
