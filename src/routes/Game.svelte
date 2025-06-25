<script lang="ts">
  import Button from "../stories/Button.svelte";
  import ButtonIcon from "../stories/ButtonIcon.svelte";
  import CloseSvg from "../lib/images/close.svg?raw";
  import { words } from "./words";
  import { gameStore } from "../stores/stores";

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
    confirm_button_state =
      question_fr(room) === _4variants[choosen_variant][0]
        ? "success"
        : "error";
  };
  const next = () => {
    room++;
    _4variants = sortFor4Variants(room);
    choosen_variant = -1;
    confirm_button_state = "check";
  };
  const fr = (i: number) => sortedWords[i][0];
  const question_fr = (i: number) => sortedWords[i * WORDS_IN_ROOM][0];
  const variant = (i: number) => _4variants[i][1];
  const sortFor4Variants = (i: number) =>
    sortedWords
      .slice(i * WORDS_IN_ROOM, (i + 1) * WORDS_IN_ROOM)
      .toSorted(() => (Math.random() > 0.5 ? 1 : -1));

  const MAX_ROOM = 10 as const;
  const WORDS_IN_ROOM = 4 as const;

  let room = 0;
  let errors = 0;
  let choosen_variant = -1;
  let confirm_button_state: ConfirmButtonState = "check";
  const sortedWords = words.toSorted(() => (Math.random() > 0.5 ? 1 : -1));
  let _4variants: string[][] = [];
  console.log(sortedWords);
  _4variants = sortFor4Variants(room);
</script>

<ButtonIcon onclick={close} icon={CloseSvg} alt="Close" />
<section class="flex flex-1 flex-col justify-center self-center gap-3">
  <h2 class="text-center">{question_fr(room)}</h2>
  {#each _4variants as _, i (_[1])}
    <Button
      onclick={() => choose_variant(i)}
      variant={choosen_variant === i ? "primary" : undefined}
      label={variant(i)}
    />
  {/each}
  <Button
    class="mt-auto"
    onclick={() => (confirm_button_state === "check" ? check() : next())}
    variant={confirm_button_state === "success"
      ? "success"
      : confirm_button_state === "error"
        ? "error"
        : undefined}
    disabled={choosen_variant === -1}
    label={confirm_button_state === "success"
      ? "Continue"
      : confirm_button_state === "error"
        ? "Got it"
        : "Check"}
  />
</section>
