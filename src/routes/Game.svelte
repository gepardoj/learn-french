<script lang="ts">
  import Button from "../stories/Button.svelte";
  import ButtonIcon from "../stories/ButtonIcon.svelte";
  import CloseSvg from "../lib/images/close.svg?raw";
  import { words } from "./words";
  import { gameStore, MAX_ROOM, WORDS_IN_ROOM } from "../stores/stores";
  import ProgressBar from "../stories/ProgressBar.svelte";

  type ConfirmButtonState = "check" | "error" | "success";

  const close = () => {
    gameStore.close();
    choosen_variant = -1;
    room = 0;
  };
  const choose_variant = (i: number) => {
    choosen_variant = i;
  };
  const check = () => {
    if (question_fr(room) === _4variants[choosen_variant][0]) {
      question_state = "success";
    } else {
      question_state = "error";
      errors++;
    }
    percentAnswered = ((room + 1) / MAX_ROOM) * 100;
  };
  const next = () => {
    room++;

    if (room >= MAX_ROOM) {
      gameStore.finish(errors);
    }
    _4variants = sortFor4Variants(room);
    choosen_variant = -1;
    question_state = "check";
  };
  const fr = (i: number) => sortedWords[i][0];
  const question_fr = (i: number) => sortedWords[i * WORDS_IN_ROOM][0];
  const variant = (i: number) => _4variants[i][1];
  const sortFor4Variants = (i: number) =>
    sortedWords
      .slice(i * WORDS_IN_ROOM, (i + 1) * WORDS_IN_ROOM)
      .toSorted(() => (Math.random() > 0.5 ? 1 : -1));

  let room = 0;
  let percentAnswered = 5;
  let errors = 0;
  let choosen_variant = -1;
  let question_state: ConfirmButtonState = "check";
  const sortedWords = words.toSorted(() => (Math.random() > 0.5 ? 1 : -1));
  let _4variants: string[][] = [];
  console.log(sortedWords);
  _4variants = sortFor4Variants(room);
</script>

<div class="flex gap-6 items-center">
  <ButtonIcon onclick={close} icon={CloseSvg} alt="Close" />
  <ProgressBar percent={percentAnswered} />
</div>
<section class="flex flex-1 mt-10 flex-col justify-center gap-3">
  <h2 class="text-3xl text-center">{question_fr(room)}</h2>
  {#each _4variants as _, i (_[1])}
    <Button
      onclick={() => choose_variant(i)}
      variant={choosen_variant === i ? "primary" : undefined}
      label={variant(i)}
    />
  {/each}
  <Button
    class="mt-auto"
    onclick={() => (question_state === "check" ? check() : next())}
    variant={question_state === "success"
      ? "success"
      : question_state === "error"
        ? "error"
        : undefined}
    disabled={choosen_variant === -1}
    label={question_state === "success"
      ? "Continue"
      : question_state === "error"
        ? "Got it"
        : "Check"}
  />
</section>
