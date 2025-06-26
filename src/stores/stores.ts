import { writable } from "svelte/store";

type State = "home" | "in_game" | "result";
export type Difficulty = "easy" | "medium" | "hard";

export const MAX_ROOM = 10 as const;
export const WORDS_IN_ROOM = 4 as const;

type Store = {
  gameState: State;
  difficulty: Difficulty | null;
  errors: number;
};

function createGameStore() {
  const { set, subscribe, update } = writable<Store>({
    gameState: "home",
    difficulty: null,
    errors: 0,
  });
  return {
    subscribe,
    start: (difficulty: Difficulty) => {
      update(state => ({ ...state, gameState: "in_game", difficulty }));
    },
    close: () => {
      update(state => ({ ...state, gameState: "home" }));
    },
    finish: (errors: number) => {
      update(state => ({ ...state, gameState: "result", errors }));
    },
  };
}


export const gameStore = createGameStore();