<script lang="ts">
	import MillyTheSilly from './MillyTheSilly.svelte'

	import MenuDespleglable from './MenuDespleglable.svelte'
</script>

<header
	class="h-30 z-10 flex min-h-max w-full flex-row items-center bg-primaryinverse-50 p-5 lg:flex-col xl:flex-row"
>
	<div class="mb-0 mr-auto flex items-center gap-4 lg:mb-2 lg:mr-0 xl:mb-0 xl:mr-auto">
		<MillyTheSilly />
		<span class="text-center text-3xl font-bold text-primary-950"> Compendio Bátiz </span>
	</div>
	<MenuDespleglable />
</header>

<style>
</style>
