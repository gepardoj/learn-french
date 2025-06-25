import { writable } from "svelte/store";

type State = "home" | "in_game" | "result";
export type Difficulty = "easy" | "medium" | "hard";

type Store = {
  gameState: State;
  difficulty: Difficulty | null;
};

function createGameStore() {
  const { set, subscribe, update } = writable<Store>({
    gameState: "home",
    difficulty: null,
  });
  return {
    subscribe,
    start: (difficulty: Difficulty) => {
      update(state => ({ ...state, gameState: "in_game", difficulty }));
    },
    close: () => {
      update(state => ({ ...state, gameState: "home" }));
    }
  };
}


export const gameStore = createGameStore();