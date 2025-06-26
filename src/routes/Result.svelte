<script lang="ts">
  import { gameStore, MAX_ROOM } from "../stores/stores";
  import Button from "../stories/Button.svelte";

  const textByPercent = (percent: number) => {
    if (percent === 100) return "Are you even human?";
    if (percent > 90) return "Impressive!";
    if (percent > 70) return "Keep it up";
    if (percent > 50) return "Working...";
    return "So much to learn!";
  };
  const percent = ((MAX_ROOM - $gameStore.errors) / MAX_ROOM) * 100;
</script>

<section class="flex flex-1 flex-col justify-center gap-3">
  <h1 class="text-3xl text-center">{textByPercent(percent)}</h1>
  <h2 class="text-xl text-center">You answered {percent}% correctly</h2>
  <Button onclick={gameStore.close} class="mt-auto" label="Finish" />
</section>
