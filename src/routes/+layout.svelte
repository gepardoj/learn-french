<script lang="ts">
	import "../app.css";
	import { gameStore } from "../stores/stores";
	import Footer from "./Footer.svelte";

	let { children } = $props();
</script>

<div class="app">
	<main>
		{@render children()}
	</main>

	{#if $gameStore.gameState === "home"}<Footer />
	{/if}
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 600px;
		margin: 0 auto;
		box-sizing: border-box;
		flex-grow: 1;
	}
</style>
