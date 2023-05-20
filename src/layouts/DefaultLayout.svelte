<!-- src/layouts/DefaultLayout.svelte -->
<script>
	export let title;
	import Katex from 'svelte-katex';
	import Spoiler from '/src/components/Spoiler.svelte';
	import Header from '/src/components/Header.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<link
		href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap"
		rel="stylesheet"
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
		rel="stylesheet"
	/>
	<!-- Añade la fuente de Lexend -->

	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gardevoir" />
	<!-- Añade el reset de css -->

	<link rel="shortcut icon" href="/imgs/sillymilly.webp" type="image/x-icon" />
	<!-- Añade el favicon -->

	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
		integrity="sha384-MlJdn/WNKDGXveldHDdyRP1R4CTHr3FeuDNfhsLPYrq2t0UBkUdK2jyTnXPEK1NQ"
		crossorigin="anonymous"
	/>

	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />

	<meta name="description" content="Una página creada para la ayuda de todos los alumnos" />
	<meta name="theme-color" content="#2c3333" />
	<link rel="canonical" href={'https://compendio.quiqueso.com' + $page.url.pathname} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={'Compendio Bátiz - ' + title} />

	<meta property="og:image:width" content="128" />
	<meta property="og:image:height" content="128" />
	<meta property="og:image" content="/imgs/sillymilly.webp" />
	<meta property="og:image:alt" content="Foto del gato Milly" />

	<link rel="stylesheet" href="/css/style.css" />
	<title>{'Compendio Bátiz - ' + title}</title>
</svelte:head>
<div id="mainpage">
	<Header />
	<slot />
	<footer id="footer">
		<span>
			Creado por <a href="https://github.com/KalebManzanita">Kaleb</a> y
			<a href="https://github.com/ZorvShadow">Quique</a>
		</span>
		<div class="sendtoright">
			<a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es">
				<img
					alt="Creative Commons License"
					style="border-width: 0"
					height="31"
					width="88"
					src="/imgs/CC-BY-NC-SA-4.svg"
				/>
			</a>
		</div>
	</footer>
</div>
