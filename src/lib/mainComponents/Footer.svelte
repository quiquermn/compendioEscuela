<script>
	import { AppBar } from '@skeletonlabs/skeleton'
	import winkyMilly from '$lib/components/milly_imgs/winkymilly.webp'
</script>

<AppBar gridColumns="grid-cols-1">
	<div class="flex w-full">
		<span class="mr-auto flex items-center">
			<span>
				Creado por
				<a class="font-bold" href="https://github.com/KalebManzanita">Kaleb</a>
				y
				<a class="font-bold" href="https://github.com/ZorvShadow">Quique</a>
			</span>
		</span>
		<div class="flex items-center gap-4">
			<a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es">
				<img
					alt="Creative Commons License"
					class="border-0 shadow"
					height="31"
					width="88"
					src="/icons/CC-BY-NC-SA-4.svg"
				/>
			</a>
			<img
				aria-hidden="true"
				class="aspect-square rounded-xl shadow"
				src={winkyMilly}
				width="50px"
				alt="Winky Milly"
			/>
		</div>
	</div>
</AppBar>
