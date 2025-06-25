<script lang="ts">
	import Button from "../stories/Button.svelte";
	import { gameStore, type Difficulty } from "../stores/stores";
	import Game from "./Game.svelte";

	const start = (diff: Difficulty) => {
		gameStore.start(diff);
	};
</script>

{#if $gameStore.gameState === "home"}
	<section class="flex flex-[0.3] flex-col justify-center self-center gap-3">
		<h1>Learn French</h1>
		<Button onclick={() => start("easy")} label="Easy. Match words" />
		<Button
			onclick={() => start("medium")}
			label="Medium. Construct sentences"
		/>
		<Button onclick={() => start("hard")} label="Hard. Writing sentences" />
	</section>
{:else if $gameStore.gameState === "in_game"}
	<Game />
{/if}

<style>
</style>
