import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useBoardStore = defineStore("board", () => {
  const boardGrid = ref([
    ["a", [1, 2, 3, 4, 5, 6, 7, 8]],
    ["b", [1, 2, 3, 4, 5, 6, 7, 8]],
    ["c", [1, 2, 3, 4, 5, 6, 7, 8]],
    ["d", [1, 2, 3, 4, 5, 6, 7, 8]],
    ["e", [1, 2, 3, 4, 5, 6, 7, 8]],
    ["f", [1, 2, 3, 4, 5, 6, 7, 8]],
    ["g", [1, 2, 3, 4, 5, 6, 7, 8]],
    ["h", [1, 2, 3, 4, 5, 6, 7, 8]],
  ]);

  return { boardGrid };
});
