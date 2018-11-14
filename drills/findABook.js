/*
 * Binary search tree
 * Takes a library and a target Dewey code as an argument
 * Capture the start and the end as variables
 * While look through while the start < end
 * Get the middle
 * Check to see if the middle's dewey code is equal to the target code
 * Either:
 ** Find the correct code
 ** Linearly search using a for loop until we find it
 ** Otherwise return not found
 */

function findABook(library, targetDewey, title) {
  let start = 0;
  const end = library.length;

  while (start < end) {
    const middle = Math.floor((start + end) / 2);

    if (library[middle].dewey === targetDewey) {
      if (library[middle].title === title) {
        return library[middle];
      }

      // Search left
      for (let i = middle + 1; i < library[middle].length; i++) {
        const book = library[middle[i]];

        if (book === title) {
          return library[i];
        }
      }

      // Search right
      for (let i = middle - 1; i < library[middle].length; i++) {
        const book = library[middle[i]];

        if (book === title) {
          return library[i];
        }
      }

      // Didn't find it
      return null;
    }
  }
  // If while loop returns null we just return null since we dont have it
  return null;
}
