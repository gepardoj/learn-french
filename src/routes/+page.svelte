<script lang="ts">
	import Button from "../stories/Button.svelte";
	import { gameStore, type Difficulty } from "../stores/stores";
	import Game from "./Game.svelte";
	import Result from "./Result.svelte";

	const start = (diff: Difficulty) => {
		gameStore.start(diff);
	};
</script>

{#if $gameStore.gameState === "home"}
	<section class="flex flex-[0.3] flex-col justify-center gap-3">
		<h1 class="text-3xl text-center">Learn French</h1>
		<Button onclick={() => start("easy")} label="Easy. Match words" />
		<Button
			onclick={() => start("medium")}
			label="Medium. Construct sentences"
		/>
		<Button onclick={() => start("hard")} label="Hard. Writing sentences" />
	</section>
{:else if $gameStore.gameState === "in_game"}
	<Game />
{:else if $gameStore.gameState === "result"}
	<Result />
{/if}

<style>
</style>
