<script>
	import { AppBar } from '@skeletonlabs/skeleton'
	import MillyTheSilly from '$lib/components/MillyTheSilly.svelte'
	import { LightSwitch } from '@skeletonlabs/skeleton'
</script>

<AppBar>
	<svelte:fragment slot="lead"><MillyTheSilly></MillyTheSilly></svelte:fragment>
	<a href="/" class="text-center text-3xl font-bold"> Test Épico 1234 </a>
	<svelte:fragment slot="trail"><LightSwitch></LightSwitch></svelte:fragment>
</AppBar>
