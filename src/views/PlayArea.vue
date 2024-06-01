<script setup>
import { ref, computed } from "vue";
import { useBoardStore } from "../stores/board.js";

const board = useBoardStore();
</script>

<template>
  <div>
    <table id="game-board">
      <tr v-for="(row, rowIndex) in board.boardGrid" class="game-board-row">
        <td
          v-for="(space, spaceIndex) in row[1]"
          class="game-board-square"
          :class="[
            (rowIndex + 1 + spaceIndex + 1) % 2 === 0 ? 'black' : 'white',
          ]"
        >
          {{ `${row[0]}${space}` }}
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
#game-board {
}

.game-board-row {
  padding: 0px;
  margin: 0px;
  height: 75px;
  width: 600px;
}

.game-board-square {
  width: 75px;
  height: 75px;
}

.game-board-square.white {
  background-color: white;
}
.game-board-square.black {
  background-color: black;
}
</style>
