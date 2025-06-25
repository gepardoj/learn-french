<script lang="ts">
  interface Props {
    percent: number;
  }
  const { percent }: Props = $props();

  let prevPercent = 0;
  let actualPercent = $derived(percent);

  setTimeout(() => {
    const progress = document.querySelector(`#progress`);
    if (progress instanceof HTMLElement) progress.classList.remove("animate");
  }, 50);

  $effect(() => {
    console.log("changing", prevPercent, actualPercent);
    const progress = document.querySelector(`#progress`);
    if (!(progress instanceof HTMLElement)) return;
    progress.classList.add("animate");
    prevPercent = actualPercent;
    setTimeout(() => progress.classList.remove("animate"), 1000);
  });
</script>

<div class="w-full h-5 bg-gray-100 rounded-xl">
  <div
    id="progress"
    class="h-full bg-linear-to-r from-primary to-weak rounded-xl animate"
    style={`width: ${actualPercent}%; --progress-from: ${prevPercent}%; --progress-to: ${actualPercent}%;`}
  ></div>
</div>

<style>
  .animate {
    animation: progressBar 1s ease-in-out;
    animation-fill-mode: both;
  }

  @keyframes progressBar {
    0% {
      width: var(--progress-from);
    }
    100% {
      width: var(--progress-to);
    }
  }
</style>
