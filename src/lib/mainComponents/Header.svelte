<script>
	import { AppBar } from '@skeletonlabs/skeleton'
	import MillyTheSilly from '$lib/components/MillyTheSilly.svelte'
	import { LightSwitch } from '@skeletonlabs/skeleton'
</script>

<AppBar>
	<svelte:fragment slot="lead"><MillyTheSilly></MillyTheSilly></svelte:fragment>
	<span class="text-center text-3xl font-bold"> Test Épico 1234 </span>
	<svelte:fragment slot="trail"><LightSwitch></LightSwitch></svelte:fragment>
</AppBar>
