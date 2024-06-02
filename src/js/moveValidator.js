/**
 * @typedef {object} moveObj The object showing possible moves for a piece
 * @property {string} row
 * @property {string} col
 * @property {boolean} hasEnemy
 * @property {boolean} hasAlly
 */

/**
 *
 * @param {object} piece Piece object, need the piece level, current row, and current col
 * @param {boolean} isWhite If white, row increases, for black, row decreases
 * @returns {moveObj[]} An array of objects showing valid moves, and if a enemy is on the space
 */
function showValidMoves({ level: pieceType, row, col }, isWhite) {
  if (pieceType === 1) {
    return movePawn(row, col, isWhite);
  }
}

/**
 * Moves for pawns. Should be forward 1, 2 on first move. Plus over 1 is there's an enemy.
 * @param {number} row
 * @param {number} col
 * @param {boolean} isWhite
 * @returns {moveObj[]}
 */
function movePawn(row, col, isWhite) {
  const moves = [];
  let movementRow = 1;

  if (isWhite) {
    movementRow = -1;
  }

  // Cant move if its the first or last row
  if (row !== 1 && row !== 8) {
    moves.push({
      row: (row += movementRow),
      col,
      hasEnemy: spaceHasEnemy((row += movementRow), col),
      hasAlly: spaceHasAlly((row += movementRow), col),
    });
  }

  // For starting pawns, move 2
  if ((isWhite && row === 7) || (!isWhite && row === 2)) {
    moves.push({
      row: (row += movementRow * 2),
      col,
      hasEnemy: spaceHasEnemy((row += movementRow * 2), col),
      hasAlly: spaceHasAlly((row += movementRow * 2), col),
    });
  }

  // If an enemy is up and over, add as a valid move
  if (spaceHasEnemy((row += movementRow), (col += movementRow))) {
    moves.push({
      row: (row += movementRow),
      col: (col += movementRow),
      hasEnemy: true,
      hasAlly: false,
    });
  }
  if (spaceHasEnemy((row += movementRow), (col += movementRow * -1))) {
    moves.push({
      row: (row += movementRow),
      col: (col += movementRow),
      hasEnemy: true,
      hasAlly: false,
    });
  }

  return moves;
}

/**
 * Checks this space to see if it contains an enemy
 * @param {number} row
 * @param {number} col
 * @returns {boolean}
 */
function spaceHasEnemy(row, col) {}

/**
 * Checks this space to see if it contains an ally
 * @param {number} row
 * @param {number} col
 * @returns {boolean}
 */
function spaceHasAlly(row, col) {}
