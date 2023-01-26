
const binarySearch = (list: number[], target: number): number | null => {
    let leftPointer = 0; // the beginning of the list
    let rightPointer = list.length - 1; // the end of the list

    /*
      When leftPointer is bigger than rightPointer it means that
      the target we were looking for doesn't exist in the array so we return []
    */
    while (leftPointer < rightPointer) {

        // Rounding down the middle pointer cause our input might not be perfect and we can't have decimal indexes
        let middlePointer = Math.floor((leftPointer + rightPointer) / 2)

        let guess = list[middlePointer];

        if (guess === target) { // Checking if the target we were looking for was present in the first iteration (Middle element)
            return guess; // if we found the item we return it
        }
        if (guess > target) {  // The guess was too high

            /*
              If the guess was too low or too high update the pointer accordingly,
              which will reduce half the input in each iteration O(log₂n)
            */

            rightPointer = middlePointer--;
        } else {  // The guess was too low
            leftPointer = middlePointer++;
        }
    }
    return null;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 4))