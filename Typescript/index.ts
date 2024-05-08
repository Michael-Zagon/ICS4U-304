/**
 * The program is the classic
 * what towerOfHanoi program
 *
 * By: Michael Zagon
 * Version: 1.0
 * Since:   2024-05-06
 */

import { createPrompt } from 'bun-promptx'

/**
 * This is the towerOfHanoi function.
 */
function towerOfHanoi(
  userInput: number,
  startPeg: number,
  endPeg: number
): void {
  // if the user inputs 1, there is only 1 step
  if (userInput === 1) {
    console.log(`Disk ${userInput} from peg ${startPeg} to peg ${endPeg}`)
    // completes formula to move disk 1 to peg 3, etc
  } else {
    towerOfHanoi(userInput - 1, startPeg, 6 - startPeg - endPeg)
    console.log(`Disk ${userInput} from peg ${startPeg} to peg ${endPeg}`)
    towerOfHanoi(userInput - 1, 6 - startPeg - endPeg, endPeg)
  }
}


// Asks for the users input
console.log('This is a tower of hanoi program')

// asks for the user input
const userNum = Number(prompt('Enter how many disks (1 - inf) '))

// Checks inputs validity
if (isNaN(userNum)) {
  console.log('Invalid Input')
} else {
  towerOfHanoi(userNum, 1, 3)
}
console.log('\nDone.')
