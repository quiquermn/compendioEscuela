<!-- src/routes/+error.svelte -->
<script>
	import DefaultLayout from '/src/layouts/DefaultLayout.svelte';
</script>

<DefaultLayout title="Error en la página">
	<main class="mainpart">
		<div class="indicebox">
			<ul class="indice">
				<!-- <li>El índice de la página será autogenerado por el javascript dentro de /js/blog.js</li> -->
			</ul>
		</div>
		<article id="mainarticle">
			<!--Es importante que estos contenidos se encuentren dentro de la etiqueta article, y con el id main article, usualmente solo habrá uno de estos por cada página, debido a que contienen un h1, no es recomendado utilizarlo más de una vez-->

			<h1 class="centrar">
				Error 404: Página no encontrada
				<!--Insertar el título de la página en general, por ejemplo: "Actividades de Álgebra"-->
			</h1>
			<!--Para la correcta visualización del índice, deberá de estar separada cada sección con un h2, recuerda iniciar con un h1 para marcar la jerarquía de la página (es muy importante para los lectores de pantalla o un visualizador en modo lectura como el de Safari)-->
			<h2>
				¿Qué Puedes Hacer?
				<!--Dentro de este, iran los subitulos del contenido, ejemplo: "Exámenes parciales"-->
			</h2>
			<p class="justificar samesubtopic">
				Si crees que es un error favor de contactar a cualquiera de los creadores del sitio.
				<!--Existen diversas clases para organizar el parrafo, una de ellas es "justificar", como su nombre lo dice, justifica el texto dentro del párrafo-->
				<!--Si el párrafo no es el último, agregale la clase "samesubtopic", esta remueve los padding para que se sienta continuo el documento-->

				<!--Aquí el contenido o descripción de las actividades, intentaré hacer un div para poner imagenes, etc.-->
			</p>
		</article>
	</main>
</DefaultLayout>
